import React, { Suspense, lazy } from 'react';
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

function App() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>MyCompany - Software Services</title>
        <meta name="description" content="Professional software services for modern businesses." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />

        {location.pathname === '/' && <div className="absolute inset-0 bg-gray-100 design-chevron z-0" />}

        <main className="flex-grow relative z-10 container mx-auto px-4 py-8">
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

        <div className="relative pt-8 pb-0 overflow-hidden -mt-0" />

        <Footer />
      </div>
    </>
  );
}

export default App;