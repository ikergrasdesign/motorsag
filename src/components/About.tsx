import React from 'react';

const About: React.FC = () => {
  return (
    <section id="taller" className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 reveal">
            <div className="space-y-4">
              <h3 className="text-brand-gray font-semibold tracking-widest uppercase text-sm">
                Nuestra Identidad
              </h3>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient">
                Motorsag: Pasión por la <br /> 
                <span className="text-gray-200">Excelencia Automotriz</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-100 leading-relaxed max-w-xl">
              Somos especialistas en diagnosis avanzada y reprogramaciones. Con más de 15 años de experiencia, combinamos la pasión por la mecánica con la precisión de la tecnología Bosch para garantizar que tu coche rinda como el primer día.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-sm text-gray-200 uppercase tracking-wider">Años de Experiencia</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-black text-brand-red">100%</p>
                <p className="text-sm text-gray-200 uppercase tracking-wider">Garantía Bosch</p>
              </div>
            </div>

            <div className="pt-4">
              <a href="#contacto" className="inline-block px-8 py-4 border-2 border-brand-red text-white font-bold rounded-full hover:bg-brand-red transition-colors">
                Conoce nuestras instalaciones
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-gray/10 rounded-3xl blur-2xl group-hover:bg-brand-red/10 transition-all duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/about.png" 
                alt="Taller Motorsag" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
