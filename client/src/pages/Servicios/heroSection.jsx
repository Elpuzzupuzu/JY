import React from 'react';
import { Zap, Dumbbell, Heart } from 'lucide-react';

export default function HeroRendimientoPro() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-10">
            <div className="inline-block">
              <span className="text-lime-500 text-xs font-medium tracking-widest uppercase">
                Nueva Colección Pro
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light leading-none tracking-tight">
              <span className="text-lime-500 font-extralight">ELEVA TU</span>
              <br />
              <span className="text-gray-900 font-semibold">RENDIMIENTO</span>
              <br />
              <span className="text-gray-900 font-semibold">PRO</span>
            </h1>
            
            <div className="space-y-1">
              <div className="h-px w-16 bg-lime-500"></div>
              <div className="h-px w-12 bg-gray-300"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-md font-light">
              Descubre equipamiento técnico y ropa especializada para{' '}
              <span className="text-gray-900 font-normal">alcanzar tus metas</span> y{' '}
              <span className="text-gray-900 font-normal">superar cualquier récord.</span>
            </p>
            
            <button className="group bg-gray-900 hover:bg-lime-500 text-white hover:text-gray-900 px-10 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 flex items-center gap-3">
              Ver Equipamiento
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-6 pt-12">
              <div className="space-y-4">
                <div className="w-12 h-12 border border-gray-200 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-lime-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm mb-1">Velocidad</h3>
                  <p className="text-xs text-gray-500 font-light">Calzado de Élite</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 border border-gray-200 flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-lime-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm mb-1">Fuerza</h3>
                  <p className="text-xs text-gray-500 font-light">Accesorios Pro</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 border border-gray-200 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-lime-500" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm mb-1">Recuperación</h3>
                  <p className="text-xs text-gray-500 font-light">Tecnología Avanzada</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80" 
                alt="Equipamiento deportivo profesional" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              
              {/* Top Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-lime-500 text-gray-900 px-4 py-2 text-xs font-medium tracking-widest uppercase">
                  Nueva
                </div>
              </div>
              
              {/* Sports Icons Minimal */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur flex items-center justify-center">
                    <span className="text-xl">🏈</span>
                  </div>
                  <div className="w-10 h-10 bg-white/90 backdrop-blur flex items-center justify-center">
                    <span className="text-xl">🏀</span>
                  </div>
                  <div className="w-10 h-10 bg-white/90 backdrop-blur flex items-center justify-center">
                    <span className="text-xl">⚽</span>
                  </div>
                  <div className="w-10 h-10 bg-white/90 backdrop-blur flex items-center justify-center">
                    <span className="text-xl">🎾</span>
                  </div>
                </div>
                
                <h2 className="text-white text-xl font-light leading-tight">
                  Equipamiento diseñado<br />para la victoria
                </h2>
              </div>
            </div>
            
            {/* Minimal Stats */}
            <div className="absolute -bottom-8 -left-8 bg-gray-900 p-8">
              <div className="text-4xl font-light text-lime-500">95<span className="text-2xl">%</span></div>
              <div className="text-xs text-gray-400 font-light tracking-wider uppercase mt-1">Satisfacción</div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white border border-gray-200 p-8">
              <div className="text-4xl font-light text-gray-900">+10<span className="text-2xl">K</span></div>
              <div className="text-xs text-gray-500 font-light tracking-wider uppercase mt-1">Atletas Pro</div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Accent Line */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-lime-500 to-transparent opacity-20"></div>
      </div>
    </div>
  );
}