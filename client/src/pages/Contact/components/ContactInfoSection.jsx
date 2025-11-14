// src/components/contact/ContactInfoSection.jsx

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react'; // Agregamos Clock para el horario
import ContactInfoCard from './ContactInfoCard';

// Variante de animación del contenedor (más simple y profesional)
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.7, 
            ease: [0.25, 0.46, 0.45, 0.94],
            when: "beforeChildren", // Aseguramos que los hijos aparezcan después
            staggerChildren: 0.15 
        } 
    },
};

// Variante de animación para el texto (se mantiene limpia)
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } 
    },
};

const ContactInfoSection = () => (
    // 💡 Contenedor: Ajuste del borde y la sombra para adaptarse a la estética verde/esports
    <motion.div 
        className="bg-white p-8 md:p-10 rounded-xl shadow-2xl shadow-[#4CAF50]/30 border border-[#4CAF50]/10" // Sombra y borde verde sutil
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
    >
        {/* Título: Color de acento Verde Vibrante */}
        <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#0A2A1A] mb-4 tracking-tight" // Título en Verde Oscuro para contraste
            variants={itemVariants}
        >
            🚀 Soporte Pro de JY esports
        </motion.h2>
        
        {/* Párrafo: Se adapta el texto a la temática esports */}
        <motion.p 
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 font-normal" 
            variants={itemVariants}
        >
            ¿Necesitas ayuda con tu pedido o equipamiento? Nuestro equipo de soporte está listo para ayudarte a volver al juego lo antes posible.
        </motion.p>

        <div className="space-y-6">
            {/* Tarjeta de Email - DATOS ACTUALIZADOS */}
            <ContactInfoCard
                Icon={Mail}
                title="Email de Soporte"
                value="soporte@jyesports.mx"
                href="mailto:soporte@jyesports.mx"
                itemDelay={0} 
            />
            
            {/* Tarjeta de Teléfono - DATOS ACTUALIZADOS */}
            <ContactInfoCard
                Icon={Phone}
                title="Línea Directa"
                value="+52 55 1234 5678"
                href="tel:+525512345678"
                itemDelay={0.15}
            />
            
            {/* Tarjeta de Dirección - DATOS ACTUALIZADOS */}
            <ContactInfoCard
                Icon={MapPin}
                title="Base de Operaciones"
                value="Avenida del Deporte #45, Colonia Campeones, Ciudad de México, México C.P. 01020"
                href="#"
                itemDelay={0.3}
            />
            
            {/* Tarjeta Adicional: Horario de Atención (Relevante para contacto) */}
            <ContactInfoCard
                Icon={Clock}
                title="Horario de Atención"
                value="Lunes a Viernes: 9:00 - 18:00 hrs (GMT-6)"
                href="#"
                itemDelay={0.45}
            />
        </div>
    </motion.div>
);

export default ContactInfoSection;