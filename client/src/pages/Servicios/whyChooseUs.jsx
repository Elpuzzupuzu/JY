const WhyChooseUs = ({ whyChooseUs, isVisible }) => {
  return (
    // CAMBIO: Fondo oscuro con gradiente sutil para look PRO/tecnológico
    <section className="py-20 px-6 bg-gradient-to-br from-gray-950 to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 animate-fade-in-up ${
            isVisible.whyUs ? "visible" : ""
          }`}
          data-animate
          id="whyUs"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight uppercase">
            {/* CAMBIO: Texto blanco con gradiente Neón */}
            <span className="text-white drop-shadow-lg">
              La Ventaja de{" "}
            </span>
            <span className="bg-gradient-to-r from-lime-400 via-green-400 to-white bg-clip-text text-transparent drop-shadow-lg">
              la Élite
            </span>
          </h2>
          
          {/* CAMBIO: Separador en Verde Neón */}
          <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-green-500 mx-auto mb-6 rounded-full shadow-lg shadow-lime-500/50"></div>
          
          {/* CAMBIO: Párrafo en gris claro */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            No solo vendemos equipos, ofrecemos el ecosistema completo para asegurar tu **máximo rendimiento** y victoria.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, i) => (
            <div
              key={i}
              className={`text-center group animate-scale-in ${
                isVisible[`why-${i}`] ? "visible" : ""
              }`}
              data-animate
              id={`why-${i}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Contenedor del Icono: Fondo oscuro/transparente con acento Neón */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-800/70 rounded-3xl flex items-center justify-center border-2 border-gray-700 shadow-xl group-hover:scale-105 transition-all duration-300">
                {/* Ícono Interior: Gradiente Neón */}
                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-black/50">
                  <item.icon className="w-6 h-6 text-gray-900" /> {/* Ícono de color oscuro para contraste */}
                </div>
              </div>
              
              {/* Título: Blanco audaz con acento Neón en hover */}
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-lime-400 transition-colors duration-300">
                {item.title}
              </h3>
              
              {/* Descripción: Gris claro */}
              <p className="text-gray-400 font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;