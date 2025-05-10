import React from 'react';
import { ImageElementType } from '../../types/element';

interface ImageElementProps {
  element: ImageElementType;
  className?: string;
}

export const ImageElement: React.FC<ImageElementProps> = ({ element, className }) => {
  const { properties } = element;
  const { src, alt, width } = properties;
  
  return (
    <div className={`${className || ''}`}>
      <img 
        src={src} 
        alt={alt} 
        className="rounded-md shadow-sm max-w-full object-cover" 
        style={{ width: width || '100%' }} 
      />
    </div>
  );
};