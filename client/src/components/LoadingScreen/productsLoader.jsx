import ballImg from '../../assets/imgs/pelota.png'; // <-- tu imagen aquí

const productsLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 text-gray-600">

      {/* Imagen del balón girando */}
      <img 
        src={ballImg}
        alt="Loading ball"
        className="h-16 w-16 mb-4 animate-spin"
      />

      <p className="text-xl text-indigo-500 font-medium">
        Verificando sesión...
      </p>

      <div className="text-sm mt-2 text-gray-400">
        Cargando la configuración de la aplicación
      </div>
    </div>
  );
};

export default productsLoader;
