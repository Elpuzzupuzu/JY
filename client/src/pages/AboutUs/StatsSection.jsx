import React from 'react';
import StatCard from './StatCard';

const StatsSection = ({ stats, getAnimationClass }) => (
    <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
            {/* Header minimalista */}
            <div className="mb-20">
                <div className="space-y-1 mb-6">
                    <span className="text-lime-500 text-xs font-medium tracking-widest uppercase">
                        Resultados Comprobados
                    </span>
                </div>

                <h2 className="text-5xl md:text-6xl font-light leading-none tracking-tight">
                    <span className="text-gray-900 font-extralight">Nuestros </span>
                    <span className="text-gray-900 font-semibold">Récords</span>
                </h2>

                <div className="space-y-1 mt-6">
                    <div className="h-px w-20 bg-lime-500"></div>
                    <div className="h-px w-16 bg-gray-300"></div>
                </div>
            </div>

            {/* Stats Grid */}
            <div 
                className={`grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 ${getAnimationClass('stats', 'scale-in')}`}
                data-animate
                id="stats"
            >
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>
        </div>
    </section>
);

export default StatsSection;