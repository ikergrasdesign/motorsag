import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      
      // Clear service param if we are navigating to a section
      setSearchParams({});
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (id === 'inicio') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 0);
    }
  };

  const navLinks = [
    { name: "Inicio", href: "/#inicio" },
    { name: "El Taller", href: "/#taller" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Contacto", href: "/#contacto" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 overflow-hidden ${scrolled ? 'nav-background' : 'bg-transparent'}`}>
      {/* Container for both Top and Main parts to ensure perfect alignment */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 1. Top Bar - Info */}
        <div className={`flex justify-between items-center py-2 text-[10px] md:text-[11px] uppercase tracking-widest transition-colors duration-500 ${scrolled ? 'text-gray-400' : 'text-white/60'}`}>
          <div className="flex items-center gap-6">
            <a href="tel:+34931884570" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={12} className="text-brand-red" />
              <span>+34 931 88 45 70</span>
            </a>
            <a href="mailto:info@motorsag.es" className="hidden sm:flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={12} className="text-gray-300" />
              <span>info@motorsag.es</span>
            </a>
          </div>
          <div className="flex items-center gap-4 font-bold">
            <span className="text-white cursor-pointer">ES</span>
            <span className="text-gray-300 hover:text-white cursor-pointer transition-colors">CA</span>
          </div>
        </div>

        {/* 2. Main Navbar */}
        <nav className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('/#inicio')}
            className="flex items-center group"
          >
            <img src="/Logo.svg" alt="Motorsag Logo" className="h-10 md:h-12 w-auto" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-white text-[11px] font-black tracking-[0.25em] uppercase hover:text-gray-400 transition-all"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[200] bg-black transition-all duration-500 ease-in-out md:hidden ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex justify-between items-center p-8 border-b border-white/5">
           <img src="/Logo.svg" alt="Motorsag Logo" className="h-10 w-auto" />
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={40} strokeWidth={1} />
            </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-12 px-8">
          {navLinks.map((link, i) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`text-4xl font-black text-white tracking-tighter uppercase transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .nav-background {
          background-color: rgba(5, 5, 5, 0.98);
        }
      `}} />
    </header>
  );
};

export default Navbar;
