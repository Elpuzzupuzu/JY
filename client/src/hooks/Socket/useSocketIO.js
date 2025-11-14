
// client/src/hooks/useSocketIO.js

import { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const SOCKET_SERVER_URL = 'https://flucsa-backend.onrender.com';

/**
 * Hook personalizado para manejar la conexión y los eventos de Socket.IO.
 * 🚨 IMPORTANTE: Se han añadido opciones de reconexión para mejorar la estabilidad en redes deficientes.
 */
export const useSocketIO = (eventName, handler, shouldConnect = true) => {
    const socketRef = useRef(null);

    useEffect(() => {
        if (!shouldConnect) {
            if (socketRef.current) {
                socketRef.current.disconnect();
                socketRef.current = null;
            }
            return;
        }

        if (!socketRef.current) {
            // ⭐ CAMBIO CRÍTICO: CONFIGURACIÓN DE ESTABILIDAD ⭐
            socketRef.current = io(SOCKET_SERVER_URL, {
                // Si usas cookies o JWT para autenticar el socket, se añadiría aquí
                withCredentials: true,
                
                // --- Opciones de Estabilidad ---
                // 1. Aumentar el tiempo de espera para que el servidor responda al ping.
                // Lo elevamos de 20s (default) a 30s.
                pingTimeout: 30000, 
                
                // 2. Reducir el tiempo entre pings para detectar fallos más rápido 
                // y mantener la conexión 'viva' ante proxies/firewalls.
                // Lo bajamos de 25s (default) a 15s.
                pingInterval: 15000, 
                
                // 3. Aumentar el tiempo de espera inicial de conexión (de 20s a 30s)
                timeout: 30000, 
                
                // 4. Aumentar los intentos de reconexión
                reconnectionAttempts: 30, 
                
            });

            socketRef.current.on('connect', () => {
                console.log(`📡 Cliente Socket.IO conectado con ID: ${socketRef.current.id}`);
            });
            
            // 🚨 Añadir logging de la razón de desconexión para debugging
            socketRef.current.on('disconnect', (reason) => {
                console.log(`❌ Cliente Socket.IO desconectado. Razón: ${reason}`);
            });

            socketRef.current.on('reconnect', (attemptNumber) => {
                console.log(`✅ Cliente Socket.IO reconectado tras ${attemptNumber} intentos.`);
            });
        }

        if (eventName && handler) {
            socketRef.current.on(eventName, handler);
        }

        return () => {
            if (socketRef.current && eventName && handler) {
                socketRef.current.off(eventName, handler);
            }
        };
    }, [eventName, handler, shouldConnect]); 
    
    return socketRef.current;
};