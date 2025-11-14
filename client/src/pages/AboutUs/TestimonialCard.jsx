import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, text, rating, avatar }) => (
    // Base: Bordes un poco más afilados (rounded-xl), sombra de impacto y efecto hover deportivo.
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl border-2 border-gray-100 
                    transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-500/50 
                    group transform hover:scale-[1.01]">
        
        <div className="flex items-start mb-6">
            {/* 🏅 Avatar: Degradado en Verde Deportivo (Acento de Alto Rendimiento) */}
            <div 
                className="w-14 h-14 bg-gradient-to-br from-green-600 to-lime-400 rounded-full 
                           flex items-center justify-center text-white font-black text-xl 
                           flex-shrink-0 mr-4 shadow-lg ring-4 ring-green-100 
                           transition-transform duration-300 group-hover:rotate-3" // Añadimos una micro-animación de rotación
            >
                {avatar}
            </div>
            
            <div className="flex-1">
                {/* Nombre: Fuerte y Audaz (como un atleta destacado) */}
                <h4 className="font-extrabold text-xl text-gray-900 leading-tight uppercase tracking-tight">{name}</h4>
                {/* Rol: Color de acento verde para denotar la conexión con la marca deportiva */}
                <p className="text-sm text-green-600 font-semibold">{role}</p>
            </div>
        </div>
        
        {/* Texto del Testimonio: Más directo y cita de alto impacto. */}
        <p className="text-gray-800 font-medium mb-6 leading-snug">"{text}"</p>
        
        {/* Rating Stars (Usamos un amarillo vibrante para máximo contraste con el verde) */}
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <Star 
                    key={i} 
                    className={`w-5 h-5 transition-colors ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    // Cambiamos el color de relleno a un amarillo más vibrante
                    fill={i < rating ? 'currentColor' : 'none'} 
                />
            ))}
        </div>
    </div>
);

export default TestimonialCard;