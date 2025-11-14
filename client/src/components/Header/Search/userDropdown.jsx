import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { LogIn, User, Power, Truck, UserPlus, Heart, Settings } from "lucide-react";

// =========================================================
// FUNCIÓN AUXILIAR: OBTENER INICIALES
// =========================================================
const getInitials = (name) => {
  if (!name) return "??";
  const parts = name.trim().split(/\s+/);
  let initials = "";

  if (parts.length > 0) initials += parts[0].charAt(0).toUpperCase();
  if (parts.length > 1) initials += parts[1].charAt(0).toUpperCase();
  else if (initials.length === 1 && name.length > 1)
    initials += name.charAt(1).toUpperCase();

  return initials.substring(0, 2);
};

// =========================================================
// COMPONENTE PRINCIPAL
// =========================================================
const UserDropdown = ({
  userName: reduxUserName,
  isLoggedIn: reduxLoggedIn,
  onLogout,
  rol,
  profilePicture: reduxProfilePicture,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const userName = reduxUserName || "Atleta";
  const profilePicture = reduxProfilePicture;
  const isLoggedIn = reduxLoggedIn;

  const userInitials = useMemo(() => getInitials(userName), [userName]);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const handleLogout = () => {
    onLogout();
    setIsOpen(false);
  };
  const handleLinkClick = () => setIsOpen(false);

  // =========================================================
  // CONTENIDO DEL BOTÓN (Trigger)
  // =========================================================
  const TriggerContent = () => (
    <div className="flex items-center space-x-2">
      {isLoggedIn && (
        <>
          {profilePicture ? (
            <img
              src={profilePicture}
              alt={`${userName}'s profile`}
              className="w-8 h-8 rounded-full object-cover border-2 border-green-500 shadow-lg"
              onError={(e) => {
                console.error("Error cargando imagen de perfil:", profilePicture);
                e.target.style.display = "none";
              }}
            />
          ) : (
            <div className="w-8 h-8 flex items-center justify-center bg-green-600 text-white font-bold text-sm rounded-full shadow-lg">
              {userInitials}
            </div>
          )}
        </>
      )}
      <div className="flex flex-col leading-none">
        <span className="text-xs text-gray-400 font-medium group-hover:text-green-400 transition-colors">
          Hola, {isLoggedIn ? userName.split(" ")[0] : "visitante"}
        </span>
        <span className="text-sm font-bold text-white whitespace-nowrap">
          {isLoggedIn ? "Tu Cuenta" : "Identifícate"}
        </span>
      </div>
    </div>
  );

  // =========================================================
  // RENDER PRINCIPAL
  // =========================================================
  return (
    <div
      className="relative flex items-center h-full group transition-all"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger del Dropdown */}
      <div
        className={`px-4 py-2 rounded-lg transition-all cursor-pointer border flex items-center gap-3 ${
          isOpen
            ? "bg-white/5 border-green-500/30"
            : "border border-transparent hover:border-green-500/30 hover:bg-white/5"
        }`}
      >
        <TriggerContent />
      </div>

      {isOpen && (
        <div
          className={`absolute top-[calc(100%-5px)] right-0 bg-gray-800 shadow-2xl border border-gray-700 p-4 z-40 transform origin-top-right ${
            isLoggedIn ? "w-[450px] rounded-xl" : "w-[400px] rounded-lg"
          }`}
        >
          {/* Flecha decorativa */}
          <div
            className={`absolute -top-3 right-6 w-4 h-4 bg-gray-800 transform rotate-45 border-t border-l border-gray-700 ${
              isLoggedIn ? "right-12" : "right-8"
            }`}
          ></div>

          {!isLoggedIn ? (
            // ===============================
            // BLOQUE: USUARIOS NO LOGUEADOS
            // ===============================
            <div className="flex flex-col items-center p-2">
              <p className="text-sm text-gray-400 mb-3 text-center">
                Accede o regístrate para una mejor experiencia.
              </p>

              <Link
                to="/login"
                onClick={handleLinkClick}
                className="w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2 border border-green-500"
              >
                <LogIn size={20} /> Iniciar Sesión
              </Link>

              <Link
                to="/register"
                onClick={handleLinkClick}
                className="w-full text-center mt-3 text-sm text-green-400 hover:text-green-300 flex items-center justify-center gap-1 font-medium"
              >
                <UserPlus size={16} /> Crear una cuenta
              </Link>
            </div>
          ) : (
            // ===============================
            // BLOQUE: USUARIOS LOGUEADOS
            // ===============================
            <>
              <h3 className="text-lg font-extrabold text-white mb-4 border-b border-gray-700 pb-2">
                ¡Bienvenido, {userName.split(" ")[0]}!
              </h3>

              <div className="flex justify-between gap-8">
                {/* Panel Izquierdo */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-green-400 mb-2 text-sm uppercase tracking-wider">
                    Tu Cuenta
                  </h4>
                  <ul className="space-y-2">
                    <LinkItem to="/mi-cuenta" onClick={handleLinkClick} Icon={User}>
                      Mi Perfil
                    </LinkItem>
                    <LinkItem to="/listas/crear" onClick={handleLinkClick} Icon={Heart}>
                      Mi Wishlist
                    </LinkItem>
                  </ul>
                </div>

                {/* Divisor */}
                <div className="w-px bg-gray-700"></div>

                {/* Panel Derecho */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-green-400 mb-2 text-sm uppercase tracking-wider">
                    Pedidos y Acciones
                  </h4>
                  <ul className="space-y-2">
                    <LinkItem to="/pedidos" onClick={handleLinkClick} Icon={Truck}>
                      Historial de Pedidos
                    </LinkItem>
                    <li className="text-sm pt-2 border-t border-gray-700 mt-2">
                      <button
                        onClick={handleLogout}
                        className="text-red-500 hover:text-red-400 transition-colors flex items-center gap-3 py-1 w-full text-left font-medium hover:bg-gray-700 rounded-md px-2 -mx-2"
                      >
                        <Power size={18} className="text-red-500" />
                        Cerrar Sesión
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

// =========================================================
// COMPONENTE AUXILIAR: LINK ITEM
// =========================================================
const LinkItem = ({ to, onClick, Icon, children }) => (
  <li className="text-sm group">
    <Link
      to={to}
      onClick={onClick}
      className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-3 py-1 font-medium hover:bg-gray-700 rounded-md px-2 -mx-2"
    >
      <Icon
        size={18}
        className="text-gray-500 group-hover:text-green-500 transition-colors"
      />
      {children}
    </Link>
  </li>
);

export default UserDropdown;
