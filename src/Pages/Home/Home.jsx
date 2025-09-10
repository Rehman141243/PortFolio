// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { ArrowRight, Play, Sparkles, FileText, Database, BarChart3, PencilRuler, NotebookText } from 'lucide-react';
// import { useTheme } from '../../context/ThemeProvider';
// // Theme Context (from your provided theme)

// // Floating Card Component
// const FloatingCard = ({ children, style = {}, delay = 0, ...props }) => {
//   const { theme } = useTheme();
  
//   const cardStyle = {
//     position: 'absolute',
//     background: theme.glass.background,
//     backdropFilter: theme.glass.backdrop,
//     border: theme.glass.border,
//     boxShadow: theme.glass.shadow,
//     borderRadius: '16px',
//     padding: '16px 20px',
//     animation: `float 6s ease-in-out infinite`,
//     animationDelay: `${delay}s`,
//     transition: 'all 0.3s ease',
//     ...style
//   };

//   return (
//     <div style={cardStyle} {...props}>
//       {children}
//     </div>
//   );
// };

// // Main Hero Component
// const Home = () => {
//   const { theme, isDark, } = useTheme();
//   const [isHovered, setIsHovered] = useState(false);

//   const styles = {
//     container: {
//       background:theme.background.primary,
//       top:5,
//       borderRadius:12,
//       width:'96%', left:'2%',
//     minheight: '100vh',
//       position: 'relative',
//       overflow: 'hidden',
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
//     },
    
//     mainContent: {
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '48px 24px',
//       position: 'relative',
//       zIndex: 10
//     },
    
//     heroLayout: {
//       display: 'flex',
//     //   alignItems: 'center',
//       justifyContent: 'space-between',
//       minHeight: '100vh',
//       gap: '60px'
//     },
    
//     leftContent: {
//       flex: 1,
//       maxWidth: '600px'
//     },
    
//     badge: {
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '12px',
//       padding: '12px 24px',
//       marginBottom: '32px',
//       background: theme.glass.background,
//       backdropFilter: theme.glass.backdrop,
//       border: theme.glass.border,
//       borderRadius: '50px',
//       boxShadow: theme.glass.shadow,
//       color: theme.text.primary,
//       fontWeight: '500'
//     },
    
//     mainHeading: {
//         fontFamily:'Poppins',
//       fontSize: '3rem',
//       fontWeight: 'bold',
//       marginBottom: '24px',
//       lineHeight: '1.1',
//       color: theme.text.primary
//     },
    
//     brandName: {
//  color:theme.text.primary,
//       backgroundClip: 'text'
//     },
    
//     description: {
//       fontSize: '1.25rem',
//       marginBottom: '48px',
//       lineHeight: '1.6',
//       maxWidth: '550px',
//       fontFamily:'Poppins',
//       color: theme.text.secondary
//     },
    
//     buttonContainer: {
//       display: 'flex',
//       gap: '24px',
//       flexWrap: 'wrap'
//     },
    
//     primaryButton: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '12px',
//       padding: '16px 32px',
//       borderRadius: '16px',
//       fontWeight: '600',
//       fontSize: '1.125rem',
//       transition: 'all 0.3s ease',
//       background: 'linear-gradient(135deg, #06ffa5 0%, #00d4aa 100%)',
//       color: '#1e293b',
//       boxShadow: '0 10px 30px rgba(6, 255, 165, 0.3)',
//       border: 'none',
//       cursor: 'pointer',
//       transform: isHovered ? 'scale(1.05)' : 'scale(1)'
//     },
    
//     secondaryButton: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '12px',
//       padding: '16px 32px',
//       borderRadius: '16px',
//       fontWeight: '600',
//       fontSize: '1.125rem',
//       transition: 'all 0.3s ease',
//       background: theme.glass.background,
//       backdropFilter: theme.glass.backdrop,
//       border: theme.glass.border,
//       color: theme.text.primary,
//       boxShadow: theme.glass.shadow,
//       cursor: 'pointer'
//     },
    
//     rightContent: {
//       flex: 1,
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       position: 'relative'
//     },
    
//     aiCircle: {
//       width: '400px',
//       height: '400px',
//       borderRadius: '50%',
//       position: 'relative',
//  justifyContent:'center',
//       alignContent:'center',
//  display: 'flex',   

