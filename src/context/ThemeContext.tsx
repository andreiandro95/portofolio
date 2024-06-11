"use client"

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
  }

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }:{ children: React.ReactNode}){
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            const storageTheme = localStorage.getItem('theme');
            return storageTheme ? storageTheme : 'light';
        }
        return 'light';
    })

    function toggleTheme(){
        setTheme(prevVal => prevVal === "light" ? "dark" : "light")
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.className = theme; 
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext(){
    return useContext(ThemeContext)
}