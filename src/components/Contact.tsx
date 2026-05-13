import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-brand-dark text-white relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12 reveal">
            <div className="space-y-4">
              <h3 className="text-brand-gray font-semibold tracking-widest uppercase text-sm">
                Contacto
              </h3>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gradient">
                ¿Hablamos de tu <span className="text-gray-400">Próxima Visita?</span>
              </h2>
              <p className="text-gray-200 max-w-md">
                Reserva tu cita o haznos cualquier consulta. Nuestro equipo técnico te atenderá con la máxima profesionalidad.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all border border-white/5">
                  <Phone size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-brand-gray uppercase tracking-wider font-bold">Teléfono</p>
                  <p className="text-xl font-bold">+34 931 88 45 70</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all border border-white/5">
                  <Mail size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-brand-gray uppercase tracking-wider font-bold">Email</p>
                  <p className="text-xl font-bold">info@motorsag.es</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all border border-white/5">
                  <MapPin size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-brand-gray uppercase tracking-wider font-bold">Dirección</p>
                  <p className="text-xl font-bold">Carrer Pablo Iglesias, 58, Mataró</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all border border-white/5">
                  <Clock size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-brand-gray uppercase tracking-wider font-bold">Horario</p>
                  <p className="text-gray-300">Lun - Vie: 8:30 - 18:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative group reveal">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-brand-red/40 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
            <div className="relative bg-slate-900 border border-white/5 p-10 rounded-3xl space-y-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-300">Nombre</label>
                    <input type="text" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-500" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                    <input type="email" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors" placeholder="email@ejemplo.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Servicio de interés</label>
                  <select className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-gray-400">
                    <option>Reprogramación</option>
                    <option>Mantenimiento / ITV</option>
                    <option>Electro-mecánica</option>
                    <option>Climatización</option>
                    <option>Otros</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-300">Mensaje</label>
                  <textarea rows={4} className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors placeholder:text-gray-500" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>

                <button className="w-full bg-brand-red border border-white/20 hover:bg-white hover:text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all">
                  <MessageSquare size={20} />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
