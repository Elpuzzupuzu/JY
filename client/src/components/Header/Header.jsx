import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  ShoppingCart,
  MapPin,
  Menu,
  Dumbbell,
  Truck,
  Heart,
} from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../features/user/usersSlice';

import Navigation from '../Navigation/Navigation';
import Search from './Search/Search';
import LogoCompleto from '../../assets/images/jy.jpg';
import UserDropdown from './Search/userDropdown';

const Header = ({ onCartToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartAnimating, setIsCartAnimating] = useState(false);
  const [previousCartCount, setPreviousCartCount] = useState(0);
  const [showAddedBadge, setShowAddedBadge] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const rol = useSelector((state) => state.user.user?.rol);
  const cartItems = useSelector((state) => state.cart.items);

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.cantidad, 0);
  const isLoggedIn = !!user;
  const userName =
    user?.name || user?.nombre || user?.correo || user?.email || 'Atleta';
  const userProfile = user?.foto_perfil;

  const handleLogout = () => dispatch(logoutUser());

  useEffect(() => {
    if (totalCartItems > previousCartCount) {
      setIsCartAnimating(true);
      setShowAddedBadge(true);

      setTimeout(() => setIsCartAnimating(false), 600);
      setTimeout(() => setShowAddedBadge(false), 1500);
    }
    setPreviousCartCount(totalCartItems);
  }, [totalCartItems, previousCartCount]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Header principal */}
      <header className="sticky top-0 bg-white shadow-md z-50 border-b border-gray-100 relative">
        {/* Efectos decorativos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-gray-300/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-[1500px] mx-auto px-4 py-3 flex items-center gap-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-gray-100/50 p-3 backdrop-blur-md border border-gray-200 transition-all duration-300 hover:border-green-500/50 hover:bg-gray-200/50 hover:scale-105 shadow-md">
                <img
                  src={LogoCompleto}
                  alt="FLUCSA Sports"
                  className="h-12 w-auto object-contain transition-all duration-500 group-hover:brightness-90 drop-shadow-sm"
                />
              </div>
            </Link>

            {/* Ubicación */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all cursor-pointer border border-transparent hover:border-green-500/30 group">
              <MapPin className="w-5 h-5 text-gray-500 group-hover:text-green-600 transition-colors" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-medium">Envío a</span>
                <span className="text-sm font-bold text-gray-900">
                  Mérida, Yucatán
                </span>
              </div>
            </div>

            {/* Buscador */}
            <div className="hidden md:flex flex-1 max-w-3xl">
              <div className="w-full bg-white rounded-xl shadow-inner border border-gray-200">
                <Search />
              </div>
            </div>

            {/* Sección derecha */}
            <div className="hidden lg:flex items-center gap-3">
              <UserDropdown
                userName={userName}
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
                rol={rol}
                profilePicture={userProfile}
              />

              {/* Pedidos */}
              <div className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-all cursor-pointer border border-transparent hover:border-green-500/30 group flex items-center gap-2">
                <Truck className="w-6 h-6 text-gray-500 group-hover:text-green-600 transition-colors stroke-[2]" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium group-hover:text-green-600 transition-colors">
                    Mis
                  </span>
                  <span className="text-sm font-bold text-gray-900">Pedidos</span>
                </div>
              </div>

              {/* Wishlist */}
              <div className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-all cursor-pointer border border-transparent hover:border-green-500/30 group flex items-center gap-2">
                <Heart className="w-6 h-6 text-gray-500 group-hover:text-red-600 transition-colors stroke-[2]" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 font-medium group-hover:text-red-600 transition-colors">
                    Mi
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    Wishlist
                  </span>
                </div>
              </div>

              {/* Carrito */}
              <button
                onClick={onCartToggle}
                className={`relative group px-4 py-2 rounded-lg hover:bg-gray-100 transition-all border flex items-center gap-3 ${
                  isCartAnimating
                    ? 'animate-bounce border-green-500 bg-green-500/10'
                    : 'border-transparent hover:border-green-500/30'
                }`}
              >
                {isCartAnimating && (
                  <div className="absolute inset-0 bg-green-400/20 rounded-lg animate-ping"></div>
                )}
                <div className="relative">
                  <ShoppingCart
                    className={`w-8 h-8 relative z-10 transition-all stroke-[2.5] ${
                      isCartAnimating ? 'text-green-600' : 'text-gray-900'
                    }`}
                  />
                  {totalCartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-br from-green-500 to-green-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg text-[11px] border-2 border-white">
                      {totalCartItems}
                    </span>
                  )}
                  {showAddedBadge && (
                    <span className="absolute -top-3 -right-3 bg-green-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce shadow-lg border-2 border-white">
                      +
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-500 font-medium group-hover:text-green-600 transition-colors">
                    Tu
                  </span>
                  <span className="text-sm font-bold text-gray-900">Carrito</span>
                </div>
              </button>
            </div>

            {/* Íconos móviles */}
            <div className="flex lg:hidden items-center gap-2 ml-auto">
              <button
                onClick={onCartToggle}
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-all border border-transparent hover:border-green-500/30"
              >
                <ShoppingCart className="w-6 h-6 text-gray-900 stroke-[2.5]" />
                {totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-br from-green-500 to-green-600 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg border-2 border-white">
                    {totalCartItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-all border border-transparent hover:border-green-500/30"
              >
                <Menu className="w-6 h-6 text-gray-900 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div className="hidden lg:block bg-gray-50 border-t border-green-500/30 relative">
          <div className="max-w-[1500px] mx-auto px-4">
            <Navigation rol={rol} isLoggedIn={isLoggedIn} />
          </div>
        </div>

        {/* Buscador móvil */}
        <div className="md:hidden bg-white px-4 pb-3 relative z-10 border-t border-gray-100">
          <div className="bg-white rounded-xl shadow-inner border border-gray-200">
            <Search />
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          <div className="absolute left-0 top-0 bottom-0 bg-white w-72 max-w-[85vw] shadow-2xl overflow-y-auto border-r border-gray-100 relative">
            <div className="absolute -top-20 -left-20 w-48 h-48 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="sticky top-0 bg-white p-4 flex items-center justify-between border-b border-green-500/20 z-10 shadow-sm relative">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-green-600" />
                <span className="text-gray-900 font-bold text-base">
                  Menú Deportivo
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 transition-all duration-200 active:scale-95 border border-gray-300"
              >
                <X size={24} strokeWidth={2.5} />
              </button>
            </div>

            <div className="p-5 relative z-10">
              <Navigation
                isMobile
                onLinkClick={() => setIsMenuOpen(false)}
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
                rol={rol}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
