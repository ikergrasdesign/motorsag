import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowLeft, MessageSquare, ChevronRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const ServiceDetail: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const serviceId = searchParams.get('service');
  const service = servicesData.find(s => s.id === serviceId);

  useEffect(() => {
    // Trigger reveals for the newly loaded content
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, [serviceId]);

  if (!service) return null;

  const otherServices = servicesData.filter(s => s.id !== serviceId);

  const handleServiceClick = (id: string) => {
    setSearchParams({ service: id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToServices = () => {
    setSearchParams({});
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-dark text-white selection:bg-brand-red/30 overflow-x-hidden">
      {/* Header / Hero for Service */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gray/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <button 
            onClick={handleBackToServices}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Volver a servicios
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div className="space-y-6 reveal">
              <div className="w-20 h-20 rounded-3xl bg-slate-900 flex items-center justify-center text-white border border-white/5">
                {service.icon}
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gradient leading-tight break-words py-2">
                {service.title}
              </h1>
              <p className="text-xl text-brand-gray max-w-xl leading-relaxed">
                {service.description}
              </p>
            </div>
            
            <div className="lg:text-right reveal animation-delay-200">
               <a 
                href="#contacto"
                className="inline-flex items-center gap-3 px-10 py-4 bg-brand-red border border-white/20 hover:bg-white hover:text-black text-white font-bold rounded-full transition-all hover:scale-105 shadow-2xl uppercase tracking-widest text-xs"
              >
                <MessageSquare size={18} />
                Solicitar Presupuesto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-brand-dark/50 border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-16">
            {service.content.subtitle && (
              <h2 className="text-3xl font-bold text-center text-white reveal">
                {service.content.subtitle}
              </h2>
            )}

            <div className="grid grid-cols-1 gap-12">
              {service.content.sections.map((section, idx) => (
                <div key={idx} className="space-y-6 reveal group">
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent opacity-30" />
                    <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-widest text-center px-2">
                      {section.title}
                    </h3>
                    <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent opacity-30" />
                  </div>
                  
                  <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                    {Array.isArray(section.text) ? (
                      section.text.map((t, i) => <p key={i}>{t}</p>)
                    ) : (
                      <p>{section.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-24 bg-brand-dark overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-3xl font-bold text-white mb-12 reveal">Otros servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((s) => (
              <button
                key={s.id}
                onClick={() => handleServiceClick(s.id)}
                className="group p-6 bg-slate-900 rounded-2xl border border-white/5 hover:border-brand-red/50 transition-all text-left reveal"
              >
                <div className="text-brand-red mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{s.title}</h4>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
                  Ver más <ChevronRight size={14} className="text-brand-red" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;
