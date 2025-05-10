import React from 'react';
import { ElementTypes } from '../../types/element';
import { ElementRenderer } from './ElementRenderer';

interface SectionElementProps {
  element: ElementTypes;
  className?: string;
}

export const SectionElement: React.FC<SectionElementProps> = ({ element, className }) => {
  if (element.type !== 'section') return null;

  return (
    <section 
      className={`relative w-full ${element.settings?.backgroundColor || 'bg-white'} ${element.settings?.padding || 'py-12 px-4'} ${className || ''}`}
      style={{
        minHeight: element.settings?.minHeight || 'auto'
      }}
    >
      <div className="container mx-auto">
        {element.children?.map((child, index) => (
          <ElementRenderer 
            key={`${child.type}-${index}`}
            element={child}
          />
        ))}
      </div>
    </section>
  );
};