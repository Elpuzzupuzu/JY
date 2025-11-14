import React from 'react';

const StatCard = ({ icon: Icon, number, label }) => (
    <div className="bg-white p-10 text-center group transition-all duration-500">
        
        {/* Contenedor del Icono minimalista */}
        <div className="w-14 h-14 mx-auto mb-6 border border-gray-200 flex items-center justify-center 
                        group-hover:border-lime-500 transition-all duration-500">
            <Icon className="w-6 h-6 text-lime-500" />
        </div>
        
        {/* Número limpio */}
        <div className="text-5xl md:text-6xl font-light text-gray-900 mb-3 tracking-tight">
            {number}
        </div>
        
        {/* Etiqueta minimalista */}
        <div className="text-sm text-gray-600 font-light tracking-wide">
            {label}
        </div>
    </div>
);

export default StatCard;