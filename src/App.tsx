import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Helmet } from 'react-helmet';
import LoadingSpinner from './components/common/LoadingSpinner';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Post = lazy(() => import('./pages/Post'));

const SCROLL_THRESHOLD = 200; // Distance in pixels to reach full transparency

function App() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const prevScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const navbarElement = document.getElementById('main-navbar');
    if (!navbarElement) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsVisible(currentScrollY < 250)

      prevScrollY.current = currentScrollY;

      const scrollFactor = Math.min(1, currentScrollY / SCROLL_THRESHOLD);
      const opacity = 1.0 - scrollFactor; 

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      navbarElement.style.backgroundColor = `rgba(34, 34, 34, ${opacity})`;
      const shadowOpacity = 0.2 * opacity;
      navbarElement.style.boxShadow = `0 2px 8px rgba(0, 0, 0, ${shadowOpacity})`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Calvian - Software Services</title>
        <meta name="description" content="Professional software services for modern businesses." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar
          id="main-navbar"
          className={`${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}
        /> 

        {location.pathname === '/' && <div className="absolute inset-0 bg-gray-100 design-chevron z-0" />}

        <main className="flex-grow pt-24 relative z-10 container mx-auto px-4 py-8">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<Post />} />
            </Routes>
          </Suspense>
        </main>

        {location.pathname === '/' &&
          <div className="flex justify-center w-full">
            <div className="bg-primary w-full" style={{height: "550px", margin: "-500px 0 -40px 0", bottom: 0}} />
          </div>
        }

        <div className="relative pt-8 pb-0 overflow-hidden -mt-0" />

        <Footer />
      </div>

      <style jsx global>{`
        .navbar-base {
          padding: 1rem 6%;
          color: #fff;
          position: fixed; /* CRITICAL: Changed from 'sticky' to 'fixed' for dynamic sliding */
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          /* Add transform to the transition property */
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .navbar-base.hidden {
            transform: translateY(-100%); /* Slide it completely up */
        }

        .navbar-base.visible {
            transform: translateY(0); /* Ensure it's in the standard position */
        }
      `}</style>
    </>
  );
}

export default App;