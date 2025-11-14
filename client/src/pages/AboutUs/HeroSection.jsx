import React from 'react';
import { Users, CheckCircle, Zap, Dumbbell } from 'lucide-react'; // Cambiamos CheckCircle por Zap (más dinámico)

const HeroSection = ({
  // CAMBIO: Imagen de atletas en acción o equipo, más dinámico
  teamImage = "https://images.unsplash.com/photo-1579737667232-054238e2d422?q=80&w=2670&auto=format&fit=crop",
}) => (
  // Fondo: Blanco nítido con un degradado que sugiere movimiento
  <section className="bg-gradient-to-b from-white to-green-50/50 py-24 px-6 lg:py-32 relative overflow-hidden">
    
    {/* Elemento de fondo: Un círculo borroso de energía verde */}
    <div className="absolute -top-16 -right-16 w-80 h-80 bg-green-500/10 rounded-full blur-3xl opacity-70"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl opacity-50"></div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-center">
        
        {/* Content Side */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            {/* ✍️ Título: Más impactante, usando 'Extrabold' */}
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-5 text-gray-900 leading-tight tracking-tight">
              Equipando tu
              {/* 🟢 Acento Verde Vibrante: Energía y Rendimiento */}
              <span className="block text-green-600 mt-2">Próximo Desafío</span>
            </h1>
            
            {/* Separador: Más grueso y verde vibrante */}
            <div className="w-16 h-1.5 bg-green-600 mb-8 rounded-full shadow-md shadow-green-600/30"></div>
            
            {/* Párrafo Principal: Lenguaje de acción */}
            <p className="text-xl text-gray-700 leading-relaxed font-normal">
              Somos la plataforma donde la <strong>pasión por el deporte</strong> se encuentra con la 
              mejor tecnología en equipamiento. Desde 2015, impulsando <strong>atletas y equipos</strong>.
            </p>
          </div>

          {/* Features List (Enfocado en rendimiento/equipo) */}
          <div className="space-y-4 pt-4">
            
            {/* ⚡ Checklist: Usamos Zap y acento green-600 */}
            <div className="flex items-start gap-4 group">
              <div className="bg-green-50 p-1.5 rounded-full flex-shrink-0 transition-colors border border-green-200/50">
                <Zap className="w-5 h-5 text-green-600 stroke-[2.5]" /> 
              </div>
              <span className="text-gray-900 font-semibold text-lg">
                Equipamiento de Alto Rendimiento
              </span> 
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-green-50 p-1.5 rounded-full flex-shrink-0 transition-colors border border-green-200/50">
                <Users className="w-5 h-5 text-green-600 stroke-[2.5]" />
              </div>
              <span className="text-gray-900 font-semibold text-lg">
                Soporte a Ligas y Equipos Locales
              </span>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-green-50 p-1.5 rounded-full flex-shrink-0 transition-colors border border-green-200/50">
                <Dumbbell className="w-5 h-5 text-green-600 stroke-[2.5]" /> 
              </div>
              <span className="text-gray-900 font-semibold text-lg">
                Garantía de Durabilidad y Calidad
              </span>
            </div>
          </div>
        </div>

        {/* Team Image */}
        <div className="lg:col-span-3">
          <div className="relative">
            
            {/* Frame de la imagen: Sombra moderna con sutil borde verde */}
            <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl shadow-green-600/20 border-2 border-green-600/50">
              <img
                src={teamImage}
                alt="Atletas entrenando o equipo deportivo"
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[3/2] transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            
            {/* Quote card: Con un acento verde que resalta el compromiso */}
            <div className="mt-8 relative -left-4 md:left-8">
              <div className="relative bg-white rounded-lg px-6 py-5 border-l-4 border-green-600 shadow-xl shadow-green-500/10">
                <p className="text-gray-800 font-bold text-lg text-center leading-relaxed">
                  "Nuestra misión es potenciar tu rendimiento con la <strong>mejor calidad</strong> y el <strong>servicio más rápido</strong>."
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default HeroSection;
