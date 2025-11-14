import { 
  Wrench, Sprout, Leaf, Sun, Droplet, 
  Users, Handshake, CheckCircle, Award, Clock,
  // NUEVOS ÍCONOS CORRESPONDIENTES
  Bolt, // Nutrición/Energía
  Dumbbell, // Cardio/Fuerza
  Weight, // Fuerza PRO
  CalendarCheck, // Coaching/Planes
  Shirt, // Ropa/Compresión
  Zap, // Recuperación/Tecnología
} from "lucide-react";

import riegoImg from '../../assets/serviceimages/riego.jpg';
import sensorImg from '../../assets/serviceimages/sensore.jpg';
import ahorroagua from '../../assets/serviceimages/ahorro.jpg';
import alberca1 from '../../assets/serviceimages/alberca1.jpg';
import alberca2 from '../../assets/serviceimages/alberca2.jpg';
import alberca3 from '../../assets/serviceimages/alberca3.jpg';
import pipe1 from '../../assets/serviceimages/pipe1.jpg';
import pipe2 from '../../assets/serviceimages/pipe2.jpg';
import pipe3 from '../../assets/serviceimages/pipe3.jpg';
import vu from '../../assets/serviceimages/vu.jpg';
import plan from '../../assets/serviceimages/plan.jpg';
import rev from '../../assets/serviceimages/rev.jpg';
import asp1 from '../../assets/serviceimages/asper1.jpg';
import asp2 from '../../assets/serviceimages/asper2.jpg';
import asp3 from '../../assets/serviceimages/asper3.jpg';
import cis1 from '../../assets/serviceimages/cisterna.jpg';
import cis2 from '../../assets/serviceimages/cis2.jpg';
import cis3 from '../../assets/serviceimages/cisterna3.jpg';



export const services = [
  { 
    id: "potenciador-de-hidratacion",
    icon: Bolt, // Cambiado: Bolt (Rayo/Energía)
    title: 'Nutrición e Hidratación Estratégica', 
    description: 'Fórmulas avanzadas y sistemas de ingesta controlada para optimizar el rendimiento y la recuperación muscular durante el esfuerzo máximo.',
    items: [
      { name: 'Electrolitos de Acción Rápida', details: 'Fórmula balanceada para reponer sales minerales críticas.', image: riegoImg },
      { name: 'Sensores de Carga Muscular', details: 'Monitoreo en tiempo real para dosis de combustible precisas.', image: sensorImg },
      { name: 'Recuperación 40% más Rápida', details: 'Estrategias nutricionales que aceleran la vuelta al entrenamiento.', image: ahorroagua }
    ],
    color: 'from-lime-400 to-green-500' 
  },
  { 
    id: "equipamiento-cardio",
    icon: Dumbbell, // Cambiado: Dumbbell (Cardio/Entrenamiento General)
    title: 'Equipamiento de Cardio de Alto Impacto', 
    description: 'Selección de máquinas y accesorios para llevar tus límites cardiovasculares al nivel profesional.',
    items: [
      { name: 'Caminadoras de Velocidad', details: 'Motores de alta potencia para sprints sin límite.', image: alberca1 },
      { name: 'Bicicletas de Resistencia Fluida', details: 'Entrenamiento silencioso con resistencia variable y precisa.', image: alberca2 },
      { name: 'Monitores de Rendimiento (HR)', details: 'Seguimiento inteligente de la zona de quema y pulso.', image: alberca3 }
    ],
    color: 'from-red-500 to-orange-400' 
  },
  { 
    id: "herramientas-de-fuerza",
    icon: Weight, // Cambiado: Weight (Halterofilia/Fuerza Pura)
    title: 'Herramientas y Accesorios de Fuerza PRO', 
    description: 'Equipamiento robusto y ergonómico, esencial para el levantamiento de pesas y entrenamiento funcional avanzado.',
    items: [
      { name: 'Barras de Halterofilia Calibradas', details: 'Diseño para agarre seguro y distribución de peso perfecta.', image: pipe1 },
      { name: 'Racks de Potencia Modular', details: 'Estructuras de acero reforzado con ajustes rápidos.', image: pipe2 },
      { name: 'Bandas de Resistencia Táctica', details: 'Versatilidad total para ejercicios de asistencia y sobrecarga.', image: pipe3 }
    ],
    color: 'from-gray-700 to-slate-500' 
  },
  { 
    id: "entrenamiento-integral",
    icon: CalendarCheck, // Cambiado: CalendarCheck (Planes/Seguimiento)
    title: 'Planes de Coaching y Nutrición Personalizados', 
    description: 'Soporte completo con expertos para prolongar tu carrera deportiva y optimizar cada sesión de entrenamiento.',
    items: [
      { name: 'Plan de Periodización Anual', details: 'Diseñado para picos de rendimiento en competencias clave.', image: plan },
      { name: 'Revisiones Biométricas Mensuales', details: 'Ajuste de macros y rutinas basado en progreso real.', image: rev },
      { name: 'Acceso a Coach 24/7', details: 'Soporte inmediato para dudas y motivación constante.', image: vu }
    ],
    color: 'from-emerald-500 to-cyan-500' 
  },
  { 
    id: "ropa-de-compresion",
    icon: Shirt, // Cambiado: Shirt (Ropa/Textiles)
    title: 'Ropa de Compresión y Performance', 
    description: 'Textiles inteligentes que mejoran la circulación, reducen la fatiga y aumentan tu sensación de velocidad.',
    items: [
      { name: 'Diseño Aerodinámico (No Sweat)', details: 'Tejidos de última generación que manejan la humedad y el calor.', image: asp1 },
      { name: 'Tecnología de Compresión Muscular', details: 'Soporte estratégico para evitar vibraciones y lesiones.', image: asp2 },
      { name: 'Protección UV Activa', details: 'Prácticas seguras que promueven la conservación de la piel.', image: asp3 }
    ],
    color: 'from-teal-400 to-blue-500' 
  },
  { 
    id: "recuperacion-y-crioterapia",
    icon: Zap, // Cambiado: Zap (Recuperación/Tecnología Rápida)
    title: 'Tecnología de Recuperación y Crioterapias', 
    description: 'Equipos avanzados para una recuperación de élite, asegurando que tu cuerpo esté listo para el siguiente desafío.',
    items: [
      { name: 'Botas de Compresión Neumática', details: 'Drenaje linfático y reducción de ácido láctico profesional.', image: cis3 },
      { name: 'Pistolas de Masaje de Percusión', details: 'Terapia de punto profundo certificada para liberación miofascial.', image: cis1 },
      { name: 'Suministro de Hielo Terapéutico', details: 'Garantía de aplicación de frío localizada y segura.', image: cis2 }
    ],
    color: 'from-blue-600 to-teal-500'
  }
];

export const whyChooseUs = [
  { icon: Award, title: "15 Campeonatos Ganados", description: "Más de una década perfeccionando equipamiento y estrategias que llevan al oro." },
  { icon: Users, title: "Comunidad de Atletas PRO", description: "Una red creciente de atletas de élite que confían en nuestro rendimiento." },
  { icon: Clock, title: "Entrega Express Global", description: "Disponibilidad de envío rápido para que no detengas tu entrenamiento." },
  { icon: CheckCircle, title: "Garantía de Rendimiento", description: "Respaldamos cada producto y servicio para ofrecer la máxima confianza en la competencia." }
];