import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    },
};

const ContactHero = () => (
    <section className="relative bg-white py-32 md:py-40 px-6 overflow-hidden">
        
        {/* Patrón sutil de fondo */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 15px)',
            backgroundSize: '15px 15px'
        }}></div>

        <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
                className="text-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Badge superior */}
                <motion.div variants={itemVariants}>
                    <span className="text-lime-500 text-xs font-medium tracking-widest uppercase mb-8 inline-block">
                        Contacto
                    </span>
                </motion.div>

                {/* Título principal con tipografía elegante */}
                <motion.h1 
                    className="text-5xl md:text-6xl lg:text-7xl font-light leading-none tracking-tight mb-8"
                    variants={itemVariants}
                >
                    <span className="text-gray-900 font-semibold">¿Listo para el </span>
                    <span className="text-gray-900 font-extralight">Siguiente Nivel?</span>
                </motion.h1>

                {/* Líneas decorativas */}
                <motion.div 
                    className="flex items-center justify-center mb-10"
                    variants={itemVariants}
                >
                    <div className="space-y-1">
                        <div className="h-px w-20 bg-lime-500 mx-auto"></div>
                        <div className="h-px w-16 bg-gray-300 mx-auto"></div>
                    </div>
                </motion.div>

                {/* Descripción principal */}
                <motion.p 
                    className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-12" 
                    variants={itemVariants}
                >
                    Nuestro equipo de JY esports está en línea para ayudarte.{' '}
                    <span className="text-gray-900 font-normal">Contáctanos para consultas</span> de pedidos, soporte técnico o patrocinios.
                </motion.p>

                {/* Icono minimalista con borde */}
                <motion.div 
                    className="inline-flex items-center justify-center w-20 h-20 border border-gray-200 mb-10 group hover:border-lime-500 transition-all duration-500"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                >
                    <Mail className="w-9 h-9 text-lime-500" />
                </motion.div>

                {/* Texto de garantía */}
                <motion.p 
                    className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-light" 
                    variants={itemVariants}
                >
                    Respuesta garantizada en menos de 24 horas.
                </motion.p>
            </motion.div>
        </div>
    </section>
);

export default ContactHero;