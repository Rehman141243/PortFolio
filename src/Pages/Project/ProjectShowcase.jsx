"use client";
import React from "react";
import { PinContainer } from '../../components/ui/3D-pin';
import { LampContainer } from "../../components/ui/Lamp";
import { useTheme } from "../../context/ThemeProvider";

const Projects=()=> {
  const { theme } = useTheme();

  return (
    <div
     id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-start py-10 px-4 "
      style={{ backgroundColor: theme.background.primary , width:'96%', marginLeft:'2%' }}
    >
      {/* Header */}
      <div className="text-center mb-1 px-4">
        <h2
          className="text-4xl  mb-4"
          style={{
            color: theme.purple[600],
            fontFamily:'Poppins',
            fontStyle:'bold'
   
          }}
        >
          Featured Projects
        </h2>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Discover my latest mobile applications and development projects
        </p>
      </div>

      {/* Projects */}
      <LampContainer>
        <div className="flex flex-wrap justify-center gap-8">
          <PinContainer title="Get the Code" href="https://twitter.com/mannupaaji">
            <div className="flex flex-col w-80 h-80 p-4 text-slate-100/50">
              <h3 className="font-bold text-base mb-2" style={{ color: theme.text.primary }}>
                Banking Application
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                Build seamless and privacy-protecting banking applications.
              </p>
              <div className="flex-1 w-full rounded-lg overflow-hidden">
                <img src="/p1.png" className="w-full h-full object-cover" />
              </div>
            </div>
          </PinContainer>

          <PinContainer title="Get The Code" href="https://twitter.com/mannupaaji">
            <div className="flex flex-col w-80 h-80 p-4 text-slate-100/50">
              <h3 className="font-bold text-base mb-2" style={{ color: theme.text.primary, fontFamily:'Poppins' }}>
                    Pengu Food
              </h3>
              <p className="text-slate-500 text-sm mb-4" style={{fontFamily:'Poppins'}} >
                    Cusom mobile application with for food devlivery
              </p>
              <div className="flex-1 w-full rounded-lg overflow-hidden">
                <img src="/p4.png" className="w-full h-full object-cover" />
              </div>
            </div>
          </PinContainer>

          <PinContainer title="Get The Code" href="https://twitter.com/mannupaaji">
            <div className="flex flex-col w-80 h-80 p-4 text-slate-100/50">
              <h3 className="font-bold text-base mb-2" style={{ color: theme.text.primary,fontFamily:'Poppins' }}>
                WallNyc
              </h3>
              <p className="text-slate-500 text-sm mb-4" style={{ color: theme.text.primary,fontFamily:'Poppins' }}>
                A custom Wallpaper App that make mobile attractive
              </p>
              <div className="flex-1 w-full rounded-lg overflow-hidden">
                <img src="/p3.png" className="w-full h-full object-cover" />
              </div>
            </div>
          </PinContainer>
        </div>
      </LampContainer>
    </div>
  );
}

export default Projects;
