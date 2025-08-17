import '../styles/globals.css';
import { useEffect } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Prevent zoom on mobile devices
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
    }

    // Add loading state management
    const handleRouteStart = () => {
      document.body.classList.add('loading');
    };
    
    const handleRouteEnd = () => {
      document.body.classList.remove('loading');
    };

    // Performance optimization
    if (typeof window !== 'undefined') {
      // Preload critical resources
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'font';
      preloadLink.href = '/fonts/inter.woff2';
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="theme-color" content="#0f0f0f" />
        <meta name="msapplication-navbutton-color" content="#0f0f0f" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Prevent flash of unstyled content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            html, body { 
              margin: 0; 
              padding: 0; 
              background: linear-gradient(135deg, #0f0f0f, #1a1a1a, #2d2d2d);
              overflow-x: hidden;
            }
            #__next { 
              min-height: 100vh; 
              position: relative;
            }
            .loading {
              cursor: wait;
            }
            .loading * {
              pointer-events: none;
            }
          `
        }} />
      </Head>
      
      <Component {...pageProps} />
    </>
  );
}
