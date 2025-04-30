import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // For Netlify deployment, we need to transform API paths
  let apiUrl = url;
  
  // In production, convert /api/* to /.netlify/functions/*
  if (import.meta.env.PROD && url.startsWith('/api/')) {
    // Get the function name from the URL
    const functionName = url.replace('/api/', '');
    apiUrl = `/.netlify/functions/${functionName}`;
  }
  
  const res = await fetch(apiUrl, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    // Transform API URLs for Netlify in production
    let url = queryKey[0] as string;
    
    // In production, convert /api/* to /.netlify/functions/*
    if (import.meta.env.PROD && url.startsWith('/api/')) {
      // Get the function name from the URL
      const functionName = url.replace('/api/', '');
      url = `/.netlify/functions/${functionName}`;
    }
    
    const res = await fetch(url, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
