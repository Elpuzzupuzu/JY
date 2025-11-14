import { Zap, Rocket, Dumbbell } from "lucide-react"; // Íconos deportivos
import flucsahero from '../../assets/images/soccer.jpg'; // NOTA: La imagen aún debe ser de deportes

const HeroSection = ({ isVisible }) => {
  return (
    // Fondo: Negro Carbón (gray-900) para look Premium/Tecnológico
    <section
      className="w-full relative overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: "#111827" }} // bg-gray-900 oscuro
    >
      {/* Elementos decorativos: Brillo Neón */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/15 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
          
          {/* Text content - Izquierda - Enfocado en Rendimiento y Velocidad */}
          <div
            className={`animate-fade-in-up ${
              isVisible?.hero ? "visible" : ""
            } order-2 lg:order-1`}
            data-animate
            id="hero"
          >
            <div className="space-y-6 md:space-y-8">
              <div>
                {/* Pre-título: Enfoque en PRO y Verde Neón */}
                <p className="text-lg text-lime-400 mb-2 uppercase tracking-widest font-sans font-black">
                  Desata tu Máximo Potencial
                </p>
                
                {/* Título: Alto impacto, centrado en el Rendimiento */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tighter leading-tight uppercase">
                  <span className="text-white drop-shadow-sm">Equipamiento de</span>
                  <br />
                  <span className="bg-gradient-to-r from-lime-300 via-green-400 to-white bg-clip-text text-transparent drop-shadow-lg animate-gradient">
                    Rendimiento PRO
                  </span>
                </h1>
                
                {/* Separador de energía */}
                <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-green-500 rounded-full mt-4 shadow-lg shadow-lime-500/50"></div>
              </div>

              <p className="text-xl text-gray-200 leading-relaxed font-light">
                Descubre nuestra selección de productos técnicos diseñados con **ingeniería deportiva** para darte la **ventaja competitiva** que necesitas en cada entrenamiento.
              </p>

              {/* Botón CTA principal: Verde Neón Brillante */}
              <a
                href="/productos"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-black uppercase tracking-wider
                           bg-lime-400 text-gray-900 rounded-full shadow-2xl shadow-lime-400/60 
                           hover:bg-lime-300 transition-all duration-300 transform hover:scale-105 group"
              >
                Comprar Ahora
                <span className="ml-3 text-2xl group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>

              {/* Categories - Temática deportiva/acción */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {[
                  {
                    icon: Zap,
                    title: "Calzado de Élite",
                    count: "Velocidad Máxima",
                    color: "from-lime-400 to-green-500",
                    delay: "0s",
                  },
                  {
                    icon: Rocket,
                    title: "Indumentaria PRO",
                    count: "Compresión y Aerodinámica",
                    color: "from-red-500 to-orange-500", 
                    delay: "0.1s",
                  },
                  {
                    icon: Dumbbell,
                    title: "Accesorios Tácticos",
                    count: "Fuerza y Agilidad",
                    color: "from-cyan-400 to-blue-500", 
                    delay: "0.2s",
                  },
                ].map((category, i) => (
                  <div
                    key={i}
                    // Estilo oscuro con borde y texto de alto contraste
                    className="group relative bg-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-lime-400 transition-all duration-500 text-left hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-700/50 cursor-pointer"
                    style={{
                      animationDelay: category.delay,
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <div className="relative">
                      {/* Iconos se mantienen con el degradado de color */}
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-3 shadow-xl transition-all duration-300 group-hover:scale-110`}
                      >
                        <category.icon
                          className="w-6 h-6 text-white"
                          strokeWidth={2}
                        />
                      </div>
                      <h3 className="font-bold text-white mb-1 text-base uppercase transition-colors duration-300 group-hover:text-lime-400">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-medium uppercase">
                        {category.count}
                      </p>
                    </div>

                    {/* Línea de hover inferior en Verde Neón */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image side - Derecha - Imagen destacada de PROducto/Atleta */}
          <div
            className={`animate-scale-in ${
              isVisible?.heroImage ? "visible" : ""
            } order-1 lg:order-2`}
            data-animate
            id="heroImage"
          >
            <div className="relative group p-4 bg-gray-900 rounded-3xl shadow-2xl shadow-gray-900/50">
              
              {/* Glow: Verde Neón */}
              <div className="absolute -inset-4 bg-lime-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative rounded-2xl overflow-hidden transform hover:scale-[1.01] transition-all duration-500">
                <img
                  src={flucsahero}
                  alt="Atleta usando equipamiento deportivo de alto rendimiento"
                  // Borde interno verde para mayor contraste
                  className="w-full h-[550px] object-cover rounded-2xl border-4 border-lime-400/50"
                />

                {/* Overlay oscuro para texto legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Bottom Callout con acento Verde Neón */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-white">
                  <div className="w-10 h-1 bg-lime-400 mb-2 rounded-full shadow-lg shadow-lime-400/50"></div>
                  <p className="font-black text-lg drop-shadow-lg font-sans uppercase text-gray-100">
                    Diseñado y probado por profesionales.
                  </p>
                </div>
              </div>

              {/* Floating badge: Nuevo producto en Verde Neón */}
              <div className="absolute -top-4 -right-4 bg-lime-400 text-gray-900 px-5 py-2 rounded-xl shadow-lg font-black text-sm uppercase transition-all duration-300 border-2 border-white/80 transform rotate-3 hover:rotate-0">
                <div className="flex items-center gap-2 font-sans">
                  <span>🚀</span>
                  Lanzamiento Élite
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Animaciones mantenidas */
        .animate-scale-in {
          opacity: 0;
          transform: scale(0.95);
          transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .animate-scale-in.visible {
          opacity: 1;
          transform: scale(1);
        }
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .animate-fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Estilo de animación para el texto (se mantiene del original) */
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;