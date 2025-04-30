import { useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import CustomChatWidget from './CustomChatWidget';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // Update page title
    document.title = "Nadeem Chauhan Consultancy | Legal Services";

    // Add Google Material Icons
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Scroll to top on page load
    window.scrollTo(0, 0);

    return () => {
      // Clean up
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <NavBar />
      <main className="flex-grow overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <CustomChatWidget phoneNumber="919756188580" />
    </div>
  );
};

export default Layout;
