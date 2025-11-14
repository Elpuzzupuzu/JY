import { useParams, useNavigate } from "react-router-dom";
import { services } from "../Servicios/serviceData";
import { ArrowLeft, Info, ShoppingCart } from "lucide-react"; // Añadimos ShoppingCart

const ServiceMenuPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const selectedCategory = services.find(
    (service) => service.id === category
  );

  // --- Manejo de Categoría No Encontrada (Error 404 Estilo Deportivo) ---
  if (!selectedCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="text-center p-10 bg-white rounded-2xl shadow-2xl max-w-md border-t-8 border-red-500">
          <div className="text-6xl mb-4">🚨</div>
          <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase">
            Equipamiento no disponible
          </h2>
          <p className="text-gray-600 mb-6 font-medium">
            La categoría de alto rendimiento que buscas no ha sido cargada.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition duration-300 font-bold shadow-lg transform hover:scale-105"
          >
            Regresar a las Categorías
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = selectedCategory.icon;
  // Usaremos Verde Deportivo si la categoría no tiene color (Fallback)
  const categoryColorClass = selectedCategory.color || "from-green-600 to-lime-500";
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de Alto Impacto */}
      <div className={`bg-gradient-to-r ${categoryColorClass} relative overflow-hidden shadow-2xl`}>
        {/* Patrón de fondo decorativo (Más técnico/geométrico) */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
          {/* Botón volver */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/90 hover:text-lime-300 mb-10 transition duration-200 group font-bold text-lg"
          >
            <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase">Volver a Categorías</span>
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Icono grande del servicio (como un emblema) */}
            <div className="bg-white/30 backdrop-blur-md p-6 rounded-full shadow-2xl border-4 border-white/50">
              <IconComponent className="text-white" size={64} strokeWidth={1.5} />
            </div>
            
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase">
                {selectedCategory.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/95 max-w-4xl font-light leading-snug">
                {selectedCategory.description}
              </p>
            </div>
          </div>
        </div>

        {/* Onda decorativa (Mantenemos la onda pero la hacemos más sutil) */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 30C240 10 480 10 720 30C960 50 1200 50 1440 30V60H0V30Z" fill="rgb(249 250 251)"/> {/* bg-gray-50 */}
          </svg>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {selectedCategory.items && selectedCategory.items.length > 0 ? (
          <>
            {/* Información de productos (Enfocada en el inventario) */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 pb-6 border-b-4 border-gray-200/50">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tight">
                  Equipamiento Disponible
                </h2>
                <p className="text-gray-600 text-lg font-medium">
                  {selectedCategory.items.length}{" "}
                  {selectedCategory.items.length === 1
                    ? "producto de alto rendimiento"
                    : "productos de alto rendimiento"}
                </p>
              </div>
              {/* Badge de Promoción / Calidad */}
              <div className={`mt-4 md:mt-0 flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${categoryColorClass} text-white font-bold shadow-xl transform hover:scale-105 transition-transform`}>
                <Info size={20} />
                <span className="uppercase">Calidad PRO Garantizada</span>
              </div>
            </div>

            {/* Grid de productos con énfasis en la compra */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedCategory.items.map((item, index) => (
                <div
                  key={index}
                  // Sombra verde en hover para impacto energético
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-green-500/50 transform hover:-translate-y-2"
                >
                  {/* Espacio para imagen / Banner */}
                  <div className={`relative h-56 bg-gradient-to-br ${categoryColorClass} overflow-hidden`}>
                    {/* Imagen dinámica o fallback al icono (Lógica mantenida) */}
                    {item.image ? (
                      <>
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 hidden items-center justify-center">
                          <IconComponent 
                            className="text-white/30" 
                            size={96} 
                            strokeWidth={1.5} 
                          />
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent 
                          className="text-white/30" 
                          size={96} 
                          strokeWidth={1.5} 
                        />
                      </div>
                    )}
                    
                    {/* Overlay decorativo y Badge de Precio/ID */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Badge de ID/Número de Producto */}
                    <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-gray-100">
                      <span className={`font-black text-xl bg-gradient-to-r ${categoryColorClass} bg-clip-text text-transparent`}>
                        ID{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Botón rápido de Carrito en Hover */}
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center 
                                      opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 shadow-lg">
                      <ShoppingCart className="text-gray-800" size={24} />
                    </div>
                  </div>
                  
                  {/* Contenido de la Card */}
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase">
                      {item.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-normal mb-4 text-sm">
                      {item.details}
                    </p>

                    {/* Botón de acción (Principal CTA) */}
                    <button className={`w-full py-3.5 px-4 bg-gradient-to-r ${categoryColorClass} text-white rounded-xl font-bold uppercase 
                                       transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg hover:shadow-xl`}>
                      Ver Detalles y Comprar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to action (CTA de Soporte/Contacto) */}
            <div className={`mt-20 bg-gradient-to-r from-gray-900 to-green-800 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
                  ¿Necesitas una <span className="text-lime-400">Ventaja Competitiva</span>?
                </h3>
                <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto font-light">
                  Nuestro equipo PRO está listo para ayudarte a equiparte para el más alto rendimiento.
                </p>
                <button className="bg-lime-400 text-gray-900 px-10 py-4 rounded-full font-black text-lg uppercase hover:bg-lime-300 transition duration-300 shadow-2xl hover:shadow-lime-400/50 transform hover:scale-105">
                  Habla con un Experto
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-2xl border-2 border-green-500/30">
            <div className="text-7xl mb-6">⚙️</div>
            <h3 className="text-3xl font-black text-gray-900 mb-3 uppercase">
              ¡Prepárate para la Nueva Ola!
            </h3>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              Estamos cargando el mejor equipamiento en esta categoría. Vuelve pronto para ver la diferencia en rendimiento.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceMenuPage;