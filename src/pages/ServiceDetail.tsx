import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import Footer from '../components/Footer';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Trigger reveals
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

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center bg-brand-dark text-white">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Servicio no encontrado</h1>
          <Link to="/" className="text-brand-red hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-red/30">
      {/* Header / Hero for Service */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gray/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <Link 
            to="/#servicios" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Volver a servicios
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div className="space-y-6 reveal">
              <div className="w-20 h-20 rounded-3xl bg-slate-900 flex items-center justify-center text-white border border-white/5">
                {service.icon}
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gradient leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-brand-gray max-w-xl leading-relaxed">
                {service.description}
              </p>
            </div>
            
            <div className="lg:text-right reveal animation-delay-200">
               <a 
                href="/#contacto"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red border border-white/20 hover:bg-white hover:text-black text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl"
              >
                <MessageSquare size={20} />
                Solicitar Cita Ahora
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
                    <h3 className="text-xl font-bold text-white uppercase tracking-widest shrink-0">
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

      {/* CTA Bottom */}
      <section className="py-24 text-center space-y-8 reveal">
        <h3 className="text-4xl font-bold text-gradient">¿Listo para mejorar tu vehículo?</h3>
        <p className="text-gray-400 max-w-md mx-auto">
          Contacta con nosotros y te daremos el mejor asesoramiento técnico.
        </p>
        <div className="flex justify-center gap-6 pt-4">
          <Link to="/#contacto" className="px-8 py-4 bg-white text-brand-dark font-bold rounded-full hover:bg-brand-red hover:text-white transition-all">
            Contactar con Motorsag
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