//     //   animation: 'rotate 20s linear infinite, pulse 4s ease-in-out infinite alternate',
//       boxShadow: '0 0 100px rgba(255, 0, 110, 0.3), 0 0 200px rgba(131, 56, 236, 0.2)',
//       border: '3px solid rgba(255, 255, 255, 0.1)',
//     //   transform: isHovered ? 'scale(1.05)' : 'scale(1)',
//     //   transition: 'transform 0.5s ease',
//       cursor: 'pointer'
//     },
    
//     aiInner: {
//       position: 'absolute',
//       top: '8px',
//       left: '8px',
//       right: '8px',
//       bottom: '8px',
//       borderRadius: '50%',
//       background: `
//         radial-gradient(circle at 30% 30%, rgba(255, 0, 110, 0.8) 0%, transparent 70%),
//         radial-gradient(circle at 70% 70%, rgba(58, 134, 255, 0.8) 0%, transparent 70%),
//         conic-gradient(from 45deg at 50% 50%, 
//           rgba(131, 56, 236, 0.9) 0deg,
//           rgba(255, 0, 110, 0.7) 90deg,
//           rgba(6, 255, 165, 0.8) 180deg,
//           rgba(255, 190, 11, 0.7) 270deg,
//           rgba(131, 56, 236, 0.9) 360deg
//         )
//       `,
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       overflow: 'hidden'
//     },
    
//     aiContent: {
//       position: 'relative',
//       width: '100%',
//       height: '100%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
    
//     aiText: {
//       color: 'white',
//       fontSize: '4rem',
//       fontWeight: 'bold',
//       opacity: 0.2
//     },
    
//     neuralNetwork: {
//       position: 'absolute',
//       inset: 0
//     },
    
//     themeToggle: {
//       position: 'fixed',
//       top: '32px',
//       right: '32px',
//       padding: '12px',
//       borderRadius: '50%',
//       transition: 'all 0.3s ease',
//       background: theme.glass.background,
//       backdropFilter: theme.glass.backdrop,
//       border: theme.glass.border,
//       boxShadow: theme.glass.shadow,
//       color: theme.text.primary,
//       cursor: 'pointer',
//       fontSize: '1.5rem'
//     },
    
//     // Floating card positions
//     card1: { top: '124px', left: '32px' },
//     card2: { top: '127px', right: '32px' },
//     card3: { bottom: '158px', left: '16px' },
//     card4: { bottom: '150px', right: '64px' },
    
//     // Card content styles
//     cardContent: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '12px'
//     },
    
//     iconBox: {
//       width: '32px',
//       height: '32px',
//       borderRadius: '8px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
    
//     cardText: {
//       fontWeight: 'bold',
//       fontSize: '1.5rem'
//     },
    
//     cardSubtext: {
//       color: theme.text.secondary,
//       fontSize: '0.875rem'
//     },
    
//     // Responsive styles
//     '@media (max-width: 768px)': {
//       heroLayout: {
//         flexDirection: 'column',
//         textAlign: 'center',
//         gap: '40px'
//       },
//       mainHeading: {
//         fontSize: '3rem'
//       },
//       aiCircle: {
//         width: '300px',
//         height: '300px'
//       }
//     }
//   };

//   // Sparkle dots for neural network
//   const sparkles = [...Array(12)].map((_, i) => (
//     <div
//       key={i}
//       style={{
//         position: 'absolute',
//         width: '8px',
//         height: '8px',
//         backgroundColor: 'white',
//         borderRadius: '50%',
//         opacity: 0.6,
//         top: `${20 + Math.sin(i * 30 * Math.PI / 180) * 40}%`,
//         left: `${50 + Math.cos(i * 30 * Math.PI / 180) * 40}%`,
//         animation: `sparkle 3s ease-in-out infinite`,
//         animationDelay: `${i * 0.2}s`
//       }}
//     />
//   ));

//   return (
//     <div style={styles.container}>
//       {/* Custom CSS for animations */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           33% { transform: translateY(-20px) rotate(1deg); }
//           66% { transform: translateY(-10px) rotate(-1deg); }
//         }
        
//         @keyframes rotate {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         @keyframes pulse {
//           0% { box-shadow: 0 0 100px rgba(255, 0, 110, 0.3), 0 0 200px rgba(131, 56, 236, 0.2); }
//           100% { box-shadow: 0 0 150px rgba(255, 0, 110, 0.5), 0 0 300px rgba(131, 56, 236, 0.4); }
//         }
        
//         @keyframes sparkle {
//           0%, 100% { opacity: 0; transform: scale(0); }
//           50% { opacity: 1; transform: scale(1); }
//         }
        
//         .pulse-icon {
//           animation: sparkle 2s ease-in-out infinite;
//         }
        
//         @media (max-width: 768px) {
//           .hero-layout {
//             flex-direction: column !important;
//             text-align: center;
//           }
//           .main-heading {
//             font-size: 3rem !important;
//           }
//           .ai-circle {
//             width: 300px !important;
//             height: 300px !important;
//           }
//           .button-container {
//             justify-content: center;
//           }
//         }
//       `}</style>

//       <div style={styles.mainContent}>
//         <div style={styles.heroLayout} className="hero-layout">
//           {/* Left Content */}
//           <div style={styles.leftContent}>
//             {/* AI-Powered Badge */}
//             <div style={styles.badge}>
//               <Sparkles style={{ width: '20px', height: '20px', color: '#fbbf24' }} className="pulse-icon" />
//               <span style={{fontFamily:'Poppins'}}  >Application Developer</span>
//             </div>

//             {/* Main Heading */}
//             <h1 style={styles.mainHeading} className="main-heading">
//               السَّلَامُ عَلَيْكُمْ<br />
//               <span style={styles.brandName}>I am Abdul Rehman</span>
//             </h1>

//             {/* Description */}
//             <p style={styles.description}>
//           I am a professional mobile application developer with expertise in building high-performance, user-friendly apps for iOS and Android. Skilled in modern frameworks and tools, I deliver scalable and innovative mobile solutions tailored to client needs. 
// </p>
//             {/* Action Buttons */}
//             <div style={styles.buttonContainer} className="button-container">
//               <button
//                 style={styles.primaryButton}
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 Get Started
//                 <ArrowRight style={{ width: '20px', height: '20px' }} />
//               </button>

//               <button style={styles.secondaryButton}>
//                 <Play style={{ width: '20px', height: '20px' }} />
//                 View Portfolio
//               </button>
//             </div>
//           </div>

//           {/* Right Side - AI Visualization */}
//           <div style={styles.rightContent}>
//             {/* Main AI Circle */}
//             <div 
//               style={styles.aiCircle}


//             >
//      <img
//     src='/unnamed.jpg' alt='unnamed'
//  style={{borderRadius:'50%', width:'90%', height:'90%', marginTop:21}}
//   />
//             </div>

//             {/* Floating Cards */}
//             <FloatingCard style={styles.card1} delay={0}>
//               <div style={styles.cardContent}>
//                        <div style={{...styles.iconBox, backgroundColor: '#3b82f6'}}>
//                   <NotebookText style={{ width: '18px', height: '18px', color: 'white' }} />
//                 </div>
//                 <div>
//                   <div style={{...styles.cardText, color: '#22c55e'}}>2+</div>
//                   <div style={styles.cardSubtext}>Projects</div>
//                 </div>
//               </div>
//             </FloatingCard>

//             <FloatingCard style={styles.card2} delay={1}>
//               <div style={styles.cardContent}>
//                 <div style={{...styles.iconBox, backgroundColor: '#3b82f6'}}>
//                   <BarChart3 style={{ width: '16px', height: '16px', color: 'white' }} />
//                 </div>
//                 <div>
//                   <div style={{...styles.cardText, color: '#3b82f6'}}>96.9%</div>
//                   <div style={styles.cardSubtext}>Accuracy</div>
//                 </div>
//               </div>
//             </FloatingCard>

//             <FloatingCard style={styles.card3} delay={2}>
//               <div style={styles.cardContent}>
//                 <div style={{...styles.iconBox, backgroundColor: '#8b5cf6'}}>
//                   <PencilRuler style={{ width: '16px', height: '16px', color: 'white' }} />
//                 </div>
//               </div>
//             </FloatingCard>

//             <FloatingCard style={styles.card4} delay={0.5}>
//               <div style={styles.cardContent}>
//                 <div style={{...styles.iconBox, backgroundColor: '#ec4899'}}>
//                   <FileText style={{ width: '16px', height: '16px', color: 'white' }} />
//                 </div>
//               </div>
//             </FloatingCard>

            
//           </div>
  

  
          





          
//         </div>
//       </div>

 
//     </div>
//   );
// };

// export default Home


import React, { createContext, useContext, useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, FileText, Database, BarChart3, PencilRuler, NotebookText, TabletSmartphoneIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeProvider';

// Mock Theme Context (since we don't have the actual theme provider)


// Orbiting Card Component
const OrbitingCard = ({ children, radius = 220, speed = 20, delay = 0, ...props }) => {
  const { theme } = useTheme();

  const cardStyle = {
    position: 'absolute',
    background: theme.glass.background,
    backdropFilter: theme.glass.backdrop,
    border: theme.glass.border,
    boxShadow: theme.glass.shadow,
    borderRadius: '16px',
    padding: '12px 16px', // Reduced padding for better visibility
    animation: `homeorbit ${speed}s linear infinite`,
    animationDelay: `${delay}s`,
    left: '50%',
    top: '50%',
    // Center the card properly
    marginLeft: '-40px', // Half of estimated card width
    marginTop: '-40px',  // Half of estimated card height
    transformOrigin: '40px 40px', // Center of the card
    zIndex: 10,
    // Ensure visibility
    visibility: 'visible',
    opacity: 1,
    pointerEvents: 'auto',
    // Ensure content fits
    minWidth: '60px',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div 
      style={cardStyle} 
      className="orbiting-card"
      {...props}
    >
      {children}
    </div>
  );
};


const FloatingCard = ({ children, style = {}, delay = 0, ...props }) => {
  const { theme } = useTheme();
  
  const cardStyle = {
    background: theme.glass.background,
    backdropFilter: theme.glass.backdrop,
    border: theme.glass.border,
    boxShadow: theme.glass.shadow,
    borderRadius: '16px',
    padding: '16px 20px',
    animation: `float 6s ease-in-out infinite`,
    animationDelay: `${delay}s`,
    transition: 'all 0.3s ease',
    ...style
  };

  return (
    <div style={cardStyle} {...props}>
      {children}
    </div>
  );
};

// Main Hero Component
const Home = () => {
  const { theme, isDark } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    container: {
      background: theme.background.primary,
      top: 5,
      borderRadius: 12,
      width: '96%', 
      left: '2%',
      minHeight: '100vh',
      position: 'relative',
      // overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    },
    
    mainContent: {
      maxWidth: '1200px',
      paddingTop:300,
      margin: '0 auto',
      padding: '38px 24px',
      position: 'relative',
      zIndex: 10
    },
    
    heroLayout: {
      display: 'flex',
           paddingTop:100,
      justifyContent: 'space-between',
      minHeight: '100vh',
      gap: '60px'
    },
    
    leftContent: {
      flex: 1,
      maxWidth: '600px'
    },
    
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 24px',
      marginBottom: '32px',
      background: theme.glass.background,
      backdropFilter: theme.glass.backdrop,
      border: theme.glass.border,
      borderRadius: '50px',
      boxShadow: theme.glass.shadow,
      color: theme.text.primary,
      fontWeight: '500'
    },
    
    mainHeading: {
      fontFamily: 'Poppins',
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '24px',
      lineHeight: '1.1',
      color: theme.text.primary
    },
    
    brandName: {
      color: theme.text.primary,
      backgroundClip: 'text'
    },
    
    description: {
      fontSize: '1.25rem',
      marginBottom: '48px',
      lineHeight: '1.6',
      maxWidth: '550px',
      fontFamily: 'Poppins',
      color: theme.text.secondary
    },
    
    buttonContainer: {
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap'
    },
    
    primaryButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px 32px',
      borderRadius: '16px',
      fontWeight: '600',
      fontSize: '1.125rem',
      transition: 'all 0.3s ease',
      background: theme.text.accent,
      color: '#ffffff',
      boxShadow: '0 10px 30px rgba(192, 132, 252, 0.5)',
      border: 'none',
      cursor: 'pointer',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)'
    },
    
    secondaryButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px 32px',
      borderRadius: '16px',
      fontWeight: '600',
      fontSize: '1.125rem',
      transition: 'all 0.3s ease',
      background: theme.glass.background,
      backdropFilter: theme.glass.backdrop,
      border: theme.glass.border,
      color: theme.text.primary,
      boxShadow: theme.glass.shadow,
      cursor: 'pointer'
    },
      rightContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    top: 50,
    alignItems: 'center',
    position: 'relative',
    // Ensure no overflow clipping
    overflow: 'visible',
  },
  
  orbitContainer: {
    position: 'relative',
    width: '400px',
    height: '400px',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // Critical: Allow orbiting elements to be visible outside container
    overflow: 'visible',
    // Add some margin to ensure space for orbiting elements
    margin: '100px',
  },
  
  aiCircle: {
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    position: 'relative',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
    boxShadow: '0 0 100px rgba(255, 0, 110, 0.3), 0 0 200px rgba(131, 56, 236, 0.2)',
    border: '3px solid rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',
    zIndex: 5
  },
  
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px', // Reduced gap for better fit
    justifyContent: 'center',
  },
  
  iconBox: {
    width: '40px',  // Consistent size
    height: '40px',
    padding: '8px', // Reduced padding
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
    
    cardText: {
      fontWeight: 'bold',
      fontSize: '1.5rem'
    },
    
    cardSubtext: {
      color: theme.text.secondary,
      fontSize: '0.875rem'
    }
  };

  return (

      <div style={styles.container} className='home-container'>
        {/* Custom CSS for animations */}

        <div id='home' style={styles.mainContent}>
          <div style={styles.heroLayout} className="home-hero-layout">
            {/* Left Content */}
            <div style={styles.leftContent}>
              {/* AI-Powered Badge */}
              <div style={styles.badge}>
                <Sparkles style={{ width: '20px', height: '20px', color: '#fbbf24' }} className="home-pulse-icon" />
                <span style={{fontFamily: 'Poppins'}}>Application Developer</span>
              </div>

              {/* Main Heading */}
              <h1 style={styles.mainHeading} className="home-main-heading">
                السَّلَامُ عَلَيْكُمْ<br />
                <span style={styles.brandName}>I am Abdul Rehman</span>
              </h1>

              {/* Description */}
              <p style={styles.description}>
                I am a Skilled mobile application developer with expertise in building high-performance, user-friendly apps for iOS and Android. Skilled in modern frameworks and tools, I deliver scalable and innovative mobile solutions tailored to client needs. 
              </p>
              
              {/* Action Buttons */}
              <div style={styles.buttonContainer} className="home-button-container">
                <button
                  style={styles.primaryButton}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Send Mail
                  <ArrowRight style={{ width: '20px', height: '20px' }} />
                </button>

          
              </div>
            </div>

            {/* Right Side - AI Visualization with Floating Cards Above Image */}
            <div style={styles.rightContent}>
              {/* Floating Cards Container - Now positioned above the image */}
       

              {/* Main Image Circle with Orbiting Cards */}
              <div style={styles.orbitContainer} className="home-orbit-container">
                {/* Main AI Circle with Image */}
                <div style={styles.aiCircle} className="home-ai-circle">
                  <img
                    src='/unnamed.jpg'
                    alt="Abdul Rehman"
                    style={{
                      borderRadius: '50%', 
                      width: '90%', 
                      height: '90%', 

                      marginTop:17,
                    }}
                  />
                </div>
       {/* <div style={styles.floatingCardsContainer} className="floating-cards-container">
                <FloatingCard delay={0}>
                  <div style={styles.cardContent}>
                    <div style={{...styles.iconBox, backgroundColor: '#3b82f6'}}>
                      <TabletSmartphoneIcon style={{ width: '18px', height: '18px', color: 'white' }} />
                    </div>
                    <div>
                      <div style={{...styles.cardText, color: '#22c55e'}}>React</div>
                      <div style={styles.cardSubtext}>Native</div>
                    </div>
                  </div>
                </FloatingCard>

                <FloatingCard delay={2}>
                  <div style={styles.cardContent}>
                    <div style={{...styles.iconBox, backgroundColor: theme.text.accent}}>
                      <NotebookText style={{ width: '16px', height: '16px', color: 'white' }} />
                    </div>
                    <div>
                      <div style={{...styles.cardText, color: theme.text.accent}}>3+</div>
                      <div style={styles.cardSubtext}>Projects</div>
                    </div>
                  </div>
                </FloatingCard>
              </div> */}
                {/* Orbiting Cards */}
                <OrbitingCard radius={220} speed={25} delay={-20}>
                  <div style={styles.cardContent}>
                    <div style={{...styles.iconBox, backgroundColor: '#ffffffff'}}>
                         <img src='/native.png'  style={{width:'36px', height:'36px',}}/>
                    </div>
                  </div>
                </OrbitingCard>

                <OrbitingCard radius={220} speed={25} delay={-12}>
                  <div style={styles.cardContent}>
                    <div style={{...styles.iconBox, backgroundColor: '#ffffff'}}>
                       <img src='/node.png'  style={{width:'96px', height:'29px',}}/>
                    </div>
                  </div>
                </OrbitingCard>

                <OrbitingCard radius={220} speed={25} delay={-8}>
                  <div style={styles.cardContent}>
                    <div style={{...styles.iconBox, backgroundColor: '#ffffff'}}>
                   <img src='/tailwind.png'  style={{width:'36px', height:'36px', }}/>
                    </div>
                  </div>
                </OrbitingCard>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Home;