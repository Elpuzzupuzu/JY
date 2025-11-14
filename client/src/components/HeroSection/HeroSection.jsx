// Asegúrate de que esta línea esté al principio de tu archivo
import { Link } from 'react-router-dom'; 

export default function HeroSection({ heroImage }) {
  return (
    // CAMBIO: Altura ligeramente mayor para impacto
    <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroImage} 
          alt="Equipamiento Deportivo PRO" 
          className="w-full h-full object-cover opacity-70" // Opacidad reducida para mejor contraste
        />
        {/* CAMBIO: Overlay de oscuridad profunda (negro/gris oscuro) */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="max-w-3xl">
          {/* CAMBIO: Título en Mayúsculas, Negro y acento Neón */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight uppercase tracking-tight drop-shadow-lg">
            Desata tu <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">Máximo</span>{' '}
            Rendimiento
          </h1>
          
          {/* CAMBIO: Párrafo en gris claro para contraste */}
          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-light">
            Encuentra el equipo de **entrenamiento de élite** y suplementos deportivos, diseñado para superar tus límites y alcanzar tus metas PRO.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            {/* CAMBIO: Botón CTA principal en Verde Neón */}
            <button className="bg-lime-400 hover:bg-lime-300 text-gray-900 font-black uppercase tracking-wide px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-xl shadow-lime-500/40 hover:scale-[1.03] hover:shadow-lime-500/60">
              Ver Colección Élite
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* CAMBIO: Botón secundario oscuro con borde Neón */}
            <Link 
              to="/acerca-de-nosotros" // 'to' en React Router
              className="bg-transparent border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-gray-900 font-bold uppercase tracking-wide px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 hover:scale-[1.01]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Conoce la Ventaja PRO
            </Link>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-8 text-sm md:text-base">
            {/* Características con acentos Neón */}
            <div className="flex items-center gap-2 text-gray-200 font-medium">
              <div className="w-2.5 h-2.5 bg-lime-400 rounded-full shadow-md shadow-lime-500/50"></div>
              <span>Tecnología Certificada</span>
            </div>
            <div className="flex items-center gap-2 text-gray-200 font-medium">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full shadow-md shadow-red-500/50"></div>
              <span>Entrega Veloz</span>
            </div>
            <div className="flex items-center gap-2 text-gray-200 font-medium">
              <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-md shadow-cyan-500/50"></div>
              <span>Asesoría PRO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}