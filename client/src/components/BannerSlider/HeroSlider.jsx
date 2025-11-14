"use client";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Shirt, Headphones, Trophy } from "lucide-react";

// Imágenes deportivas
import bannerOne from "../../assets/images/jersey.jpg";
import bannerTwo from "../../assets/images/casco.jpg";
import bannerThree from "../../assets/images/kit.jpg";

// Datos de los slides
const slidesData = [
  {
    id: 1,
    image: bannerOne,
    category: "Nueva Colección Pro",
    title: "Jersey Oficial",
    subtitle: "2024",
    description: "Diseño ergonómico y tecnología de transpiración para el máximo rendimiento.",
    cta: "Explorar Colección",
    route: "/tienda/jerseys",
    icon: Shirt,
  },
  {
    id: 2,
    image: bannerTwo,
    category: "Accesorios Gaming",
    title: "Headsets de Audio",
    subtitle: "Inmersivo",
    description: "Escucha cada paso. Claridad de sonido profesional para una ventaja táctica.",
    cta: "Ver Accesorios",
    route: "/tienda/gaming",
    icon: Headphones,
  },
  {
    id: 3,
    image: bannerThree,
    category: "Kit de Entrenamiento",
    title: "Prepárate para",
    subtitle: "la Victoria",
    description: "Todo lo que necesitas para mejorar tu físico y mentalidad deportiva.",
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
  const IconComponent = currentSlideData.icon;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slidesData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
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
          {/* Overlay muy sutil */}
          <div className="absolute inset-0 bg-white/30 z-10" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div
            className={`max-w-2xl transform transition-all duration-1000 delay-300 ${
              isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Badge superior */}
            <div className="mb-8">
              <span className="text-lime-500 text-xs font-medium tracking-widest uppercase">
                {currentSlideData.category}
              </span>
            </div>

            {/* Título con tipografía elegante */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight mb-4">
              <span className="text-gray-900 font-semibold block">{currentSlideData.title}</span>
              <span className="text-gray-900 font-extralight block">{currentSlideData.subtitle}</span>
            </h1>

            {/* Líneas decorativas */}
            <div className="space-y-1 mb-8">
              <div className="h-px w-24 bg-lime-500"></div>
              <div className="h-px w-20 bg-gray-300"></div>
            </div>

            {/* Descripción */}
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-12 max-w-xl">
              {currentSlideData.description}
            </p>

            {/* Icono minimalista */}
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 border border-gray-900 flex items-center justify-center group 
                            hover:border-lime-500 transition-all duration-500">
                <IconComponent className="w-8 h-8 text-lime-500" />
              </div>
            </div>

            {/* CTA Button minimalista */}
            <button
              className="px-12 py-4 border border-gray-900 text-gray-900 font-light text-base
                       hover:bg-gray-900 hover:text-white transition-all duration-500
                       tracking-wide inline-flex items-center group"
              onClick={() => navigate(currentSlideData.route)}
            >
              {currentSlideData.cta}
              <ChevronRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - minimalistas */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 
                 border border-gray-900 bg-white/90 backdrop-blur-sm
                 hover:bg-gray-900 hover:border-lime-500 text-gray-900 hover:text-white
                 flex items-center justify-center transition-all duration-500"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 
                 border border-gray-900 bg-white/90 backdrop-blur-sm
                 hover:bg-gray-900 hover:border-lime-500 text-gray-900 hover:text-white
                 flex items-center justify-center transition-all duration-500"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Progress Indicators - minimalistas */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 ${
              index === currentSlide
                ? "w-12 h-1 bg-lime-500" 
                : "w-8 h-1 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter - minimalista */}
      <div className="absolute top-6 right-6 z-30 text-gray-900 text-sm font-light tracking-wider">
        <span className="font-medium">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="text-gray-400 mx-2">/</span>
        <span className="text-gray-400">{String(slidesData.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default HeroSlider;