import { 
  Calendar, 
  Users, 
  Award, 
  TrendingUp, 
  Handshake, 
  Droplet, // Mantenemos íconos funcionales, pero ajustamos el título
  Wrench, // Mantenemos íconos funcionales, pero ajustamos el título
  Spade, // Mantenemos íconos funcionales, pero ajustamos el título
  Home, // Mantenemos íconos funcionales, pero ajustamos el título
  CheckCircle, 
  Star 
} from 'lucide-react';

// NOTA: Las imágenes (riego, epis, etc.) DEBEN ser reemplazadas por imágenes deportivas
import riego from '../../assets/images/imgs/natacion.jpg'; 
import riego2 from '../../assets/images/imgs/deportes_equipo.jpg'; 
import epis from '../../assets/images/imgs/fitness.jpg'; 
import cocina from '../../assets/images/imgs/running.jpg'; 
import indus from '../../assets/images/imgs/yoga.jpg'; 
import tinaco from '../../assets/images/imgs/aventura.jpg'; 

// 🎯 Stats: Se enfocan en el rendimiento, la experiencia y los logros.
export const stats = [
  { icon: Calendar, number: '2015', key: 'founded', label: 'Inicio del Juego' },
  { icon: Users, number: '500k+', key: 'community', label: 'Comunidad de Atletas' },
  { icon: Award, number: '10+', key: 'champion', label: 'Años de Victoria' },
  { icon: TrendingUp, number: '99.9%', key: 'performance', label: 'Rendimiento Verificado' },
];

// 📦 Expertise Areas: Ahora son Categorías de Equipamiento Deportivo.
export const expertiseAreas = [
  { 
    icon: Droplet, // Usado para Natación/Hidratación
    title: 'Natación y Deportes Acuáticos', 
    description: 'Equipamiento profesional para entrenamientos y competición en agua: desde goggles hasta trajes de alto rendimiento.',
    features: ['Trajes hidrodinámicos','Goggles anti-empaño'],
    image: riego2 // Reemplazar por imagen de natación
  },
  { 
    icon: Handshake, // Usado para Team Sports / Equipos
    title: 'Deportes de Equipo', 
    description: 'Balones, uniformes y accesorios de la más alta resistencia para fútbol, baloncesto y voleibol.',
    features: ['Balones Pro Series', 'Uniformes Transpirables', 'Protecciones de impacto'],
    image: epis // Reemplazar por imagen de deportes de equipo
  },
  { 
    icon: Wrench, // Usado para Mantenimiento / Fitness Tech
    title: 'Fitness y Gimnasio', 
    description: 'Tecnología y accesorios para optimizar tu entrenamiento en casa o en el gimnasio: pesas, bandas y monitores.',
    features: ['Equipamiento Ergonómico', 'Monitores de Ritmo', 'Accesorios de Resistencia'],
    image: cocina // Reemplazar por imagen de fitness
  }, 
  { 
    icon: Spade, // Usado para Running / Trail
    title: 'Running y Trail', 
    description: 'Calzado y ropa técnica diseñados para la velocidad, la resistencia y los terrenos más difíciles.',
    features: ['Calzado de Velocidad', 'Ropa de Compresión', 'Accesorios de Hidratación'],
    image: riego // Reemplazar por imagen de running
  },
  { 
    icon: Home, // Usado para Hogar / Yoga
    title: 'Yoga y Bienestar', 
    description: 'Artículos premium para recuperación y flexibilidad: mats, bloques, rodillos de espuma y ropa cómoda.',
    features: ['Mats Ecológicos', 'Ropa de Algodón', 'Herramientas de Recuperación'],
    image: tinaco // Reemplazar por imagen de yoga
  },
  { 
    icon: Home, // Usado para Equipamiento Exterior
    title: 'Accesorios de Aventura', 
    description: 'Equipamiento para deportes al aire libre, garantizando seguridad y durabilidad en condiciones extremas.',
    features: ['Linternas Tácticas', 'Mochilas Ligeras', 'Botellas Térmicas'],
    image: indus // Reemplazar por imagen de aventura
  }
];

// 🗣️ Testimonials: Historias de éxito y rendimiento.
export const testimonials = [
  {
    name: "Carolina Sáenz",
    role: "Maratonista Élite",
    text: "Su calzado me dio la ventaja que necesitaba para mi mejor tiempo. La tecnología de suela es simplemente incomparable.",
    rating: 5,
    avatar: "C.S."
  },
  {
    name: "Ricardo Flores",
    role: "Entrenador Personal Certificado",
    text: "El equipamiento de resistencia es de calidad profesional. Lo recomiendo a todos mis clientes para llevar su entrenamiento al límite.",
    rating: 5,
    avatar: "R.F."
  },
  {
    name: "Elena Soto",
    role: "Capitana del Equipo de Voleibol",
    text: "La ropa de compresión es cómoda y mantiene el cuerpo perfecto durante la competición. ¡Victoria asegurada!",
    rating: 5,
    avatar: "E.S."
  }
];

// 📜 History Items: Hitos de crecimiento centrados en la superación.
export const historyItems = [
  {
    icon: Award,
    title: "El Primer Salto (2015)",
    description: "Nacimos de la pasión por el deporte, con la misión de equipar a cada atleta para alcanzar su máximo potencial. Fue nuestro primer gran desafío.",
    gradient: "from-[#1C2E82] to-[#2d4bc7]" // Manteniendo gradientes (para ser ajustados en el componente)
  },
  {
    icon: TrendingUp,
    title: "La Expansión de Récords",
    description: "Crecemos constantemente, incorporando la última tecnología deportiva, desde tejidos inteligentes hasta monitoreo avanzado de rendimiento.",
    gradient: "from-[#ED0000] to-[#ff4444]" // Manteniendo gradientes (para ser ajustados en el componente)
  },
  {
    icon: Star,
    title: "Nuestra Posición de Liderazgo",
    description: "Hoy somos el referente para el alto rendimiento, manteniendo nuestro compromiso con la innovación y la superación de los límites en cada producto.",
    gradient: "from-purple-600 to-pink-600" // Manteniendo gradientes (para ser ajustados en el componente)
  }
];

// 💎 Values: Principios que definen el espíritu deportivo.
export const values = [
  {
    icon: CheckCircle,
    title: "Rendimiento",
    description: "Cada producto está diseñado para maximizar tu potencial físico."
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Creamos lazos con atletas que comparten la pasión por el deporte."
  },
  {
    icon: TrendingUp,
    title: "Superación",
    description: "Fomentamos la mentalidad de ir siempre más allá de tus límites."
  },
  {
    icon: Award,
    title: "Calidad Pro",
    description: "Equipamiento de nivel profesional para cualquier disciplina."
  }
];