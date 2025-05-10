import React from 'react';
import { useStore } from '../../store/store';
import { ParagraphElementType } from '../../types/element';

interface ParagraphPropertiesProps {
  element: ParagraphElementType;
}

export const ParagraphProperties: React.FC<ParagraphPropertiesProps> = ({ element }) => {
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
        <label htmlFor="paragraph-text" className="block text-sm font-medium text-neutral-700 mb-1">
          Text
        </label>
        <textarea
          id="paragraph-text"
          value={element.properties.text}
          onChange={(e) => handleChange('text', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          rows={6}
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="paragraph-align" className="block text-sm font-medium text-neutral-700 mb-1">
          Alignment
        </label>
        <select
          id="paragraph-align"
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