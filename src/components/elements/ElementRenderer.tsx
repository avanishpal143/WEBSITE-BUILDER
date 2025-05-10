import React from 'react';
import { ElementTypes } from '../../types/element';
import { HeadingElement } from './HeadingElement';
import { ParagraphElement } from './ParagraphElement';
import { ImageElement } from './ImageElement';
import { ButtonElement } from './ButtonElement';
import { SectionElement } from './SectionElement';
import { ColumnsElement } from './ColumnsElement';
import { ContactElement } from './ContactElement';
import { MapElement } from './MapElement';

interface ElementRendererProps {
  element: ElementTypes;
  isOverlay?: boolean;
  className?: string;
}

export const ElementRenderer: React.FC<ElementRendererProps> = ({ element, isOverlay, className }) => {
  switch (element.type) {
    case 'heading':
      return <HeadingElement element={element} className={className} />;
    case 'paragraph':
      return <ParagraphElement element={element} className={className} />;
    case 'image':
      return <ImageElement element={element} className={className} />;
    case 'button':
      return <ButtonElement element={element} className={className} />;
    case 'section':
      return <SectionElement element={element} className={className} />;
    case 'columns':
      return <ColumnsElement element={element} className={className} />;
    case 'contact':
      return <ContactElement element={element} className={className} />;
    case 'map':
      return <MapElement element={element} className={className} />;
    default:
      return <div className={className}>Unknown element type</div>;
  }
};