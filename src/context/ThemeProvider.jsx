import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Theme Context
const ThemeContext = createContext();

// Theme configuration with purprle-based glassy design
const themes = {
  light: {
    // Background colors
    background: {
      primary: 'rgba(248, 250, 252, 0.95)',
      secondary: 'rgba(241, 245, 249, 0.9)',
      tertiary: 'rgba(255, 255, 255, 0.8)',
      glass: 'rgba(255, 255, 255, 0.15)',
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)',
      overlay: 'rgba(0, 0, 0, 0.05)'
    },
    
    // Text colors
    text: {
      primary: '#1e293b',
      secondary: '#475569',
      accent: '#7c3aed',
      muted: '#64748b',
      inverse: '#ffffff'
    },
    
    // Purple color palette
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87'
    },
    
    // Glass effect properties
    glass: {
      background: 'rgba(255, 255, 255, 0.25)',
      backdrop: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      shadow: '0 8px 32px rgba(139, 92, 246, 0.15)',
      hover: 'rgba(255, 255, 255, 0.35)'
    },
    
    // Card styles
    card: {
      background: 'rgba(255, 255, 255, 0.4)',
      border: '1px solid rgba(139, 92, 246, 0.2)',
      shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      hover: '0 25px 50px -12px rgba(139, 92, 246, 0.25)'
    },
    
    // Button styles
    button: {
      primary: {
        background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
        text: '#ffffff',
        shadow: '0 10px 25px rgba(168, 85, 247, 0.3)',
        hover: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)'
      },
      secondary: {
        background: 'rgba(168, 85, 247, 0.1)',
        text: '#7c3aed',
        border: '1px solid rgba(168, 85, 247, 0.3)',
        hover: 'rgba(168, 85, 247, 0.2)'
      }
    },
    
    // Navigation
    nav: {
      background: 'rgba(255, 255, 255, 0.8)',
      backdrop: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    }
  },
  
  dark: {
    // Background colors
    background: {
      primary: 'rgba(15, 23, 42, 0.95)',
      secondary: 'rgba(30, 41, 59, 0.9)',
      tertiary: 'rgba(51, 65, 85, 0.8)',
      glass: 'rgba(255, 255, 255, 0.05)',
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(168, 85, 247, 0.1) 100%)',
      overlay: 'rgba(255, 255, 255, 0.05)'
    },
    
    // Text colors
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
      accent: '#c084fc',
      muted: '#94a3b8',
      inverse: '#1e293b'
    },
    
    // Purple color palette
    purple: {
      50: '#581c87',
      100: '#6b21a8',
      200: '#7c3aed',
      300: '#9333ea',
      400: '#a855f7',
      500: '#c084fc',
      600: '#d8b4fe',
      700: '#e9d5ff',
      800: '#f3e8ff',
      900: '#faf5ff'
    },
    
    // Glass effect properties
    glass: {
      background: 'rgba(255, 255, 255, 0.08)',
      backdrop: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      shadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      hover: 'rgba(255, 255, 255, 0.12)'
    },
    
    // Card styles
    card: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(168, 85, 247, 0.3)',
      shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
      hover: '0 25px 50px -12px rgba(168, 85, 247, 0.4)'
    },
    
    // Button styles
    button: {
      primary: {
        background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)',
        text: '#1e293b',
        shadow: '0 10px 25px rgba(192, 132, 252, 0.3)',
        hover: 'linear-gradient(135deg, #d8b4fe 0%, #c084fc 100%)'
      },
      secondary: {
        background: 'rgba(192, 132, 252, 0.1)',
        text: '#c084fc',
        border: '1px solid rgba(192, 132, 252, 0.3)',
        hover: 'rgba(192, 132, 252, 0.2)'
      }
    },
    
    // Navigation
    nav: {
      background: 'rgba(30, 41, 59, 0.8)',
      backdrop: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }
  }
};

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // Load theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    
    // Update document class for global styles
    document.body.className = isDark ? 'dark-mode' : 'light-mode';
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const currentTheme = isDark ? themes.dark : themes.light;

  const value = {
    isDark,
    theme: currentTheme,
    toggleTheme,
    themes
  };

  const containerStyle = {
    minHeight: '100vh',
    background: currentTheme.background.primary,
    color: currentTheme.text.primary,
    transition: 'all 0.5s ease-in-out',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  };

  return (
    <ThemeContext.Provider value={value}>
      <div style={containerStyle}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Example component showcasing the theme


