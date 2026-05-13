import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Juan Rodríguez",
    car: "BMW M4 G82",
    text: "Increíble trabajo con la repro Stage 1. El trato es de 10 y el coche va como un misil. Se nota que saben lo que hacen con la electrónica de alta gama.",
    stars: 5
  },
  {
    name: "Marta Sánchez",
    car: "Audi A4 Avant",
    text: "Especialistas de verdad. Me arreglaron un fallo electrónico complejo que en el concesionario oficial no sabían solucionar. Transparencia total.",
    stars: 5
  },
  {
    name: "Marc Torres",
    car: "Audi RS3",
    text: "Mi RS3 va mejor que nunca. La entrega de potencia es mucho más lineal y el consumo ha bajado un poco en autopista. Muy recomendables.",
    stars: 5
  },
  {
    name: "David López",
    car: "VW Golf GTI",
    text: "Taller de confianza en Mataró. Muy limpios, ordenados y profesionales. Te explican todo el proceso de diagnosis paso a paso.",
    stars: 5
  }
];

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16 space-y-4 reveal">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic">
            Opiniones de <span className="text-brand-red">Clientes</span>
          </h2>
          <div className="flex justify-center gap-1 text-brand-red">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
        </div>

        <div className="relative reveal animation-delay-200">
          {/* Main Carousel Card */}
          <div className="bg-slate-900 border border-white/5 p-10 md:p-16 rounded-[3rem] relative overflow-hidden group">
            <Quote className="absolute top-10 right-10 text-white/5 w-32 h-32 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-8">
              <div className="flex gap-1 text-brand-red">
                {[...Array(reviews[currentIndex].stars)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl font-medium text-gray-200 leading-relaxed italic">
                "{reviews[currentIndex].text}"
              </p>
              
              <div className="space-y-1">
                <p className="text-white font-black uppercase tracking-widest">{reviews[currentIndex].name}</p>
                <p className="text-brand-red text-sm font-bold">{reviews[currentIndex].car}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="p-4 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="p-4 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <div 
                key={i}
                className={`h-1 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-8 bg-brand-red' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
