import React from 'react';
import { MapElementType } from '../../types/element';

interface MapElementProps {
  element: MapElementType;
  className?: string;
}

export const MapElement: React.FC<MapElementProps> = ({ element, className }) => {
  const { properties } = element;
  const { location, zoom, height } = properties;
  
  // This is a placeholder for a real map implementation
  // In a production environment, you would integrate with a maps API like Google Maps
  return (
    <div className={className}>
      <div 
        className="rounded-md shadow-sm overflow-hidden bg-neutral-100 flex flex-col items-center justify-center border border-neutral-200"
        style={{ height: height || '300px' }}
      >
        <div className="text-neutral-500 mb-2 flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mr-2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <div className="text-center px-4">
          <p className="font-medium text-neutral-800">{location || 'New York'}</p>
          <p className="text-sm text-neutral-500">Zoom Level: {zoom || 10}</p>
          <p className="text-xs text-neutral-400 mt-2">Map Display (Demo Only)</p>
        </div>
      </div>
    </div>
  );
};