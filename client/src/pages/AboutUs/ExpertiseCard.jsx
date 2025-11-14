import React from 'react';
import { CheckCircle } from 'lucide-react'; // Importar CheckCircle aquí

const ExpertiseCard = ({ icon: Icon, title, description, features, animationClass, id, style }) => (
    <div 
        // Estilo: Sombra y borde que simulan un "corte" o "diseño técnico".
        className={`bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-xl 
                    group transform hover:scale-[1.03] hover:border-green-500/50 
                    transition-all duration-300 ${animationClass}`}
        data-animate
        id={id}
        style={style}
    >
        {/* Ícono: Degradado Verde Deportivo (Alto Impacto/Energía) */}
        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-lime-400 rounded-xl 
                        flex items-center justify-center mb-6 shadow-lg 
                        group-hover:scale-110 group-hover:rotate-1 transition-all duration-300">
            <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Título: Fuerte, en mayúsculas y color negro audaz. */}
        <h3 className="text-2xl font-black text-gray-900 mb-3 uppercase tracking-tight">{title}</h3>
        
        {/* Descripción: Gris para suavidad y legibilidad, enfocada en la funcionalidad. */}
        <p className="text-gray-600 leading-relaxed mb-6 font-medium">{description}</p>
        
        <ul className="space-y-3">
            {features.map((feature, i) => (
                // Puntos clave: Icono de Check en Verde Lima/Neón para acción/validación.
                <li key={i} className="flex items-start text-gray-800 font-semibold text-base">
                    <CheckCircle className="w-5 h-5 text-lime-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        
        {/* Botón: Usamos Verde Deportivo como acento de acción. */}
        <button className="mt-6 flex items-center text-base font-extrabold text-green-600 
                           hover:text-lime-500 transition-colors duration-300">
            Comprar Ahora 
            <span className="ml-2 text-xl transform group-hover:translate-x-1 transition-transform duration-300">
                &rarr;
            </span>
        </button>
    </div>
);

export default ExpertiseCard;