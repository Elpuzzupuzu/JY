import React from 'react';

const CSSStyles = () => (
    <style jsx global>{`
        
        /* =======================================================
          * 1. VARIABLES - ALTO RENDIMIENTO DEPORTIVO
          * ------------------------------------------------------- */
        :root {
            /* 🟢 Color Principal: Verde Eléctrico para Energía / Victoria (Acento) */
            --color-primary: #10B981; /* green-500/600 */
            --color-primary-dark: #059669; /* green-700 */
            --color-primary-light: #34D399; /* green-400 */

            /* ⚫ Color Neutro/Oscuro: Gris Carbón para Contraste Profesional (Base) */
            --color-text: #1F2937; /* gray-800, Texto principal */
            --color-background: #ffffff; /* Fondo limpio */
            --color-dark-surface: #111827; /* gray-900, Para CTA o fondos oscuros */
        }

        /* =======================================================
          * 2. CLASES DE UTILIDAD TAILWIND
          * ------------------------------------------------------- */

        .text-primary { color: var(--color-primary); }
        .bg-primary { background-color: var(--color-primary); }
        .border-primary { border-color: var(--color-primary); }
        .hover-text-primary:hover { color: var(--color-primary-dark); }
        .focus-ring-primary:focus { --tw-ring-color: var(--color-primary-dark); }
        
        /* Botón Primario Deportivo (Énfasis en la acción) */
        .btn-primary-sport {
            background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark)); 
            color: white;
            font-weight: 700;
            border-radius: 9999px;
            transition: transform 0.2s, box-shadow 0.2s;
            box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        }
        .btn-primary-sport:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.6);
        }
        
        /* Botón Secundario (Outline, limpio y enérgico) */
        .btn-secondary-sport {
            color: var(--color-primary);
            border: 2px solid var(--color-primary);
            background: transparent;
            font-weight: 600;
            border-radius: 9999px;
            transition: all 0.3s ease-out;
        }
        .btn-secondary-sport:hover {
            background-color: var(--color-primary);
            color: white;
            box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
        }
        
        /* Call to Action (CTA) - Fondo Oscuro para Máximo Impacto */
        .bg-cta-sport {
            background-color: var(--color-dark-surface); /* Gris muy oscuro/negro */
            color: white;
            padding-top: 5rem;
            padding-bottom: 5rem;
        }
        
        /* Gradiente de texto de rendimiento (Verde a Azul Profundo) */
        .gradient-text-sport {
            background: linear-gradient(90deg, #10B981 0%, #3B82F6 100%); /* Verde a Azul */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            background-size: 200% auto;
            animation: gradient-shift 4s ease infinite;
        }
        
        /* Línea de tiempo (History) */
        .timeline-dot {
            background-color: var(--color-primary);
        }
        .timeline-line {
            background-color: #D1D5DB; /* gray-300 */
        }
        
        /* =======================================================
          * 3. ANIMACIONES Y EFECTOS
          * ------------------------------------------------------- */

        /* Animaciones de entrada (Mantenidas, ya son fluidas) */
        .animate-fade-in-up {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-fade-in-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .animate-scale-in {
            opacity: 0;
            transform: scale(0.92);
            transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-scale-in.visible {
            opacity: 1;
            transform: scale(1);
        }
        
        @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        
        /* Tarjeta de elevación (Sombra Verde) */
        .hover-lift-sport {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                        box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-lift-sport:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 32px -8px rgba(16, 185, 129, 0.25), /* Sombra principal verde */
                        0 8px 16px -4px rgba(0, 0, 0, 0.05); /* Sombra secundaria neutra */
        }
        
        /* Glass Card (Para usar sobre fondos con textura o fotos) */
        .glass-card {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
        }
        
        /* Formas flotantes (Textura de fondo de energía) */
        .floating-shapes {
            position: relative;
            overflow: hidden;
        }
        
        .floating-shapes::before {
            content: '';
            position: absolute;
            top: 10%;
            right: 10%;
            width: 150px;
            height: 150px;
            background: var(--color-primary); /* Verde */
            border-radius: 50%;
            opacity: 0.1;
            filter: blur(50px);
            animation: float 10s ease-in-out infinite;
            z-index: 0;
        }
        
        .floating-shapes::after {
            content: '';
            position: absolute;
            bottom: 15%;
            left: 5%;
            width: 120px;
            height: 120px;
            background: #374151; /* Gris oscuro para seriedad */
            border-radius: 50%;
            opacity: 0.05; 
            filter: blur(40px);
            animation: float 8s ease-in-out infinite reverse;
            z-index: 0;
        }
        
        @keyframes float {
            0%, 100% { 
                transform: translateY(0px) translateX(0px) rotate(0deg); 
            }
            33% {
                transform: translateY(-20px) translateX(15px) rotate(10deg);
            }
            66% {
                transform: translateY(-10px) translateX(-15px) rotate(-10deg);
            }
        }
        
        /* Efecto de brillo suave para elementos interactivos */
        .glow-on-hover-sport {
            position: relative;
            transition: all 0.3s ease;
        }
        .glow-on-hover-sport::after {
            content: '';
            position: absolute;
            inset: -2px;
            background: var(--color-primary); /* Brillo verde */
            border-radius: inherit;
            opacity: 0;
            z-index: -1;
            filter: blur(12px);
            transition: opacity 0.4s ease;
        }
        .glow-on-hover-sport:hover::after {
            opacity: 0.5;
        }
        
        
        
        /* =======================================================
          * 4. MISCELÁNEA
          * ------------------------------------------------------- */

        /* Colores para valores: Misión y Visión (Mantenemos contraste) */
        .color-mission { color: #3B82F6; /* blue-500, Enfoque */ }
        .color-vision { color: #F59E0B; /* amber-500, Impacto */ }
        
        /* Tarjetas de Valores - Fondos */
        .bg-value-1 { background-color: #ECFDF5; /* green-50 */ }
        .bg-value-2 { background-color: #FEF3C7; /* amber-50 */ }
        .bg-value-3 { background-color: #EFF6FF; /* blue-50 */ }
        .bg-value-4 { background-color: #FEE2E2; /* red-50 */ }
        
        /* Colores de Íconos para la sección de Expertise */
        .icon-sport-1 { color: #10B981; } /* green-500 */
        .icon-sport-2 { color: #3B82F6; } /* blue-500 */
        .icon-sport-3 { color: #F59E0B; } /* amber-500 */
        .icon-sport-4 { color: #EF4444; } /* red-500 */
        .icon-sport-5 { color: #A855F7; } /* violet-500 */
        .icon-sport-6 { color: #14B8A6; } /* teal-500 */
        
        
        /* Optimización de rendimiento */
        .animate-fade-in-up,
        .animate-scale-in,
        .hover-lift-sport {
            will-change: transform, opacity, box-shadow;
        }
        
        html {
            scroll-behavior: smooth;
        }
    `}</style>
);

export default CSSStyles;