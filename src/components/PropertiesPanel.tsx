import React from 'react';
import { useStore } from '../store/store';
import { HeadingProperties } from './properties/HeadingProperties';
import { ParagraphProperties } from './properties/ParagraphProperties';
import { ImageProperties } from './properties/ImageProperties';
import { ButtonProperties } from './properties/ButtonProperties';
import { SectionProperties } from './properties/SectionProperties';
import { ColumnsProperties } from './properties/ColumnsProperties';
import { ContactProperties } from './properties/ContactProperties';
import { MapProperties } from './properties/MapProperties';
import { X } from 'lucide-react';

export const PropertiesPanel: React.FC = () => {
  const { selectedElement, elements, setSelectedElement } = useStore();
  
  if (!selectedElement) return null;
  
  const element = elements.find(el => el.id === selectedElement);
  if (!element) return null;
  
  const renderPropertiesForm = () => {
    switch (element.type) {
      case 'heading':
        return <HeadingProperties element={element} />;
      case 'paragraph':
        return <ParagraphProperties element={element} />;
      case 'image':
        return <ImageProperties element={element} />;
      case 'button':
        return <ButtonProperties element={element} />;
      case 'section':
        return <SectionProperties element={element} />;
      case 'columns':
        return <ColumnsProperties element={element} />;
      case 'contact':
        return <ContactProperties element={element} />;
      case 'map':
        return <MapProperties element={element} />;
      default:
        return <div>No properties available for this element type.</div>;
    }
  };
  
  return (
    <div className="w-80 bg-white border-l border-neutral-200 overflow-y-auto flex-shrink-0">
      <div className="flex items-center justify-between border-b border-neutral-200 p-4">
        <h2 className="font-medium text-lg">Properties</h2>
        <button 
          onClick={() => setSelectedElement(null)}
          className="p-1 rounded-full hover:bg-neutral-100"
        >
          <X className="h-5 w-5 text-neutral-500" />
        </button>
      </div>
      <div className="p-4">
        {renderPropertiesForm()}
      </div>
    </div>
  );
};