import React from 'react';
import { Facebook, Instagram, Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/share/1B48PDtHZD/' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'TikTok', icon: Zap, url: '#' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2A1A] text-white relative overflow-hidden"> {/* Fondo verde oscuro */}
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#4CAF50] rounded-full blur-3xl opacity-70"></div> {/* Verde claro vibrante */}
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#FFD700] rounded-full blur-3xl opacity-70"></div> {/* Acento dorado/amarillo */}
      </div>
      
      {/* Detalle visual: Líneas diagonales sutiles en el fondo */}
      <div className="absolute inset-0 z-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 10px)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8"> {/* Aumentado el padding vertical para más espacio */}
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8"> {/* Aumentado el gap */}
          
          {/* Logo/Branding Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h2 className="text-4xl font-extrabold text-[#4CAF50] mb-3 tracking-tight drop-shadow-md"> {/* Logo verde vibrante con sombra */}
                JY <span className="text-white">esports</span>
              </h2>
              <p className="text-slate-200 text-base leading-relaxed"> {/* Texto ligeramente más grande */}
                ¡Tu equipamiento deportivo y gaming de alto rendimiento! Viste la pasión, gana el juego.
              </p>
            </div>
          </div>

          {/* Sección de Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white relative"> {/* Títulos más grandes y bold */}
              Contáctanos
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#4CAF50]"></div> {/* Subrayado verde vibrante */}
            </h3>
            <div className="space-y-4"> {/* Aumentado el espacio entre elementos */}
              <div className="flex items-start space-x-3 group">
                <MapPin size={20} className="text-[#4CAF50] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" /> {/* Icono verde */}
                <p className="text-slate-200 text-base group-hover:text-white transition-colors">
                  Avenida del Deporte #45, Colonia Campeones<br />Ciudad de México, México C.P. 01020
                </p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail size={20} className="text-[#4CAF50] flex-shrink-0 group-hover:scale-110 transition-transform" /> {/* Icono verde */}
                <p className="text-slate-200 text-base group-hover:text-white transition-colors">
                  soporte@jyesports.mx
                </p>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone size={20} className="text-[#4CAF50] flex-shrink-0 group-hover:scale-110 transition-transform" /> {/* Icono verde */}
                <p className="text-slate-200 text-base group-hover:text-white transition-colors">
                  +52 55 1234 5678 (L-V: 9am - 6pm)
                </p>
              </div>
            </div>
          </div>

          {/* Enlaces de Navegación */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white relative">
              Tienda y Ayuda
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#4CAF50]"></div> {/* Subrayado verde vibrante */}
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Camisetas y Jerseys', link: '#' },
                { name: 'Accesorios Gaming', link: '#' },
                { name: 'Guía de Tallas', link: '#' },
                { name: 'Rastrear mi Pedido', link: '#' },
                { name: 'Devoluciones y Cambios', link: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.link} 
                    className="text-slate-200 text-base hover:text-[#4CAF50] hover:translate-x-1 transition-all duration-300 inline-block group"
                  >
                    <span className="border-b border-transparent group-hover:border-[#FFD700] transition-colors"> {/* Borde al pasar el mouse dorado */}
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-white relative">
              Síguenos
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#4CAF50]"></div> {/* Subrayado verde vibrante */}
            </h3>
            <div className="flex space-x-4 mb-5"> {/* Aumentado el espacio entre íconos */}
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#4CAF50] hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-[#4CAF50]/40 backdrop-blur-sm border border-white/20"
                  aria-label={`Enlace a ${link.name}`}
                >
                  <link.icon size={22} /> {/* Íconos ligeramente más grandes */}
                </a>
              ))}
            </div>
            <p className="text-slate-300 text-sm">
              Únete a la comunidad #JYesports. Descuentos, noticias y más.
            </p>
            <div className='mt-6'> {/* Más espacio */}
                <h4 className='text-base font-semibold mb-3 text-white'>Métodos de Pago Seguros</h4> {/* Título de pagos más prominent */}
                <p className='text-slate-300 text-sm'>Aceptamos: Visa, Mastercard, American Express, PayPal, Oxxo Pay y Transferencia SPEI.</p> {/* Más detalles de pago */}
            </div>
          </div>
        </div>

        {/* Línea divisoria con gradiente */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4CAF50] to-transparent mb-6"></div> {/* Línea divisoria verde */}
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-300 text-sm">
            &copy; {currentYear} JY <span className="text-[#4CAF50]">esports</span>. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm text-slate-300"> {/* Enlaces ligeramente más grandes y espaciados */}
            <a href="#" className="hover:text-[#4CAF50] transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-[#4CAF50] transition-colors">Términos de Compra</a>
            <a href="#" className="hover:text-[#4CAF50] transition-colors">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;