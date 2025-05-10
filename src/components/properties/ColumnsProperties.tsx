import React from 'react';
import { useStore } from '../../store/store';
import { ColumnsElementType } from '../../types/element';

interface ColumnsPropertiesProps {
  element: ColumnsElementType;
}

export const ColumnsProperties: React.FC<ColumnsPropertiesProps> = ({ element }) => {
  const { updateElement } = useStore();
  
  const handleChange = (field: string, value: string | number) => {
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
        <label htmlFor="columns-count" className="block text-sm font-medium text-neutral-700 mb-1">
          Number of Columns
        </label>
        <select
          id="columns-count"
          value={element.properties.columns}
          onChange={(e) => handleChange('columns', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="2">2 Columns</option>
          <option value="3">3 Columns</option>
          <option value="4">4 Columns</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label htmlFor="columns-gap" className="block text-sm font-medium text-neutral-700 mb-1">
          Gap Between Columns
        </label>
        <select
          id="columns-gap"
          value={element.properties.gap}
          onChange={(e) => handleChange('gap', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      
      <div className="p-4 bg-neutral-100 rounded-md">
        <div className="text-sm text-neutral-500 mb-2">Column Layout Preview:</div>
        <div 
          className={`grid ${
            element.properties.gap === 'small' 
              ? 'gap-2' 
              : element.properties.gap === 'large' 
              ? 'gap-8' 
              : 'gap-4'
          }`}
          style={{ gridTemplateColumns: `repeat(${element.properties.columns || 2}, 1fr)` }}
        >
          {Array.from({ length: element.properties.columns || 2 }).map((_, i) => (
            <div key={i} className="bg-white border border-neutral-200 rounded p-2 text-center text-xs text-neutral-400">
              Column {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};