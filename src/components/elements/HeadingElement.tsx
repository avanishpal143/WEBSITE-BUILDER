import React from 'react';
import { HeadingElementType } from '../../types/element';

interface HeadingElementProps {
  element: HeadingElementType;
  className?: string;
}

export const HeadingElement: React.FC<HeadingElementProps> = ({ element, className }) => {
  const { properties } = element;
  const { text, level, align } = properties;
  
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  
  const renderHeading = () => {
    const headingClasses = `${alignClass} ${className || ''}`;
    
    switch (level) {
      case 'h1':
        return <h1 className={`text-4xl font-bold ${headingClasses}`}>{text}</h1>;
      case 'h2':
        return <h2 className={`text-3xl font-bold ${headingClasses}`}>{text}</h2>;
      case 'h3':
        return <h3 className={`text-2xl font-bold ${headingClasses}`}>{text}</h3>;
      case 'h4':
        return <h4 className={`text-xl font-bold ${headingClasses}`}>{text}</h4>;
      case 'h5':
        return <h5 className={`text-lg font-bold ${headingClasses}`}>{text}</h5>;
      case 'h6':
        return <h6 className={`text-base font-bold ${headingClasses}`}>{text}</h6>;
      default:
        return <h2 className={`text-3xl font-bold ${headingClasses}`}>{text}</h2>;
    }
  };
  
  return renderHeading();
};