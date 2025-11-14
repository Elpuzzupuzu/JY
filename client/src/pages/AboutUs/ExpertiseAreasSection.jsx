import React from 'react';

// Componente de Tarjeta de Especialidad
const ExpertiseCard = ({ 
  title, 
  description, 
  image, 
  animationClass, 
  id, 
  style 
}) => (
  <div
    id={id}
    // Utilizamos hover-lift-sport para el efecto dinámico y sombra verde
    className={`group relative overflow-hidden rounded-xl shadow-xl hover-lift-sport transition-all duration-300 ${animationClass}`}
    data-animate
    style={style}
  >
    {/* Imagen de fondo */}
    <div className="relative h-64 overflow-hidden bg-slate-200">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
      />
      {/* Degradado oscuro de alto contraste */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
    </div>

    {/* Contenido */}
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      {/* El título usa el color de acento verde en hover */}
      <h3 className="text-2xl font-extrabold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
        {description}
      </p>
      {/* Barra de acento debajo del título */}
      <div className="mt-4 inline-block">
        <div className="w-10 h-1 bg-primary rounded-full group-hover:w-16 transition-all duration-300"></div>
      </div>
    </div>

    {/* Overlay de acento en hover (Verde transparente) */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
);

// Sección de Áreas de Especialización
const ExpertiseAreasSection = ({ expertiseAreas = [], getAnimationClass = (key, fallback = 'fade-in') => fallback }) => {
  // Datos de ejemplo si no se proporcionan
  const defaultExpertiseAreas = [
    {
      title: "Análisis de Rendimiento",
      description: "Evaluación biomecánica avanzada para optimizar la técnica y prevenir lesiones.",
      image: "https://placehold.co/500x400/10B981/ffffff?text=Performance+Analysis"
    },
    {
      title: "Preparación Mental",
      description: "Técnicas de enfoque y resiliencia para dominar la presión competitiva.",
      image: "https://placehold.co/500x400/3B82F6/ffffff?text=Mental+Training"
    },
    {
      title: "Nutrición Deportiva",
      description: "Planes personalizados para maximizar la energía, la recuperación y la composición corporal.",
      image: "https://placehold.co/500x400/F59E0B/ffffff?text=Sports+Nutrition"
    },
    {
      title: "Recuperación Activa",
      description: "Estrategias de terapia y descanso acelerado para volver más fuerte.",
      image: "https://placehold.co/500x400/EF4444/ffffff?text=Recovery"
    },
    {
      title: "Fuerza y Acondicionamiento",
      description: "Programas de entrenamiento de fuerza específicos para el deporte y la potencia.",
      image: "https://placehold.co/500x400/A855F7/ffffff?text=Strength+Training"
    },
    {
      title: "Tecnología Deportiva",
      description: "Implementación de wearables y data analytics para la toma de decisiones.",
      image: "https://placehold.co/500x400/14B8A6/ffffff?text=Sport+Tech"
    }
  ];

  const areas = expertiseAreas.length > 0 ? expertiseAreas : defaultExpertiseAreas;

  return (
    // El error se encontraba aquí, al usar un comentario de bloque JSX
    <section className="py-24 px-6 bg-white"> 
      <div className="max-w-7xl mx-auto">
        <div 
          className={`text-center mb-16 ${getAnimationClass('expertise')}`}
          data-animate
          id="expertise"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-gray-900">
            {/* Usamos el gradiente deportivo que definimos en CSSStyles */}
            <span className="gradient-text-sport">
              Nuestras Especialidades
            </span>
          </h2>
          {/* Barra de acento principal verde */}
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aplicamos ciencia y tecnología de vanguardia para garantizar el **máximo rendimiento** de nuestros atletas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <ExpertiseCard 
              key={index} 
              {...area} 
              animationClass={getAnimationClass(`area-${index}`, 'scale-in')}
              id={`area-${index}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAreasSection;