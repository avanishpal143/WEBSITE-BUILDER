import React from 'react';
import { useStore } from '../../store/store';
import { ButtonElementType } from '../../types/element';

interface ButtonPropertiesProps {
  element: ButtonElementType;
}

export const ButtonProperties: React.FC<ButtonPropertiesProps> = ({ element }) => {
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
        <label htmlFor="button-text" className="block text-sm font-medium text-neutral-700 mb-1">
          Button Text
        </label>
        <input
          type="text"
          id="button-text"
          value={element.properties.text}
          onChange={(e) => handleChange('text', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="button-link" className="block text-sm font-medium text-neutral-700 mb-1">
          Link URL
        </label>
        <input
          type="text"
          id="button-link"
          value={element.properties.link}
          onChange={(e) => handleChange('link', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          placeholder="https://example.com"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="button-variant" className="block text-sm font-medium text-neutral-700 mb-1">
          Button Style
        </label>
        <select
          id="button-variant"
          value={element.properties.variant}
          onChange={(e) => handleChange('variant', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="primary">Primary</option>
          <option value="secondary">Secondary</option>
          <option value="accent">Accent</option>
        </select>
      </div>
      
      <div className="mb-4">
        <label htmlFor="button-size" className="block text-sm font-medium text-neutral-700 mb-1">
          Button Size
        </label>
        <select
          id="button-size"
          value={element.properties.size}
          onChange={(e) => handleChange('size', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      
      <div className="mt-2">
        <p className="text-sm text-neutral-500 mb-2">Button Preview:</p>
        <div className="p-4 bg-neutral-100 rounded-md flex justify-center">
          <a 
            href="#" 
            className={`inline-block font-medium rounded-md transition-colors ${
              element.properties.variant === 'primary'
                ? 'bg-primary-600 hover:bg-primary-700 text-white'
                : element.properties.variant === 'secondary'
                ? 'bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-700'
                : 'bg-accent-600 hover:bg-accent-700 text-white'
            } ${
              element.properties.size === 'small'
                ? 'py-1 px-3 text-sm'
                : element.properties.size === 'medium'
                ? 'py-2 px-4'
                : 'py-3 px-6 text-lg'
            }`}
          >
            {element.properties.text || 'Button'}
          </a>
        </div>
      </div>
    </div>
  );
};