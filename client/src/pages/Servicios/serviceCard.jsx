import { CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service, isVisible, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/servicios/${service.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`group bg-white p-10 border border-gray-200 hover:border-gray-900 
                  transition-all duration-500 animate-scale-in ${
        isVisible ? "visible" : ""
      }`}
      data-animate
      id={`service-${index}`}
      style={{ animationDelay: `${index * 0.1}s`, cursor: "pointer" }}
    >
      {/* Icono minimalista */}
      <div
        className={`w-14 h-14 border border-gray-200 flex items-center justify-center mb-8 
                    group-hover:border-lime-500 transition-all duration-500`}
      >
        <service.icon className="w-6 h-6 text-lime-500" />
      </div>

      {/* Título limpio */}
      <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">
        {service.title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 leading-relaxed mb-8 font-light">
        {service.description}
      </p>

      {/* Items con checks minimalistas */}
      <ul className="space-y-3 mb-10 pb-10 border-b border-gray-100">
        {service.items.map((item, idx) => (
          <li key={idx} className="flex items-start text-sm text-gray-700 font-light">
            <CheckCircle className="w-4 h-4 text-lime-500 mr-3 flex-shrink-0 mt-0.5" />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      {/* CTA minimalista */}
      {/* <div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-lime-500 transition-colors duration-300">
        <span className="mr-2 tracking-wide">Ver Productos</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </div> */}
    </div>
  );
};

export default ServiceCard;