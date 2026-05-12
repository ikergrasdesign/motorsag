import { Link } from 'react-router-dom';
import { Cpu, Settings, Zap, Car, Wind, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 'reprogramaciones',
    title: 'Reprogramaciones',
    description: 'Optimización de software para mejorar potencia y reducir consumo.',
    icon: <Cpu className="w-8 h-8" />,
    color: 'from-brand-red to-brand-red/80'
  },
  {
    id: 'mantenimiento-itv',
    title: 'Mantenimiento / ITV',
    description: 'Revisiones preventivas y preparación completa para pasar la inspección.',
    icon: <Settings className="w-8 h-8" />,
    color: 'from-brand-gray to-brand-gray/80'
  },
  {
    id: 'electromecanica',
    title: 'Electro-mecánica',
    description: 'Diagnosis avanzada y reparación de sistemas eléctricos complejos.',
    icon: <Zap className="w-8 h-8" />,
    color: 'from-brand-red to-brand-red/60'
  },
  {
    id: 'vehiculo-cortesia',
    title: 'Vehículo Cortesía',
    description: 'No te detengas. Disponemos de coches de sustitución para nuestros clientes.',
    icon: <Car className="w-8 h-8" />,
    color: 'from-brand-gray to-brand-dark'
  },
  {
    id: 'climatizacion',
    title: 'Climatización',
    description: 'Carga de aire y mantenimiento de sistemas de calefacción y refrigeración.',
    icon: <Wind className="w-8 h-8" />,
    color: 'from-brand-red to-brand-red/40'
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-brand-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 space-y-4 reveal">
          <h3 className="text-brand-gray font-semibold tracking-widest uppercase text-sm">
            Especialidades
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight text-gradient">
            Servicios de <span className="text-gray-400">Alto Rendimiento</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones integrales para tu vehículo con la garantía y precisión que solo Motorsag puede ofrecer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-slate-900 p-8 rounded-3xl border border-white/5 hover:border-brand-red/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden reveal"
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-dark flex items-center justify-center text-brand-red group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white group-hover:text-brand-red transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4">
                  <Link 
                    to={`/servicios/${service.id}`} 
                    className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all"
                  >
                    Saber más <ChevronRight size={14} className="text-brand-red" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          {/* Contact CTA Card */}
          <div className="group relative bg-black border border-white/10 p-8 rounded-3xl overflow-hidden flex flex-col justify-between">
            <div className="space-y-4 relative z-10">
              <h4 className="text-2xl font-bold text-white leading-tight">
                ¿Necesitas un presupuesto <br /> personalizado?
              </h4>
              <p className="text-white/60 text-sm">
                Cuéntanos qué necesita tu coche y te daremos una solución a medida.
              </p>
            </div>
            <div className="pt-8 relative z-10">
              <a href="#contacto" className="inline-block px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                Solicitar Info
              </a>
            </div>
            {/* Decorative Icon */}
            <Settings className="absolute -bottom-8 -right-8 w-40 h-40 text-white/10 rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
