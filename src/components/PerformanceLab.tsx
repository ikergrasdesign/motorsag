import React, { useState, useEffect } from 'react';
import { Gauge, Zap, Cpu, ArrowRight, Activity } from 'lucide-react';

interface CarModel {
  name: string;
  stockHp: number;
  stage1Hp: number;
  stockNm: number;
  stage1Nm: number;
}

interface BrandData {
  [key: string]: CarModel[];
}

const PerformanceLab: React.FC = () => {
  const brands: BrandData = {
    "BMW": [
      { name: "335i N54", stockHp: 306, stage1Hp: 375, stockNm: 400, stage1Nm: 520 },
      { name: "M4 G82", stockHp: 510, stage1Hp: 630, stockNm: 650, stage1Nm: 800 },
      { name: "320d G20", stockHp: 190, stage1Hp: 230, stockNm: 400, stage1Nm: 480 }
    ],
    "Audi": [
      { name: "RS3 8Y", stockHp: 400, stage1Hp: 485, stockNm: 500, stage1Nm: 620 },
      { name: "S3 8Y", stockHp: 310, stage1Hp: 370, stockNm: 400, stage1Nm: 490 },
      { name: "A4 2.0 TDI", stockHp: 150, stage1Hp: 195, stockNm: 320, stage1Nm: 420 }
    ],
    "Mercedes": [
      { name: "A45S AMG", stockHp: 421, stage1Hp: 480, stockNm: 500, stage1Nm: 600 },
      { name: "C63 AMG S", stockHp: 510, stage1Hp: 600, stockNm: 700, stage1Nm: 850 }
    ],
    "VW": [
      { name: "Golf GTI Mk8", stockHp: 245, stage1Hp: 310, stockNm: 370, stage1Nm: 450 },
      { name: "Golf R Mk8", stockHp: 320, stage1Hp: 385, stockNm: 420, stage1Nm: 510 }
    ]
  };

  const [selectedBrand, setSelectedBrand] = useState("BMW");
  const [selectedModel, setSelectedModel] = useState(brands["BMW"][0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [selectedModel]);

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
    setSelectedModel(brands[brand][0]);
  };

  const hpPercentage = (selectedModel.stage1Hp / 700) * 100;
  const nmPercentage = (selectedModel.stage1Nm / 900) * 100;

  return (
    <section id="performance" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/20 to-transparent" />
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white/5 h-full" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-bold tracking-[0.2em] uppercase">
            <Zap size={12} /> Motorsag Engineering
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase italic break-words">
            Performance <span className="text-brand-red">Lab</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Configurador interactivo de potencia. Descubre el potencial oculto de tu motor con nuestras reprogramaciones a medida.
          </p>
        </div>

        <div className="space-y-12 reveal">
          {/* Controls - Improved Contrast */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto bg-slate-900/40 p-8 rounded-[2rem] border border-white/5 backdrop-blur-sm">
            <div className="space-y-4">
              <label className="text-[11px] font-black text-gray-300 uppercase tracking-[0.2em] block text-center md:text-left">1. Selecciona Marca</label>
              <div className="grid grid-cols-2 gap-3">
                {Object.keys(brands).map((brand) => (
                  <button
                    key={brand}
                    onClick={() => handleBrandChange(brand)}
                    className={`py-4 px-6 rounded-xl font-bold border transition-all ${
                      selectedBrand === brand 
                        ? 'bg-brand-red border-brand-red text-white shadow-[0_0_25px_rgba(226,0,26,0.4)] scale-105' 
                        : 'bg-brand-dark border-white/10 text-gray-300 hover:border-white/30 hover:bg-slate-800'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[11px] font-black text-gray-300 uppercase tracking-[0.2em] block text-center md:text-left">2. Selecciona Modelo</label>
              <div className="grid grid-cols-1 gap-2 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                {brands[selectedBrand].map((model) => (
                  <button
                    key={model.name}
                    onClick={() => setSelectedModel(model)}
                    className={`w-full py-4 px-6 rounded-xl font-bold border text-left flex justify-between items-center transition-all ${
                      selectedModel.name === model.name 
                        ? 'bg-white border-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                        : 'bg-brand-dark border-white/10 text-gray-300 hover:border-white/30 hover:bg-slate-800'
                    }`}
                  >
                    {model.name}
                    <ArrowRight size={16} className={selectedModel.name === model.name ? 'opacity-100' : 'opacity-30'} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Visualization - Improved Contrast & Colors */}
          <div className="reveal animation-delay-200">
            <div className="bg-slate-900 border border-white/10 rounded-3xl md:rounded-[3rem] p-6 md:p-12 relative shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent pointer-events-none" />
              {/* Animated scanline */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-red/20 animate-scanline z-0" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                {/* HP Gauge */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-brand-red">
                        <Gauge size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Potencia Máxima</span>
                      </div>
                      <h3 className="text-2xl md:text-4xl font-black text-white">Potencia (CV)</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-gray-300 uppercase">Incremento</span>
                      <p className="text-2xl font-black text-brand-red">+{selectedModel.stage1Hp - selectedModel.stockHp} CV</p>
                    </div>
                  </div>

                  <div className="space-y-8 pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase">
                        <span className="text-gray-300">Serie</span>
                        <span className="text-white">{selectedModel.stockHp} CV</span>
                      </div>
                      <div className="h-3 bg-brand-dark rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gray-600 transition-all duration-1000 ease-out"
                          style={{ width: `${(selectedModel.stockHp / 700) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase">
                        <span className="text-brand-red">Stage 1</span>
                        <span className={`text-brand-red transition-all duration-500 ${isAnimating ? 'scale-125' : 'scale-100'}`}>
                          {selectedModel.stage1Hp} CV
                        </span>
                      </div>
                      <div className="h-4 bg-brand-dark rounded-full overflow-hidden shadow-inner">
                        <div 
                          className="h-full bg-brand-red transition-all duration-1000 ease-out relative"
                          style={{ width: `${hpPercentage}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* NM Gauge */}
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-brand-red">
                        <Activity size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Par Motor</span>
                      </div>
                      <h3 className="text-2xl md:text-4xl font-black text-white">Par (Nm)</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-gray-300 uppercase">Incremento</span>
                      <p className="text-2xl font-black text-brand-red">+{selectedModel.stage1Nm - selectedModel.stockNm} Nm</p>
                    </div>
                  </div>

                  <div className="space-y-8 pt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase">
                        <span className="text-gray-300">Serie</span>
                        <span className="text-white">{selectedModel.stockNm} Nm</span>
                      </div>
                      <div className="h-3 bg-brand-dark rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gray-600 transition-all duration-1000 ease-out"
                          style={{ width: `${(selectedModel.stockNm / 900) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase">
                        <span className="text-brand-red">Stage 1</span>
                        <span className={`text-brand-red transition-all duration-500 ${isAnimating ? 'scale-125' : 'scale-100'}`}>
                          {selectedModel.stage1Nm} Nm
                        </span>
                      </div>
                      <div className="h-4 bg-brand-dark rounded-full overflow-hidden shadow-inner">
                        <div 
                          className="h-full bg-brand-red transition-all duration-1000 ease-out relative"
                          style={{ width: `${nmPercentage}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specs / Info */}
              <div className="mt-12 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Tipo Repro</p>
                  <p className="text-sm font-bold text-white">Custom Stage 1</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Garantía</p>
                  <p className="text-sm font-bold text-white">2 Años</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Diagnóstico</p>
                  <p className="text-sm font-bold text-white">Incluido</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Tiempo</p>
                  <p className="text-sm font-bold text-white">3-4 Horas</p>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 md:mt-12">
                <a 
                  href="#contacto" 
                  className="w-full flex items-center justify-center gap-3 py-5 px-6 bg-brand-red text-white font-black uppercase tracking-widest text-[10px] sm:text-xs md:text-sm rounded-2xl hover:bg-white hover:text-brand-red transition-all duration-300 group shadow-[0_10px_40px_rgba(226,0,26,0.3)]"
                >
                  <Cpu size={20} className="group-hover:rotate-12 transition-transform shrink-0" />
                  <span className="text-center">
                    Reservar Reprogramación para {selectedModel.name}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scanline {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(600px); opacity: 0; }
        }
        .animate-scanline {
          animation: scanline 4s linear infinite;
        }
      `}} />
    </section>
  );
};

export default PerformanceLab;
