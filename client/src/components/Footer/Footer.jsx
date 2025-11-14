import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react'

function Footer() {
  // Color Base: Verde Oscuro (green-800)
  // Color de Acento: Verde Lima (lime-400)
  return (
    <footer className="bg-green-800 text-gray-200"> 
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la Compañía (Company Info) */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold mb-4">Acerca de Nosotros 🌿</h3>
            <p className="text-gray-400">Tu destino para **equipamiento deportivo y ropa de alto rendimiento**. Impulsa tu potencial con la mejor selección y calidad.</p>
            <div className="flex space-x-4">
              {/* Iconos hover:text-lime-400 */}
              <a href="#" className="hover:text-lime-400 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-lime-400 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-lime-400 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-lime-400 transition-colors duration-300">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos (Quick Links) */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Enlaces Rápidos ⚡</h3>
            <ul className="space-y-2">
              <li>
                {/* Enlaces hover:text-lime-400 */}
                <a href="#" className="hover:text-lime-400 transition-colors duration-300">Tienda</a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors duration-300">Entrenamiento</a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors duration-300">Marcas</a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors duration-300">Nuevos Lanzamientos</a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-400 transition-colors duration-300">Ofertas Especiales</a>
              </li>
            </ul>
          </div>

          {/* Información de Contacto (Contact Info) */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Contáctanos 📞</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                {/* Iconos text-lime-400 */}
                <Phone className="w-5 h-5 text-lime-400" />
                <span>+1 234 567 890 (Soporte)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-lime-400" />
                <span>contacto@sportgear.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-lime-400" />
                <span>Calle del Deporte #456, Cdad. Central</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-lime-400" />
                <span>Lun - Sáb: 8:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Boletín (Newsletter) */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Boletín de Atletas 📧</h3>
            <p className="text-gray-400 mb-4">Sé el primero en saber de **nuevas colecciones y descuentos exclusivos** para tu próximo entrenamiento.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Ingresa tu email"
                // Fondo del input ajustado al tema verde, focus ring lime-400
                className="bg-green-900 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
              <button
                type="submit"
                // Botón con bg-lime-400 y texto negro
                className="bg-lime-400 text-black font-semibold px-4 py-2 rounded hover:bg-lime-500 transition-colors duration-300"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Barra Inferior (Bottom Bar) */}
      <div className="border-t border-green-700"> {/* Borde ajustado al tema verde */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">© 2024 **SportGear**. Todos los derechos reservados.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-lime-400 transition-colors duration-300">Política de Privacidad</a>
              <a href="#" className="hover:text-lime-400 transition-colors duration-300">Términos y Condiciones</a>
              <a href="#" className="hover:text-lime-400 transition-colors duration-300">Política de Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer;