"use client";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Zap, Trophy, Shirt, Headphones } from "lucide-react";

// NOTA: Para un eCommerce de deportes, las imágenes deberían ser de jerseys, accesorios, etc.
// Mantengo los nombres de las importaciones, asumiendo que las actualizarás con imágenes de deportes.
import bannerOne from "../../assets/images/jersey.jpg"; // Antes: bombita.jpg
import bannerTwo from "../../assets/images/casco.jpg"; // Antes: pvc.jpg
import bannerThree from "../../assets/images/kit.jpg"; // Antes: bombapool.jpg

// Datos de los slides con temática de JY esports
const slidesData = [
  {
    id: 1,
    image: bannerOne,
    category: "Nueva Colección Pro",
    title: "Jersey Oficial 2024",
    subtitle: "Diseño ergonómico y tecnología de transpiración para el máximo rendimiento.",
    features: ["Tejido Dry-Fit", "Personalización GRATIS", "Edición Limitada"],
    cta: "Comprar Ahora",
    route: "/tienda/jerseys",
    icon: Shirt,
  },
  {
    id: 2,
    image: bannerTwo,
    category: "Accesorios Gaming",
    title: "Headsets de Audio Inmersivo",
    subtitle: "Escucha cada paso. Claridad de sonido profesional para una ventaja táctica.",
    features: ["Micrófono HD", "Sonido 7.1 Surround", "Confort Extremo"],
    cta: "Ver Accesorios",
    route: "/tienda/gaming",
    icon: Headphones,
  },
  {
    id: 3,
    image: bannerThree,
    category: "Kit de Entrenamiento",
    title: "Prepárate para la Victoria",
    subtitle: "Todo lo que necesitas para mejorar tu físico y mentalidad deportiva.",
    features: ["Incluye botella", "Guía de Ejercicios", "Materiales Reciclados"],
    cta: "Explorar Kits",
    route: "/tienda/entrenamiento",
    icon: Trophy,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  // Códigos de color de la paleta
  const COLOR_PRIMARY = "bg-[#4CAF50]"; // Verde Vibrante
  const COLOR_DARK = "bg-[#0A2A1A]";     // Verde Oscuro
  const COLOR_ACCENT = "text-[#FFD700]"; // Dorado/Amarillo

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentSlideData = slidesData[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  return (
    <div
      // CAMBIO DE COLOR: Fondo oscuro general con gradiente de contraste
      className="relative w-full h-[450px] md:h-[550px] overflow-hidden shadow-2xl bg-gradient-to-br from-[#0A2A1A] to-[#1A452E] "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slidesData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : index < currentSlide
              ? "opacity-0 -translate-x-full"
              : "opacity-0 translate-x-full"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Capa de Sombra/Oscurecimiento para el texto */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          {/* Gradiente de contraste para el área de contenido (Verde Oscuro) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A1A]/90 via-black/40 to-transparent z-10" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-1 gap-8 items-center">
            <div
              className={`text-white transform transition-all duration-1000 delay-300 ${
                isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Category Badge - CAMBIO DE COLOR (Verde Vibrante) */}
              <div className={`inline-flex items-center px-4 py-2 ${COLOR_PRIMARY}/90 backdrop-blur-sm rounded-full text-sm font-semibold mb-3 tracking-wide`}>
                <Zap className="w-4 h-4 mr-2" />
                {currentSlideData.category}
              </div>

              {/* Main Title - COLOR BLANCO */}
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-3 leading-tight drop-shadow-lg">
                {currentSlideData.title}
              </h1>

              {/* Subtitle - COLOR GRIS CLARO */}
              <p className="text-base lg:text-lg mb-6 text-gray-300 leading-relaxed max-w-xl">
                {currentSlideData.subtitle}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-3 mb-8">
                {currentSlideData.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-sm font-medium bg-white/10 border border-[#4CAF50]/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  >
                    {/* Icono de rayo (Zap) ahora en color Dorado/Amarillo */}
                    <Zap className={`w-4 h-4 mr-2 ${COLOR_ACCENT}`} />
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA Button - CAMBIO DE COLOR (Gradiente Verde) */}
              <button
                className={`group bg-gradient-to-r from-[#4CAF50] to-[#388E3C] hover:from-[#388E3C] hover:to-[#4CAF50] text-black px-8 py-3 rounded-xl text-base font-bold shadow-xl hover:shadow-2xl hover:shadow-[#4CAF50]/40 transform hover:scale-[1.02] transition-all duration-300 flex items-center uppercase`}
                onClick={() => navigate(currentSlideData.route)}
              >
                {currentSlideData.cta}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 hover:bg-[#4CAF50] text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 hover:bg-[#4CAF50] text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-3">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative transition-all duration-300 border-2 border-white/50 ${
              index === currentSlide
                // Indicador activo, color verde vibrante
                ? "w-12 h-3 bg-[#4CAF50] rounded-full shadow-md shadow-[#4CAF50]/50" 
                // Indicador inactivo, fondo oscuro con borde blanco/gris
                : "w-3 h-3 bg-white/30 hover:bg-white rounded-full"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter - CAMBIO DE COLOR (Verde Oscuro con texto Dorado) */}
      <div className={`absolute top-6 right-6 z-30 ${COLOR_DARK}/80 backdrop-blur-sm border border-white/10 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg`}>
        <span className={COLOR_ACCENT}>{currentSlide + 1}</span> / {slidesData.length}
      </div>
    </div>
  );
};

export default HeroSlider;