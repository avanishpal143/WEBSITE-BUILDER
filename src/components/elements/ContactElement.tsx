import React from 'react';
import { ContactElementType } from '../../types/element';

interface ContactElementProps {
  element: ContactElementType;
  className?: string;
}

export const ContactElement: React.FC<ContactElementProps> = ({ element, className }) => {
  const { properties } = element;
  const { title, submitButtonText } = properties;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data
    alert('Form submitted! (This is just a demo)');
  };
  
  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm ${className || ''}`}>
      <h3 className="text-xl font-semibold mb-4">{title || 'Contact Us'}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="Your message"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
        >
          {submitButtonText || 'Send'}
        </button>
      </form>
    </div>
  );
};