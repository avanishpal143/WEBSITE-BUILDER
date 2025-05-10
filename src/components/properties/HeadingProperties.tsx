import React from 'react';
import { useStore } from '../../store/store';
import { HeadingElementType } from '../../types/element';

interface HeadingPropertiesProps {
  element: HeadingElementType;
}

export const HeadingProperties: React.FC<HeadingPropertiesProps> = ({ element }) => {
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
        <label htmlFor="heading-text" className="block text-sm font-medium text-neutral-700 mb-1">
          Text
        </label>
        <textarea
          id="heading-text"
          value={element.properties.text}
          onChange={(e) => handleChange('text', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          rows={3}
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="heading-level" className="block text-sm font-medium text-neutral-700 mb-1">
          Heading Level
        </label>
        <select
          id="heading-level"
          value={element.properties.level}
          onChange={(e) => handleChange('level', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="h1">H1 - Largest</option>
          <option value="h2">H2 - Large</option>
          <option value="h3">H3 - Medium</option>
          <option value="h4">H4 - Small</option>
          <option value="h5">H5 - Smaller</option>
          <option value="h6">H6 - Smallest</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label htmlFor="heading-align" className="block text-sm font-medium text-neutral-700 mb-1">
          Alignment
        </label>
        <select
          id="heading-align"
          value={element.properties.align}
          onChange={(e) => handleChange('align', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
    </div>
  );
};