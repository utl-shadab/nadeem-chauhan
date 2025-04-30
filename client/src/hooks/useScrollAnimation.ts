import { useEffect, useState, useRef, RefObject } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook to detect when an element is visible in the viewport
 * and trigger animations
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): [RefObject<T>, boolean] {
  const { 
    threshold = 0.1, 
    rootMargin = '0px', 
    triggerOnce = true 
  } = options;
  
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}

/**
 * Hook to animate items in a staggered sequence when they enter the viewport
 */
export function useStaggeredAnimation(
  itemCount: number, 
  options: UseScrollAnimationOptions & { delay?: number, staggerDelay?: number } = {}
) {
  const { delay = 0, staggerDelay = 100, ...scrollOptions } = options;
  const [ref, isVisible] = useScrollAnimation(scrollOptions);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    if (isVisible && activeIndices.length < itemCount) {
      const timers: NodeJS.Timeout[] = [];
      
      for (let i = 0; i < itemCount; i++) {
        const timer = setTimeout(() => {
          setActiveIndices(prev => [...prev, i]);
        }, delay + i * staggerDelay);
        
        timers.push(timer);
      }
      
      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    }
  }, [isVisible, itemCount, delay, staggerDelay, activeIndices.length]);

  return { ref, activeIndices, isVisible };
}

export default useScrollAnimation;
