import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'

// Helper to handle hash scrolling on page navigation
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Custom Cursor Logic
    const cursorMain = document.getElementById('cursor-main');
    const cursorDot = document.getElementById('cursor-dot');

    const moveCursor = (e: MouseEvent) => {
      if (cursorMain && cursorDot) {
        cursorMain.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
        cursorDot.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <main className="min-h-screen bg-brand-dark bg-grain relative cursor-none">
      <ScrollToTop />
      {/* Custom Cursor */}
      <div className="hidden lg:block fixed top-0 left-0 w-8 h-8 border border-brand-red rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out mix-blend-difference" id="cursor-dot" />
      <div className="hidden lg:block fixed top-0 left-0 w-2 h-2 bg-brand-red rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out" id="cursor-main" />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
