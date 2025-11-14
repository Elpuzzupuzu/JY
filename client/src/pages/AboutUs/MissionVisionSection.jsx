import React from 'react';
import ValueCard from './ValueCard';

const MissionVisionSection = ({ values, getAnimationClass, AwardIcon, TrendingUpIcon, StarIcon, CheckCircleIcon }) => (
    // 1. Fondo en Negro Carbón Profundo (Seriedad + Tecnología Deportiva)
    // El degradado usa tonos muy oscuros para mantener la atención en las cards verdes.
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        
        {/* Elementos de fondo borrosos para dar profundidad, usando el Verde Deportivo */}
        <div className="absolute inset-0 opacity-10">
            {/* Usamos el verde de acento para los blurs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div> 
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-lime-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
            {/* Título de la Sección */}
            <div 
                className={`text-center mb-16 ${getAnimationClass('mission')}`}
                data-animate
                id="mission"
            >
                {/* Título: Alto contraste en blanco, negrita extrema */}
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
                    Misión & <span className="text-green-400">Visión</span>
                </h2>
                {/* Separador elegante en Verde Deportivo para alto contraste */}
                <div className="w-20 h-1 bg-green-500 mx-auto mb-6 rounded-full opacity-90"></div>
                {/* Párrafo: Opacidad ajustada para legibilidad perfecta */}
                <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed font-light">
                    Los pilares que guían nuestro compromiso con la excelencia, el rendimiento y la superación constante.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                
                {/* Mission Card (Efecto cristal sobre fondo oscuro, borde de impacto verde) */}
                <div 
                    className={`bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-800/50 transform hover:scale-[1.01] ${getAnimationClass('missionCard', 'scale-in')}`}
                    data-animate
                    id="missionCard"
                >
                    <div className="flex items-center mb-8">
                        {/* Ícono: Degradado Verde Atlétio */}
                        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-lime-400 rounded-2xl flex items-center justify-center mr-6 shadow-xl flex-shrink-0">
                            <AwardIcon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-extrabold uppercase text-white tracking-tight">Misión</h3>
                    </div>
                    {/* Texto con alta opacidad para legibilidad */}
                    <p className="text-gray-200 leading-relaxed text-lg mb-6">
                        Impulsar el rendimiento de atletas y entusiastas con productos de la más alta calidad y tecnología, fomentando una cultura de superación y vida activa en todas las comunidades.
                    </p>
                    
                    {/* Lista de Puntos: Verde Lima/Neón (Acción/Proceso) */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                            <CheckCircleIcon className="w-4 h-4 text-lime-400 mr-2 flex-shrink-0" />
                            <span className="font-semibold text-gray-100">Calidad Superior</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircleIcon className="w-4 h-4 text-lime-400 mr-2 flex-shrink-0" />
                            <span className="font-semibold text-gray-100">Tecnología Avanzada</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircleIcon className="w-4 h-4 text-lime-400 mr-2 flex-shrink-0" />
                            <span className="font-semibold text-gray-100">Rendimiento Máximo</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircleIcon className="w-4 h-4 text-lime-400 mr-2 flex-shrink-0" />
                            <span className="font-semibold text-gray-100">Comunidad Activa</span>
                        </div>
                    </div>
                </div>
                
                {/* Vision Card (Efecto cristal sobre fondo oscuro, borde de impacto verde) */}
                <div 
                    className={`bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-800/50 transform hover:scale-[1.01] ${getAnimationClass('visionCard', 'scale-in')}`}
                    data-animate
                    id="visionCard"
                >
                    <div className="flex items-center mb-8">
                        {/* Ícono: Degradado Verde Atlétio */}
                        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-lime-400 rounded-2xl flex items-center justify-center mr-6 shadow-xl flex-shrink-0">
                            <TrendingUpIcon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-extrabold uppercase text-white tracking-tight">Visión</h3>
                    </div>
                    {/* Texto con alta opacidad para legibilidad */}
                    <p className="text-gray-200 leading-relaxed text-lg mb-6">
                        Ser la marca de equipamiento deportivo número uno a nivel global, reconocida por su innovación constante, diseño disruptivo y por inspirar a millones a superar sus límites físicos.
                    </p>
                    
                    {/* Lista de Puntos: Amarillo Deportivo/Neón (Meta/Logro) */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                            <StarIcon className="w-4 h-4 text-yellow-300 mr-2 flex-shrink-0" />
                            <span className="font-semibold text-gray-100">Marca Global #1</span>
                        </div>
                        <div className="flex items-center">
                            <StarIcon className="w-4 h-4 text-yellow-300 mr-2 flex-shrink-0" />
                            <span className="font-semibold text-gray-100">Innovación Extrema</span>
                        </div>
                        <div className="flex items-center">
                            <StarIcon className="w-4 h-4 text-yellow-300 mr-2 flex-shrink-0" />
                            <span className="font-semibold text-gray-100">Diseño Disruptivo</span>
                        </div>
                        <div className="flex items-center">
                            <StarIcon className="w-4 h-4 text-yellow-300 mr-2 flex-shrink-0" />
                            <span className="font-semibold text-gray-100">Inspiración Masiva</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div 
                className={getAnimationClass('values')}
                data-animate
                id="values"
            >
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-black mb-4 uppercase">Nuestros Valores</h3>
                    {/* Separador usando el Verde de acento */}
                    <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* NOTA: ValueCard debe usar texto blanco y acentos verdes para este fondo oscuro. */}
                    {values.map((value, index) => (
                        <ValueCard key={index} {...value} />
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default MissionVisionSection;