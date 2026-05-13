import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-12 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-2">
            <img src="/Logo.svg" alt="Motorsag Logo" className="h-8 w-auto" />
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
