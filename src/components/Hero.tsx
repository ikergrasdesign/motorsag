import React from "react";
import { Calendar, Wrench } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden bg-slate-950"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-bg.png"
          className="h-full w-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/4489749/4489749-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Fallback Image if video fails or is loading */}
        <div
          className="absolute inset-0 z-[-1] bg-cover bg-center"
          style={{ backgroundImage: "url(/hero-bg.png)" }}
        />
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl animate-fade-in-up">
          {/* Label */}
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-brand-gray uppercase">
            Bosch Car Service en Mataró
          </p>

          {/* Heading with Overlapping Effect */}
          <div className="relative mb-6">
            <h1 className="text-6xl font-extrabold tracking-tighter text-gray-300/50 leading-none md:text-8xl lg:text-9xl">
              Precisión.
            </h1>
            <h2 className="relative -mt-5 text-6xl font-extrabold tracking-tighter text-white leading-none md:-mt-8 md:text-8xl lg:text-9xl text-gradient">
              Confianza.
            </h2>
          </div>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-200 md:text-xl animation-delay-200">
            Cuidamos de tu vehículo con la tecnología más avanzada y la garantía
            líder de Bosch.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animation-delay-400">
            <button className="group flex items-center gap-2 rounded-full bg-brand-red border border-white/20 px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-black hover:scale-105 shadow-2xl">
              <Calendar size={20} />
              Pedir Cita
            </button>
            <button className="flex items-center gap-2 rounded-full border-2 border-white/10 bg-white/5 px-8 py-4 font-medium text-white transition-all hover:bg-white hover:text-brand-dark">
              <Wrench size={20} />
              Ver Servicios
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Bottom */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-slate-950 to-transparent z-10" />
    </section>
  );
};

export default Hero;
