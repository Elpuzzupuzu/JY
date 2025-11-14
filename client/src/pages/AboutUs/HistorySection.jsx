import React from 'react';
import HistoryItemCard from './HistoryItemCard';

const HistorySection = ({ historyItems, getAnimationClass, UsersIcon }) => (
    <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
            {/* Header minimalista */}
            <div 
                className={`mb-24 ${getAnimationClass('history')}`}
                data-animate
                id="history"
            >
                <div className="space-y-1 mb-8">
                    <span className="text-lime-500 text-xs font-medium tracking-widest uppercase">
                        Nuestra Historia
                    </span>
                </div>

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-none tracking-tight mb-8">
                    <span className="text-gray-900 font-semibold">Nuestra </span>
                    <span className="text-gray-900 font-extralight">Trayectoria</span>
                </h2>

                <div className="space-y-1 mb-10">
                    <div className="h-px w-20 bg-lime-500"></div>
                    <div className="h-px w-16 bg-gray-300"></div>
                </div>

                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed font-light">
                    Forjamos la excelencia con pasión. Conoce los{' '}
                    <span className="text-gray-900 font-normal">hitos que nos han llevado</span> al liderazgo en el deporte.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                
                {/* Columna de Items de Historia */}
                <div className="space-y-12">
                    {historyItems.map((item, index) => (
                        <HistoryItemCard 
                            key={index} 
                            {...item} 
                            animationClass={getAnimationClass(`history-${index}`)}
                            id={`history-${index}`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        />
                    ))}
                </div>
                
                {/* Columna de Cards de Equipo */}
                <div className="space-y-12 lg:sticky lg:top-8"> 
                    
                    {/* Card de Equipo Fundador */}
                    <div 
                        className={`bg-gray-50 p-10 group ${getAnimationClass('images', 'scale-in')}`}
                        data-animate
                        id="images"
                    >
                        {/* Icono minimalista */}
                        <div className="w-16 h-16 mx-auto border border-gray-200 flex items-center justify-center mb-8 
                                        group-hover:border-lime-500 transition-all duration-500">
                            <UsersIcon className="w-8 h-8 text-lime-500" />
                        </div>
                        
                        <h4 className="text-xl font-medium text-gray-900 mb-3 text-center">
                            Visión de Liderazgo
                        </h4>
                        
                        <p className="text-gray-600 font-light text-center leading-relaxed">
                            Fundado por atletas, impulsado por la innovación y la victoria.
                        </p>
                    </div>
                    
                    {/* Card de Equipo Actual */}
                    <div className="bg-gray-50 p-10 group">
                        {/* Icono minimalista */}
                        <div className="w-16 h-16 mx-auto border border-gray-200 flex items-center justify-center mb-8 
                                        group-hover:border-lime-500 transition-all duration-500">
                            <UsersIcon className="w-8 h-8 text-lime-500" />
                        </div>
                        
                        <h4 className="text-xl font-medium text-gray-900 mb-3 text-center">
                            Nuestro Team de Campeones
                        </h4>
                        
                        <p className="text-gray-600 font-light text-center leading-relaxed">
                            Especialistas comprometidos a llevarte al siguiente nivel deportivo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HistorySection;