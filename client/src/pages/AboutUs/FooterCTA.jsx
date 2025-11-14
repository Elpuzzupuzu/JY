import React from 'react';

const FooterCTA = ({ getAnimationClass, ArrowRightIcon }) => (
    // Fondo: Degradado de Negro Carbón (gray-900) a Verde Esmeralda (green-700) para un look Pro/Tecnológico.
    <section className="bg-gradient-to-r from-gray-900 to-green-800 py-20 px-6 relative overflow-hidden">
        
        {/* Elemento de brillo neón para mayor impacto visual */}
        <div className="absolute inset-0 opacity-20">
             <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-400 rounded-full blur-3xl opacity-10"></div>
             <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
            <div 
                className={`text-white ${getAnimationClass('cta')}`}
                data-animate
                id="cta"
            >
                {/* Título: Llamado a la acción de superación y meta. */}
                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase">
                    ¿Listo para <span className="text-lime-400">Superar tu Límite</span>?
                </h2>
                {/* Subtítulo: Enfocado en el equipamiento y la victoria. */}
                <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                    Nuestro equipo de especialistas en rendimiento te ayudará a seleccionar el equipamiento para tu próxima victoria.
                </p>
                
                {/* Botón CTA: Verde Neón como acento principal. */}
                <a 
                    href="/contacto" 
                    className="inline-flex items-center justify-center 
                               px-10 py-4 text-xl font-bold 
                               bg-lime-400 text-gray-900 rounded-full 
                               shadow-2xl shadow-lime-400/50 
                               hover:bg-lime-300 transition-all duration-300 
                               transform hover:scale-[1.05] hover:shadow-lime-400/80 uppercase"
                >
                    ¡Añadir al Carrito y Ganar! 
                    <ArrowRightIcon className="w-6 h-6 ml-3 transform group-hover:translate-x-1" />
                </a>
            </div>
        </div>
    </section>
);

export default FooterCTA;