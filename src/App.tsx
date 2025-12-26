import React, { Suspense, lazy, useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Helmet } from 'react-helmet';
import LoadingSpinner from './components/common/LoadingSpinner';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Post = lazy(() => import('./pages/Post'));
const Blog = lazy(() => import('./pages/BlogHome'));

const GoodArchitecture = lazy(() => import('./pages/blog/GoodArchitecture'));
const CloudPractices = lazy(() => import('./pages/blog/CloudPractices'));
const AutomatedTesting = lazy(() => import('./pages/blog/AutomatedTesting'));

const CustomSoftware = lazy(() => import('./pages/services/CustomSoftware'));
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const DataBI = lazy(() => import('./pages/services/DataBI'));
const Modernization = lazy(() => import('./pages/services/Modernization'));
const ApiIntegration = lazy(() => import('./pages/services/ApiIntegration'));
const QAAutomation = lazy(() => import('./pages/services/QAAutomation'));

const SCROLL_THRESHOLD = 200; // Distance in pixels to reach full transparency

function App() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const prevScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  const PARALLAX_FACTOR = 0.3; // You can change this to 0.75, 0.25, etc.

  useEffect(() => {
    const navbarElement = document.getElementById('main-navbar');
    // Get the new element you just added
    const chevronElement = document.getElementById('design-chevron'); 

    if (!navbarElement) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ... (Your existing visibility and opacity logic)

      setIsVisible(currentScrollY < 250);
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

      // 👇 NEW PARALLAX LOGIC: Apply the controlled scroll to the chevron
      if (chevronElement) {
          const transformY = currentScrollY * -PARALLAX_FACTOR;
          chevronElement.style.transform = `translateY(${transformY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Calvian - Software Services</title>
        <meta name="description" content="Professional software services for modern businesses." />
      </Helmet>

      <div className={`${location.pathname === "/services/custom-software" ? "bg-black" : '' } flex flex-col min-h-screen`}>
        <Navbar
          id="main-navbar"
          className={`${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}
        /> 

        {location.pathname === '/' && (
          <div 
            id="design-chevron"
            className="bg-gray-100 design-chevron z-0" 
            style={{ position: 'fixed', top: 0, left: 0, width: '100%' }} 
          />
        )}

        <main className="flex-grow pt-24 relative z-10 container mx-auto px-4 py-8">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<Post />} />
              <Route path="/blog/good-architecture" element={<GoodArchitecture />} />
              <Route path="/blog/cloud-practices" element={<CloudPractices />} />
              <Route path="/blog/automated-testing" element={<AutomatedTesting />} />
              <Route path="/services/custom-software" element={<CustomSoftware />} />
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/data-bi" element={<DataBI />} />
              <Route path="/services/modernization" element={<Modernization />} />
              <Route path="/services/api-integration" element={<ApiIntegration />} />
              <Route path="/services/qa-automation" element={<QAAutomation />} />
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