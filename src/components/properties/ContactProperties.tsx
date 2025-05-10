import React from 'react';
import { useStore } from '../../store/store';
import { ContactElementType } from '../../types/element';

interface ContactPropertiesProps {
  element: ContactElementType;
}

export const ContactProperties: React.FC<ContactPropertiesProps> = ({ element }) => {
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
        <label htmlFor="contact-title" className="block text-sm font-medium text-neutral-700 mb-1">
          Form Title
        </label>
        <input
          type="text"
          id="contact-title"
          value={element.properties.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="contact-button-text" className="block text-sm font-medium text-neutral-700 mb-1">
          Submit Button Text
        </label>
        <input
          type="text"
          id="contact-button-text"
          value={element.properties.submitButtonText}
          onChange={(e) => handleChange('submitButtonText', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
      
      <div className="p-4 bg-neutral-100 rounded-md mb-4">
        <p className="text-sm text-neutral-500">Form Fields Preview:</p>
        <ul className="mt-2 text-sm list-disc list-inside text-neutral-600">
          <li>Name (Text field)</li>
          <li>Email (Email field)</li>
          <li>Message (Textarea)</li>
          <li>Submit Button</li>
        </ul>
        <p className="mt-2 text-xs text-neutral-400">Note: These fields are fixed in this demo</p>
      </div>
    </div>
  );
};