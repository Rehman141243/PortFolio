import React, { useState } from 'react';
import { Home, Settings, DollarSign, Star, Menu, X, Mail, Sun, Moon, User } from 'lucide-react';
import { useTheme } from '../../context/ThemeProvider';
import ThemeToggleExample from '../Toggle';


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDark = false;
  const {theme} = useTheme()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

const headerStyle = {
  width: '96%',
  top: 4,
  left: '2%',
  borderRadius: 32,
  background: theme.background.primary,
  borderBottom: theme.nav.border,
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
zIndex:40,
 position: 'fixed',
};


  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const navbarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px'
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const logoTextStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: theme.text.primary,
    fontFamily: 'poppins'
  };

  const navMenuStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const navItemStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    color: theme.text.secondary,
    background: theme.background.overlay,
    fontWeight: '500',
    transition: 'all 0.3s ease',
    //: 'pointer',
    padding: '8px 12px',
    borderRadius: '12px'
  };

  const navItemHoverStyle = {
    color: theme.text.accent
  };

  const actionsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const sendMailButtonStyle = {
    background: theme.button.primary.background,
    color: theme.button.primary.text,
    fontWeight: '500',
    padding: '10px 20px',
    borderRadius: '25px',
    border: 'none',
    //: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: theme.button.primary.shadow,
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const sendMailButtonHoverStyle = {
    background: theme.button.primary.hover,
    transform: 'translateY(-1px)',
    boxShadow: '0 15px 35px rgba(168, 85, 247, 0.4)'
  };

  const mobileMenuButtonStyle = {
    display: 'none',
    background: theme.glass.background,
    backdropFilter: theme.glass.backdrop,
    WebkitBackdropFilter: theme.glass.backdrop,
    border: theme.glass.border,
    borderRadius: '8px',
    padding: '8px',
    //: 'pointer',
    color: theme.text.primary,
    transition: 'all 0.3s ease'
  };

  const mobileMenuStyle = {
    display: isMobileMenuOpen ? 'block' : 'none',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: theme.nav.background,
    backdropFilter: theme.nav.backdrop,
    WebkitBackdropFilter: theme.nav.backdrop,
    borderBottom: theme.nav.border,
    padding: '20px',
    zIndex: 999,
    boxShadow: theme.glass.shadow
  };

  const mobileNavItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 12px',
    textDecoration: 'none',
    color: theme.text.secondary,
    fontWeight: '500',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    marginBottom: '8px',
    //: 'pointer'
  };

  const mobileNavItemHoverStyle = {
    color: theme.text.accent,
    background: theme.glass.background,
    backdropFilter: theme.glass.backdrop,
    WebkitBackdropFilter: theme.glass.backdrop
  };

  // Mobile send mail button style for the dropdown menu
  const mobileSendMailButtonStyle = {
    ...sendMailButtonStyle,
    width: '100%',
    justifyContent: 'center',
    marginTop: '16px',
    padding: '14px 20px'
  };

  const mediaStyles = `
    @media (max-width: 768px) {
      .desktop-nav {
        display: none !important;
      }
      .mobile-menu-btn {
        display: flex !important;
      }
      .desktop-send-mail {
        display: none !important;
      }
      .desktop-theme-toggle {
        display: none !important;
      }
      .mobile-actions {
        display: flex !important;
      }
    }
    
    @media (min-width: 769px) {
      .mobile-menu {
        display: none !important;
      }
      .mobile-actions {
        display: none !important;
      }
    }
    
    .glass-effect {
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
    }
  `;

  return (
    <>
      <style>{mediaStyles}</style>
      <header style={headerStyle} className="glass-effect">
        <div style={containerStyle}>
          <div style={navbarStyle}>
            {/* Logo */}
            <div style={logoContainerStyle}>
              <div style={logoStyle}>
                <img
                  src={isDark ? '/logodarkt.png' : '/logolight.png'}
                  style={{ width: 40, height: 40, borderRadius: 12 }}
                  alt="Logo"
                />
                <span style={logoTextStyle}>Rehman</span>
              </div>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="desktop-nav" style={navMenuStyle}>
              <div 
                style={navItemStyle}
                onClick={() => scrollToSection('home')}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, navItemHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, navItemStyle);
                }}
              >
                <Home size={24} 
                  style={{background:'#fff', padding: 5, borderRadius: 8, color: '#000'}}
                />
                <span style={{fontFamily:'Poppins'}}>Home</span>
              </div>
              
              <div 
                style={navItemStyle}
                onClick={() => scrollToSection('about')}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, navItemHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, navItemStyle);
                }}
              >
                <User size={24}   
                  style={{background:'#fff', padding: 5, borderRadius: 8, color: '#000'}} 
                />
                <span style={{fontFamily:'Poppins'}}>About</span>
              </div>
              
              <div 
                style={navItemStyle}
                onClick={() => scrollToSection('projects')}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, navItemHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, navItemStyle);
                }}
              >
                <DollarSign size={24} 
                  style={{background:'#fff', padding: 5, borderRadius: 8, color: '#000'}} 
                />
                <span style={{fontFamily:'Poppins'}}>Projects</span>
              </div>
              
              <div 
                style={navItemStyle}
                onClick={() => scrollToSection('features')}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, navItemHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, navItemStyle);
                }}
              >
                <Star size={24}   
                  style={{background:'#fff', padding: 5, borderRadius: 8, color: '#000'}} 
                />
                <span style={{fontFamily:'Poppins'}}>Features</span>
              </div>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="desktop-actions" style={actionsStyle}>
              <button 
                className="desktop-send-mail"
                style={sendMailButtonStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, sendMailButtonHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, sendMailButtonStyle);
                }}
              >
                <Mail size={16} />
                Send Mail
              </button>
              <div className="desktop-theme-toggle">
                <ThemeToggleExample/>
              </div>
            </div>

            {/* Mobile Actions - Only Theme Toggle */}
            <div className="mobile-actions" style={{ ...actionsStyle, display: 'none' }}>
              <ThemeToggleExample/>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              style={mobileMenuButtonStyle}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="mobile-menu" style={mobileMenuStyle}>
            <nav>
              <div 
                style={mobileNavItemStyle}
                onClick={() => scrollToSection('home')}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, mobileNavItemHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, mobileNavItemStyle);
                }}
              >
                <Home size={18} />
                <span>Home</span>
              </div>
              
              <div 
                style={mobileNavItemStyle}
                onClick={() => scrollToSection('about')}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, mobileNavItemHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, mobileNavItemStyle);
                }}
              >
                <User size={18} />
                <span>About</span>
              </div>
              
              <div 
                style={mobileNavItemStyle}
                onClick={() => scrollToSection('projects')}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, mobileNavItemHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, mobileNavItemStyle);
                }}
              >
                <DollarSign size={18} />
                <span>Pricing</span>
              </div>
              
              <div 
                style={mobileNavItemStyle}
                onClick={() => scrollToSection('features')}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, mobileNavItemHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, mobileNavItemStyle);
                }}
              >
                <Star size={18} />
                <span>Features</span>
              </div>

              {/* Send Mail Button in Mobile Menu */}
              <button 
                style={mobileSendMailButtonStyle}
                onClick={() => {
                  // Add your send mail functionality here
                  console.log('Send mail clicked');
                  setIsMobileMenuOpen(false);
                }}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, {
                    ...mobileSendMailButtonStyle,
                    background: theme.button.primary.hover,
                    transform: 'translateY(-1px)'
                  });
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, mobileSendMailButtonStyle);
                }}
              >
                <Mail size={16} />
                Send Mail
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;