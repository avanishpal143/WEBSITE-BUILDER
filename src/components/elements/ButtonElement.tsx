import React from 'react';
import { ButtonElementType } from '../../types/element';

interface ButtonElementProps {
  element: ButtonElementType;
  className?: string;
}

export const ButtonElement: React.FC<ButtonElementProps> = ({ element, className }) => {
  const { properties } = element;
  const { text, link, variant, size } = properties;
  
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-600 hover:bg-primary-700 text-white';
      case 'secondary':
        return 'bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-700';
      case 'accent':
        return 'bg-accent-600 hover:bg-accent-700 text-white';
      default:
        return 'bg-primary-600 hover:bg-primary-700 text-white';
    }
  };
  
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'py-1 px-3 text-sm';
      case 'medium':
        return 'py-2 px-4';
      case 'large':
        return 'py-3 px-6 text-lg';
      default:
        return 'py-2 px-4';
    }
  };
  
  return (
    <div className={className}>
      <a 
        href={link || '#'} 
        className={`inline-block font-medium rounded-md transition-colors ${getVariantClass()} ${getSizeClass()}`}
      >
        {text}
      </a>
    </div>
  );
};