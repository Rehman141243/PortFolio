import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeProvider'; // Import from your theme context file

const ThemeToggle = ({ 
  size = 'md', 
  showLabel = false, 
  style = 'glass' // 'glass', 'solid', 'minimal'
}) => {
  const { isDark, toggleTheme, theme } = useTheme();

  // Size configurations
  const sizes = {
    sm: { width: '2rem', height: '2rem', iconSize: 16 },
    md: { width: '3rem', height: '3rem', iconSize: 20 },
    lg: { width: '4rem', height: '4rem', iconSize: 24 }
  };

  const currentSize = sizes[size];

  // Base button styles
  const baseButtonStyles = {
    width: currentSize.width,
    height: currentSize.height,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor:'none',
    border: 'none',
    position: 'relative',
    transition: 'all 0.5s ease-in-out',
    outline: 'none'
  };

  // Style variants
  const getButtonStyles = () => {
    switch (style) {
      case 'glass':
        return {
          ...baseButtonStyles,
          background: theme.glass.background,
          backdropFilter: theme.glass.backdrop,
          border: theme.glass.border,
          boxShadow: theme.glass.shadow,
          color: theme.text.primary
        };
      case 'solid':
        return {
          ...baseButtonStyles,
          background: theme.button.primary.background,
          color: theme.button.primary.text,
          border: `2px solid ${theme.purple[500]}`,
          boxShadow: theme.button.primary.shadow
        };
      case 'minimal':
        return {
          ...baseButtonStyles,
          background: 'transparent',
          color: theme.text.secondary,
          border: 'none'
        };
      default:
        return {
          ...baseButtonStyles,
          background: theme.glass.background,
          backdropFilter: theme.glass.backdrop,
          border: theme.glass.border,
          boxShadow: theme.glass.shadow,
          color: theme.text.primary
        };
    }
  };

  const iconStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.5s ease-in-out'
  };

  const sunIconStyles = {
    ...iconStyles,
    opacity: isDark ? 0 : 1,
    transform: `translate(-50%, -50%) rotate(${isDark ? '90deg' : '0deg'}) scale(${isDark ? 0 : 1})`
  };

  const moonIconStyles = {
    ...iconStyles,
    opacity: isDark ? 1 : 0,
    transform: `translate(-50%, -50%) rotate(${isDark ? '0deg' : '-90deg'}) scale(${isDark ? 1 : 0})`
  };

  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  };

  const labelStyles = {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: theme.text.secondary
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.1)';
    if (style === 'glass') {
      e.target.style.background = theme.glass.hover;
    } else if (style === 'solid') {
      e.target.style.background = theme.button.primary.hover;
    } else if (style === 'minimal') {
      e.target.style.background = theme.button.secondary.hover;
    }
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    const originalStyles = getButtonStyles();
    e.target.style.background = originalStyles.background;
  };

  const handleMouseDown = (e) => {
    e.target.style.transform = 'scale(0.95)';
  };

  const handleMouseUp = (e) => {
    e.target.style.transform = 'scale(1.1)';
  };

  return (
    <div style={containerStyles}>
   
      
      <button
        onClick={toggleTheme}
        style={getButtonStyles()}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        // onMouseDown={handleMouseDown}
        // onMouseUp={handleMouseUp}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {/* Sun Icon */}
        <Sun 
          size={currentSize.iconSize} 
          style={sunIconStyles}
        />
        
        {/* Moon Icon */}
        <Moon 
          size={currentSize.iconSize} 
          style={moonIconStyles}
        />
      </button>
    </div>
  );
};

// Example usage component
const ThemeToggleExample = () => {
  const { theme } = useTheme();

  const styles = {
    container: {

      display: 'flex',
      flexDirection: 'column',

    },
    demoCard: {
      padding: '0.3rem',
      borderRadius: '1rem',
      background: theme.glass.background,
      backdropFilter: theme.glass.overlay,
      border: theme.glass.border,
      boxShadow: theme.glass.shadow
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: theme.text.primary
    },
    subTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '0.75rem',
      color: theme.text.secondary
    },
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem',
      flexWrap: 'wrap'
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      borderRadius: '0.75rem',
      background: theme.nav.background,
      backdropFilter: theme.nav.backdrop,
      border: theme.nav.border
    },
    logo: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: theme.text.accent
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.demoCard}>


    
            <ThemeToggle size="sm" style="glass" />
          
      </div>
    </div>
  );
};

export default ThemeToggleExample;