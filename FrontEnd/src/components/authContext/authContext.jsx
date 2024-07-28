import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(()=>{
        const getCookie = (name) =>{
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        const cookieData = getCookie('miCookie');
        console.log('Cookie data:', cookieData); 
        
        if (cookieData) {
            try {
                const userData = JSON.parse(decodeURIComponent(cookieData))
                console.log('USER DATA', userData);
                setIsAuthenticated(userData.auth);
                
            } catch (error) {
                console.error('Error parsing cookie data:', error);
            }
        }
    }, [])

    return(
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext)