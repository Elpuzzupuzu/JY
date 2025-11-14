import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Package,
  Settings,
  Users,
  Phone,
  LogIn,
  LogOut,
  User,
  LayoutDashboard,
  ListChecks,
  FileText,
  Handshake,
} from 'lucide-react';

// =========================================================
// 1. DEFINICIÓN DE RUTAS POR ROL
// =========================================================

// Rutas generales que siempre deberían mostrarse
const COMMON_NAV_ITEMS = [
  { path: '/', label: 'Inicio', icon: Home },
  { path: '/productos', label: 'Productos', icon: Package },
  { path: '/servicios', label: 'Servicios', icon: Settings },
  { path: '/acerca-de-nosotros', label: 'Nosotros', icon: Users },
  { path: '/contacto', label: 'Contacto', icon: Phone },
  { path: '/catalogo-pdfs', label: 'Catálogos', icon: FileText },
];

// Rutas específicas para usuarios autenticados (no admin)
const USER_NAV_ITEMS = [
  { path: '/cotizaciones', label: 'Cotizaciones', icon: Handshake },
];

// Rutas específicas para un usuario Administrador (Admin)
const ADMIN_NAV_ITEMS = [
  { path: '/admin/products', label: 'Admin Productos', icon: LayoutDashboard },
  { path: '/admin/quotations', label: 'Gestionar Cotizaciones', icon: ListChecks },
  { path: '/admin/manage', label: 'Administración General', icon: Settings },
];

// =========================================================
// 2. COMPONENTE NAVIGATION
// =========================================================

const Navigation = ({
  isMobile = false,
  onLinkClick,
  isLoggedIn = false,
  onLogout,
  rol,
}) => {
  const commonClasses = 'font-medium transition-all duration-300 relative group';
  const desktopClasses = 'text-gray-900 hover:text-green-600 whitespace-nowrap';

  const primaryColor = 'text-green-600';
  const secondaryColor = 'text-green-500';
  const activeBg = 'bg-green-600/10';

  let allNavItems = [...COMMON_NAV_ITEMS];
  if (isLoggedIn) allNavItems = [...allNavItems, ...USER_NAV_ITEMS];
  if (rol === 'admin') allNavItems = [...allNavItems, ...ADMIN_NAV_ITEMS];

  // ---------------------------------------------------------
  // VISTA MÓVIL
  // ---------------------------------------------------------
  if (isMobile) {
    return (
      <nav className="flex flex-col space-y-2">
        {allNavItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                isActive
                  ? `${activeBg} text-green-600 font-bold border border-green-600/30`
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`
            }
          >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
          </NavLink>
        ))}

        <div className="border-t border-gray-200 my-4" />

        {isLoggedIn ? (
          <>
            <NavLink
              to="/mi-cuenta"
              onClick={onLinkClick}
              className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              <User size={20} className="text-blue-600" />
              <span className="font-medium">Mi Cuenta</span>
            </NavLink>

            <button
              onClick={() => {
                onLogout();
                onLinkClick();
              }}
              className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-red-600 hover:bg-red-500/10 hover:text-red-700 font-bold"
            >
              <LogOut size={20} />
              <span className="font-medium">Cerrar Sesión</span>
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            onClick={onLinkClick}
            className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            <LogIn size={20} className="text-gray-500" />
            <span className="font-medium">Iniciar Sesión</span>
          </NavLink>
        )}
      </nav>
    );
  }

  // ---------------------------------------------------------
  // VISTA ESCRITORIO
  // ---------------------------------------------------------
  return (
    <nav className="hidden lg:flex items-center space-x-6 py-2">
      {COMMON_NAV_ITEMS.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `${commonClasses} text-gray-700 hover:text-green-600 ${
              isActive ? 'text-green-600 font-bold' : ''
            }`
          }
        >
          {label}
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-600 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
        </NavLink>
      ))}

      {isLoggedIn &&
        rol !== 'admin' &&
        USER_NAV_ITEMS.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `${commonClasses} text-blue-600 hover:text-blue-700 ${
                isActive ? 'font-bold' : ''
              }`
            }
          >
            {label}
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </NavLink>
        ))}

      {rol === 'admin' && (
        <>
          <span className="text-gray-400">|</span>
          {ADMIN_NAV_ITEMS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${commonClasses} font-bold text-orange-500 hover:text-orange-600 ${
                  isActive ? 'border-b-2 border-orange-500' : ''
                }`
              }
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </NavLink>
          ))}
        </>
      )}
    </nav>
  );
};

export default Navigation;
