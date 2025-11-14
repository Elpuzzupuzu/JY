import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Shield, Headset, ArrowRight } from 'lucide-react';

// Imágenes de ejemplo
import domesticoImg from '../../assets/imgs/futbol.jpg';
import piscinaImg from '../../assets/imgs/basquetball.jpg';
import ferreteriaImg from '../../assets/imgs/gym.jpg';
import industrialImg from '../../assets/imgs/extremos.jpg';

const CategoryCard = ({ title, image }) => {
  return (
    <div className="group bg-white border border-gray-200 overflow-hidden transition-all duration-500 hover:border-lime-500 cursor-pointer">
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-light text-gray-900 transition-colors">
            {title}
          </h3>
          <ArrowRight
            size={20}
            className="text-lime-500 transition-all duration-500 transform group-hover:translate-x-2"
          />
        </div>
      </div>
    </div>
  );
};

function CategoryGrid() {
  const navigate = useNavigate();

  const categories = [
    { title: 'Fútbol', image: domesticoImg },
    { title: 'Básquetbol', image: piscinaImg },
    { title: 'Running & Gym', image: ferreteriaImg },
    { title: 'Deportes Extremos', image: industrialImg },
  ];

  const handleViewProducts = () => {
    navigate('/productos');
  };

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header minimalista */}
        <div className="mb-24">
          <div className="space-y-1 mb-8">
            <span className="text-lime-500 text-xs font-medium tracking-widest uppercase">
              Explora por Deporte
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-none tracking-tight mb-8">
            <span className="text-gray-900 font-semibold">Descubre </span>
            <span className="text-gray-900 font-extralight">Nuestro Equipamiento</span>
          </h2>

          <div className="space-y-1 mb-10">
            <div className="h-px w-20 bg-lime-500"></div>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed font-light">
            Encuentra indumentaria, accesorios y equipamiento profesional por disciplina,{' '}
            <span className="text-gray-900 font-normal">diseñado para alcanzar tu máximo rendimiento</span>.
          </p>
        </div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {categories.map((category, index) => (
            <CategoryCard key={index} title={category.title} image={category.image} />
          ))}
        </div>

        {/* Botón minimalista */}
        <div className="text-center mb-32">
          <button
            onClick={handleViewProducts}
            className="px-12 py-4 border border-gray-900 text-gray-900 font-light text-base
                     hover:bg-gray-900 hover:text-white transition-all duration-500
                     tracking-wide"
          >
            Explorar Todo el Catálogo
          </button>
        </div>

        {/* Features con estilo minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-gray-200">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto border border-gray-200 flex items-center justify-center mb-6 
                          group-hover:border-lime-500 transition-all duration-500">
              <Trophy className="w-8 h-8 text-lime-500" />
            </div>
            <h4 className="font-medium text-gray-900 mb-3 text-lg">Entrega Récord</h4>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Envío Express nacional e internacional para tu próxima competencia.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto border border-gray-200 flex items-center justify-center mb-6 
                          group-hover:border-lime-500 transition-all duration-500">
              <Shield className="w-8 h-8 text-lime-500" />
            </div>
            <h4 className="font-medium text-gray-900 mb-3 text-lg">Calidad PRO Certificada</h4>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Garantía de durabilidad y rendimiento en todos nuestros productos.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto border border-gray-200 flex items-center justify-center mb-6 
                          group-hover:border-lime-500 transition-all duration-500">
              <Headset className="w-8 h-8 text-lime-500" />
            </div>
            <h4 className="font-medium text-gray-900 mb-3 text-lg">Asesoría Técnica 24/7</h4>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Soporte experto para ayudarte a elegir el equipo ideal para tu deporte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryGrid;