import { useEffect } from "react";
import About from "./About/About";
import Home from "./Home/Home";
import Header from "./Navbar/Navbar";
import ContactForm from "./Mail/Contect";


import { FollowerPointerCard } from "../components/ui/Pointer";
import Projects from "./Project/ProjectShowcase";



export default function Root() {
  useEffect(() => {
    // Enable smooth scrolling globally
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optional: Add scroll snap for better UX
    document.documentElement.style.scrollSnapType = 'y mandatory';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      document.documentElement.style.scrollSnapType = 'none';
    };
  }, []);

  return (
    <>
      <style>{`
        /* Global smooth scrolling */
        html {
          scroll-behavior: smooth !important;
          scroll-snap-type: y mandatory;
        }
        
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        
        /* Smooth transitions for all elements */
        * {
          box-sizing: border-box;
        }
        
        /* Custom animations */
        @keyframes fillBar {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Ensure smooth scrolling on all browsers */
        @supports (scroll-behavior: smooth) {
          html {
            scroll-behavior: smooth;
          }
        }
        
        /* For browsers that don't support scroll-behavior */
        @supports not (scroll-behavior: smooth) {
          html {
            scroll-behavior: auto;
          }
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          html {
            scroll-snap-type: none; /* Disable on mobile for better touch scrolling */
          }
        }
      `}</style>
       <FollowerPointerCard
       >
      <Header />
 
        <Home />

        <About />
        <Projects/>
        <ContactForm/>
      </FollowerPointerCard>

    </>
  );
}