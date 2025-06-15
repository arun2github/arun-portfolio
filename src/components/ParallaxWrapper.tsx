'use client';

import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import CustomCursor from './CustomCursor';

interface ParallaxWrapperProps {
  children: React.ReactNode;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ children }) => {
  return (
    <ParallaxProvider>
      <CustomCursor />
      {children}
    </ParallaxProvider>
  );
};

export default ParallaxWrapper; 