import React from 'react';
import { MapPin, Phone, Mail, Navigation, Clock } from 'lucide-react'; // Añadimos Clock para el horario

const Location = () => {
  // Información de contacto FICTICIA y relevante al sector deportivo
  const companyInfo = {
    address: 'Avenida del Campeón #101, Zona Deportiva Elite, 08001 Ciudad Victoria, MEX',
    phone: '+52 55 9876 5432', // Número de teléfono ficticio
    email: 'contacto@prodeporte.mx', // Email ficticio
    // URL de mapa ficticia para evitar errores, debería ser una URL real de Google Maps Embed
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15049.231206126605!2d-99.16782012173199!3d19.431086055890066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f606822b%3A0x6335352c3c6f4961!2sCampo%20de%20F%C3%BAtbol%20Aztl%C3%A1n!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx',
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header con acento verde */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            Contáctanos y Visítanos 🏅
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg">
            Estamos listos para equiparte. Encuéntranos en nuestra sede principal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Mapa */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 h-full shadow-lg">
              <iframe
                title="Ubicación de la sede ProDeporte"
                src={companyInfo.mapEmbedUrl}
                className="w-full h-96 lg:h-full min-h-96"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="order-1 lg:order-2 space-y-6 pt-2">
            
            {/* Dirección (Acento Azul) */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-blue-100 transition-colors">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-md font-extrabold text-gray-900 mb-1 uppercase tracking-wider">
                  Sede Principal
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {companyInfo.address}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100"></div>

            {/* Teléfono (Acento Verde) */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-green-100 transition-colors">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-md font-extrabold text-gray-900 mb-1 uppercase tracking-wider">
                  Línea Directa
                </h3>
                <a 
                  href={`tel:${companyInfo.phone}`} 
                  className="text-gray-700 font-medium hover:text-green-600 transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </div>

            <div className="border-t border-gray-100"></div>

            {/* Email (Acento Naranja/Dorado) */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-yellow-100 transition-colors">
                <Mail className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-md font-extrabold text-gray-900 mb-1 uppercase tracking-wider">
                  Correo Electrónico
                </h3>
                <a 
                  href={`mailto:${companyInfo.email}`} 
                  className="text-gray-700 font-medium hover:text-yellow-600 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>

            <div className="border-t border-gray-100"></div>


            {/* Horarios (Actualizado) */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-purple-100 transition-colors">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-md font-extrabold text-gray-900 mb-1 uppercase tracking-wider">
                  Horario de Tienda
                </h3>
                <p className="text-gray-700 font-medium">Lunes a Sábado: 9:00 AM - 7:00 PM</p>
              </div>
            </div>


            {/* Botón Cómo llegar (Ajustado para mejor diseño) */}
            <div className="pt-6">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyInfo.address)}&travelmode=driving`}
                target="_blank"
                rel="noopener noreferrer"
                // Estilo deportivo: Verde como acento, sombra
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/40 w-full"
              >
                <Navigation className="w-5 h-5" />
                <span>Planificar Ruta</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;