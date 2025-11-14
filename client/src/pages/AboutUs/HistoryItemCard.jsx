import React from 'react';

const HistoryItemCard = ({ icon: Icon, title, description, gradient, animationClass, id, style }) => (
    <div 
        className={`bg-white p-8 md:p-10 border border-gray-200 
                    transition-all duration-500 ease-out
                    hover:border-lime-500 hover:shadow-sm
                    group ${animationClass}`}
        data-animate
        id={id}
        style={style}
    >
        <div className="flex items-start gap-6">
            {/* Icono minimalista con borde */}
            <div 
                className="w-14 h-14 md:w-16 md:h-16 
                           border border-gray-200 flex items-center justify-center 
                           flex-shrink-0 
                           transition-all duration-500
                           group-hover:border-lime-500"
            >
                <Icon className="w-7 h-7 md:w-8 md:h-8 text-lime-500" />
            </div>
            
            <div className="flex-1 pt-1">
                {/* Título con tipografía elegante */}
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-3 leading-tight tracking-tight">
                    {title}
                </h3>
                
                {/* Línea decorativa sutil */}
                <div className="h-px w-12 bg-lime-500 mb-4 
                               transition-all duration-500
                               group-hover:w-20"></div>
                
                {/* Descripción con tipografía ligera */}
                <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
                    {description}
                </p>
            </div>
        </div>
    </div>
);

export default HistoryItemCard;