import ServiceCard from "./serviceCard";

const ServicesGrid = ({ services, isVisible }) => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`mb-24 animate-fade-in-up ${
            isVisible.servicesHeader ? "visible" : ""
          }`}
          data-animate
          id="servicesHeader"
        >
          <div className="space-y-1 mb-8">
            <span className="text-lime-500 text-xs font-medium tracking-widest uppercase">
              Rendimiento Profesional
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-none tracking-tight mb-8">
            <span className="text-gray-900 font-extralight">Equipamiento de </span>
            <span className="text-gray-900 font-semibold">Élite PRO</span>
          </h2>
          
          <div className="space-y-1 mb-10">
            <div className="h-px w-20 bg-lime-500"></div>
            <div className="h-px w-16 bg-gray-300"></div>
          </div>
          
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed font-light">
            Cada producto está diseñado para llevar tus límites al máximo,
            respaldado por <span className="text-gray-900 font-normal">tecnología de rendimiento</span> y atletas de élite.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isVisible={isVisible[`service-${index}`]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;