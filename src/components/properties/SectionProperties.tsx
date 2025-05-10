import React from 'react';
import { useStore } from '../../store/store';
import { SectionElementType } from '../../types/element';

interface SectionPropertiesProps {
  element: SectionElementType;
}

export const SectionProperties: React.FC<SectionPropertiesProps> = ({ element }) => {
  const { updateElement } = useStore();
  
  const handleChange = (field: string, value: string) => {
    updateElement({
      ...element,
      properties: {
        ...element.properties,
        [field]: value
      }
    });
  };
  
  return (
    <div className="property-form">
      <div className="mb-4">
        <label htmlFor="section-background" className="block text-sm font-medium text-neutral-700 mb-1">
          Background Color
        </label>
        <div className="flex items-center">
          <input
            type="color"
            id="section-background"
            value={element.properties.backgroundColor || '#ffffff'}
            onChange={(e) => handleChange('backgroundColor', e.target.value)}
            className="w-10 h-10 rounded-md border border-neutral-300 shadow-sm p-0 mr-2"
          />
          <input
            type="text"
            value={element.properties.backgroundColor || '#ffffff'}
            onChange={(e) => handleChange('backgroundColor', e.target.value)}
            className="flex-1 px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="section-padding" className="block text-sm font-medium text-neutral-700 mb-1">
          Padding
        </label>
        <select
          id="section-padding"
          value={element.properties.padding}
          onChange={(e) => handleChange('padding', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label htmlFor="section-border-radius" className="block text-sm font-medium text-neutral-700 mb-1">
          Border Radius
        </label>
        <select
          id="section-border-radius"
          value={element.properties.borderRadius}
          onChange={(e) => handleChange('borderRadius', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="none">None</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
    </div>
  );
};