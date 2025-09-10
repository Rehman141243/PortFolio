
import React from 'react';
import { Code, Palette, Edit3, FolderOpen, User, Mail, Github, Linkedin, TabletSmartphoneIcon, Database } from 'lucide-react';
import { useTheme } from '../../context/ThemeProvider';
const About = () => {
  const { theme, isDark } = useTheme();

  const skills = [
    {
      icon: <TabletSmartphoneIcon size={24} />,
      title: "React Native",
      description: "Seamlessly connecting frontend applications with robust backend services and third-party APIs."
    },
    {
      icon: <Database size={24} />,
      title: "Api Integration",
      description: "Creating intuitive and visually appealing user interfaces with modern design principles."
    },
    {
      icon: <Edit3 size={24} />,
      title: "Redesign Development",
      description: "Crafting compelling content and maintaining high-quality documentation standards."
    },
    {
      icon: <FolderOpen size={24} />,
      title: "Project Management",
      description: "Leading development projects from conception to deployment with agile methodologies."
    }
  ];

  const cardStyle = {
    background: theme.card.background,
    backdropFilter: theme.glass.backdrop,
    border: theme.card.border,
    boxShadow: theme.card.shadow,
    borderRadius: '16px',
    padding: '24px',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const imageContainerStyle = {
    background: theme.glass.background,
    backdropFilter: theme.glass.backdrop,
    border: theme.glass.border,
    boxShadow: theme.glass.shadow,
    borderRadius: '20px',
    padding: '8px',
    position: 'relative',
    overflow: 'hidden'
  };

  const gradientOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.background.gradient || 'transparent',
    opacity: 0.5,
    pointerEvents: 'none'
  };

  return (
    <section id="about" style={{ 
      background: theme.background.primary,
            width:'96%',
        left:'2%',
      minHeight: '100vh',
      padding: '100px 20px 40px',
      position: 'relative'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: theme.background.primary,
  
        pointerEvents: 'none'
      }} />

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          
          {/* Left Side - Image */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
          }}>
            <div style={imageContainerStyle}>
              <div style={gradientOverlayStyle} />
              <img 
                src="/mani.png"
                alt="Profile"
                style={{
                  width: '100%',
                  maxWidth: '350px',
                  height: '350px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  position: 'relative',
                  zIndex: 1
                }}
              />
            </div>
            
    <div
  style={{
    display: "flex",
    gap: "16px",
    marginTop: "20px",
  }}
>
  {[
    {
      icon: <Github size={20} />,
      label: "GitHub",
      link: "https://github.com/Rehman141243",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/abdul-rehman-919403361/",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      link: "rehmanplays54@gmail.com",
    },
  ].map((social, index) => (
    <a
      key={index}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...cardStyle,
        padding: "12px",
        cursor: "pointer",
        border: "none",
        color: theme.text.accent,
        backgroundColor: theme.glass.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "48px",
        height: "48px",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = theme.glass.hover;
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = theme.card.hover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = theme.glass.background;
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = theme.card.shadow;
      }}
      title={social.label}
    >
      {social.icon}
    </a>
  ))}
</div>
          </div>

          {/* Right Side - Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}>
            
            {/* Header Section */}
            <div style={cardStyle}>
              <div style={gradientOverlayStyle} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px'
                }}>
                  <User 
                    size={32} 
                    style={{ color: theme.text.accent }}
                  />
                  <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                   color: `linear-gradient(135deg, ${theme.purple[600]} 0%, ${theme.purple[400]} 100%)`,
                    // WebkitBackgroundClip: 'text',
                    // WebkitTextFillColor: 'transparent',
                    // backgroundClip: 'text',
                    margin: 0,
                    lineHeight: '1.2'
                  }}>
                    More About Me
                  </h1>
                </div>
                
                <p style={{
                  fontSize: '1.2rem',
                  color: theme.text.secondary,
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  Passionate developer crafting exceptional digital experiences with modern technologies and creative design.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '15px'
            }}>
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  style={{
                    ...cardStyle,
                    cursor: 'pointer',
                    transform: 'translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = theme.card.hover;
                    e.currentTarget.style.background = theme.glass.hover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = theme.card.shadow;
                    e.currentTarget.style.background = theme.card.background;
                  }}
                >
                  <div style={gradientOverlayStyle} />
                  <div style={{ flexDirection:'row', display:'flex',alignContent:'center', gap:10
                  }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      background: `linear-gradient(135deg, ${theme.purple[500]} 0%, ${theme.purple[600]} 100%)`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: theme.text.inverse,
                      marginBottom: '16px',
                      boxShadow: `0 8px 25px ${theme.purple[500]}30`
                    }}>
                      {skill.icon}
                    </div>
                    
                    <h3 style={{
                      fontSize: '0.9rem',
                      fontFamily:'Poppins',
                      left:10, paddingTop:12,
                      fontWeight: '600',
                      color: theme.text.primary,
                      margin: '0 0 8px 0',
                     
                    }}>
                      {skill.title}
                    </h3>
                    
                 
                  </div>
                </div>
              ))}
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;