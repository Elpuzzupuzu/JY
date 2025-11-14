import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = ({ testimonials, getAnimationClass }) => (
    // Fondo limpio y profesional con una sutil línea verde de alto rendimiento
    <section className="bg-gray-50 py-20 px-6 border-t-2 border-green-500/30">
        <div className="max-w-7xl mx-auto">
            <div 
                className={`text-center mb-16 ${getAnimationClass('testimonials')}`}
                data-animate
                id="testimonials"
            >
                {/* 💥 Título Deportivo: Alto impacto con Negro y Verde Brillante. */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tighter text-gray-900 uppercase">
                    <span className="text-gray-900">Nuestros</span> <span className="text-green-600">Fans</span>
                </h2>
                {/* 🟢 Separador Sólido en Verde Deportivo */}
                <div className="w-24 h-1 bg-green-500 mx-auto mb-6 rounded-full transform scale-x-125"></div>
                
                {/* Párrafo: Enfocado en el rendimiento y la prueba social. */}
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                    Historias de atletas y clientes que han alcanzado la victoria con nuestro equipamiento.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {testimonials.map((testimonial, index) => (
                    <div 
                        key={index}
                        className={getAnimationClass(`testimonial-${index}`, 'fade-in-up')}
                        data-animate
                        id={`testimonial-${index}`}
                        // Mantenemos la animación secuencial para dinamismo
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        {/* Se usa el TestimonialCard previamente ajustado a verde */}
                        <TestimonialCard {...testimonial} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default TestimonialsSection;