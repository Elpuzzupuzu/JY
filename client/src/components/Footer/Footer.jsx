import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200"> 
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Información de la Compañía */}
          <div className="space-y-6">
            <h3 className="text-gray-900 text-lg font-medium mb-6">Acerca de Nosotros</h3>
            
            {/* Línea decorativa */}
            <div className="h-px w-12 bg-lime-500 mb-6"></div>
            
            <p className="text-gray-600 font-light leading-relaxed">
              Tu destino para equipamiento deportivo y ropa de alto rendimiento. 
              <span className="text-gray-900 font-normal"> Impulsa tu potencial</span> con la mejor selección y calidad.
            </p>
            
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center
                                   hover:border-lime-500 transition-all duration-500 group">
                <Facebook className="w-5 h-5 text-gray-600 group-hover:text-lime-500 transition-colors duration-500" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center
                                   hover:border-lime-500 transition-all duration-500 group">
                <Instagram className="w-5 h-5 text-gray-600 group-hover:text-lime-500 transition-colors duration-500" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center
                                   hover:border-lime-500 transition-all duration-500 group">
                <Twitter className="w-5 h-5 text-gray-600 group-hover:text-lime-500 transition-colors duration-500" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-200 flex items-center justify-center
                                   hover:border-lime-500 transition-all duration-500 group">
                <Youtube className="w-5 h-5 text-gray-600 group-hover:text-lime-500 transition-colors duration-500" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-gray-900 text-lg font-medium mb-6">Enlaces Rápidos</h3>
            
            {/* Línea decorativa */}
            <div className="h-px w-12 bg-lime-500 mb-6"></div>
            
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 font-light hover:text-gray-900 transition-colors duration-300">
                  Tienda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-light hover:text-gray-900 transition-colors duration-300">
                  Entrenamiento
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-light hover:text-gray-900 transition-colors duration-300">
                  Marcas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-light hover:text-gray-900 transition-colors duration-300">
                  Nuevos Lanzamientos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-light hover:text-gray-900 transition-colors duration-300">
                  Ofertas Especiales
                </a>
              </li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="text-gray-900 text-lg font-medium mb-6">Contáctanos</h3>
            
            {/* Línea decorativa */}
            <div className="h-px w-12 bg-lime-500 mb-6"></div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 font-light text-sm">+1 234 567 890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 font-light text-sm">contacto@sportgear.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 font-light text-sm">Calle del Deporte #456, Cdad. Central</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 font-light text-sm">Lun - Sáb: 8:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Boletín */}
          <div>
            <h3 className="text-gray-900 text-lg font-medium mb-6">Boletín de Atletas</h3>
            
            {/* Línea decorativa */}
            <div className="h-px w-12 bg-lime-500 mb-6"></div>
            
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
              Sé el primero en saber de nuevas colecciones y descuentos exclusivos.
            </p>
            
            <form className="space-y-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full bg-white border border-gray-200 px-4 py-3 
                         focus:outline-none focus:border-lime-500 transition-colors duration-300
                         text-sm font-light"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 border border-gray-900 text-gray-900 font-light text-sm
                         hover:bg-gray-900 hover:text-white transition-all duration-500
                         tracking-wide"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500 font-light">
              © 2024 SportGear. Todos los derechos reservados.
            </p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-500 font-light hover:text-gray-900 transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-500 font-light hover:text-gray-900 transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-500 font-light hover:text-gray-900 transition-colors duration-300">
                Política de Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;