import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-12 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/Logo.svg" alt="Motorsag Logo" className="h-8 w-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
            <a href="#inicio" className="hover:text-brand-red transition-colors">Inicio</a>
            <a href="#taller" className="hover:text-brand-red transition-colors">El Taller</a>
            <a href="#servicios" className="hover:text-brand-red transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-brand-red transition-colors">Contacto</a>
          </div>

          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Motorsag. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
