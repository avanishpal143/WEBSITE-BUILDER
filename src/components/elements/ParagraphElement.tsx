import React from 'react';
import { ParagraphElementType } from '../../types/element';

interface ParagraphElementProps {
  element: ParagraphElementType;
  className?: string;
}

export const ParagraphElement: React.FC<ParagraphElementProps> = ({ element, className }) => {
  const { properties } = element;
  const { text, align } = properties;
  
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  
  return (
    <p className={`leading-relaxed text-neutral-700 ${alignClass} ${className || ''}`}>
      {text}
    </p>
  );
};