import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; // Añadimos el ícono para un toque moderno

// CategoryCard con diseño CLARO y profesional
function CategoryCard({ title, bgColor, textColor, image }) {
  // Inicializa el hook de navegación
  const navigate = useNavigate();

  // Función handle para la navegación
  const handleClick = (e) => {
    e.stopPropagation(); 
    // Redirige programáticamente a la ruta /catalogos-pdfs
    navigate("/catalogo-pdfs");
  };

  return (
    // Tarjeta principal: Fondo CLARO (bg-white), sombra sutil, borde elegante
    <button 
      type="button"
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl hover:border-green-500 transition-all duration-300 cursor-pointer group h-full flex flex-col w-full p-0 text-left transform hover:-translate-y-1"
      onClick={handleClick}
    >
      
      {/* Imagen de la categoría */}
      <div className="relative h-48 md:h-64 overflow-hidden bg-gray-50">
        {/* El overlay ahora usa el verde de acento sutilmente en hover */}
        <div className={`absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Imagen real de la categoría, sin opacidad para que se vea brillante */}
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      
      {/* Título de la categoría */}
      <div className="p-5 flex justify-between items-center bg-white">
        {/* Título: Color oscuro por defecto, verde en hover */}
        <h3 className="text-gray-900 font-bold text-xl group-hover:text-green-600 transition-colors duration-200">
          {title}
        </h3>
        {/* Ícono de navegación: Gris sutil, verde en hover */}
        <ArrowRight 
          size={20} 
          className="text-gray-400 group-hover:text-green-600 transition-all duration-300 transform group-hover:translate-x-1" 
        />
      </div>
    </button>
  );
}

export default CategoryCard;