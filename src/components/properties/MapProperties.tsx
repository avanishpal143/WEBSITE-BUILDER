import React from 'react';
import { useStore } from '../../store/store';
import { MapElementType } from '../../types/element';

interface MapPropertiesProps {
  element: MapElementType;
}

export const MapProperties: React.FC<MapPropertiesProps> = ({ element }) => {
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
  
  const popularLocations = [
    'New York',
    'London',
    'Tokyo',
    'Paris',
    'Sydney',
    'Berlin',
    'Mumbai',
    'Rio de Janeiro'
  ];
  
  return (
    <div className="property-form">
      <div className="mb-4">
        <label htmlFor="map-location" className="block text-sm font-medium text-neutral-700 mb-1">
          Location
        </label>
        <input
          type="text"
          id="map-location"
          value={element.properties.location}
          onChange={(e) => handleChange('location', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          placeholder="Enter a location name"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          Popular locations:
        </label>
        <div className="flex flex-wrap gap-2">
          {popularLocations.map((location) => (
            <button
              key={location}
              type="button"
              className={`text-xs py-1 px-2 rounded-full ${
                element.properties.location === location
                  ? 'bg-primary-100 text-primary-700 border border-primary-200'
                  : 'bg-neutral-100 text-neutral-700 border border-neutral-200 hover:bg-neutral-200'
              }`}
              onClick={() => handleChange('location', location)}
            >
              {location}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="map-zoom" className="block text-sm font-medium text-neutral-700 mb-1">
          Zoom Level (1-20)
        </label>
        <div className="flex items-center">
          <input
            type="range"
            id="map-zoom"
            min="1"
            max="20"
            value={element.properties.zoom}
            onChange={(e) => handleChange('zoom', parseInt(e.target.value))}
            className="w-full"
          />
          <span className="ml-2 text-sm">{element.properties.zoom}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="map-height" className="block text-sm font-medium text-neutral-700 mb-1">
          Map Height
        </label>
        <select
          id="map-height"
          value={element.properties.height}
          onChange={(e) => handleChange('height', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="200px">Small (200px)</option>
          <option value="300px">Medium (300px)</option>
          <option value="400px">Large (400px)</option>
          <option value="500px">Extra Large (500px)</option>
        </select>
      </div>
      
      <div className="p-4 bg-neutral-100 rounded-md">
        <p className="text-xs text-neutral-500 mb-2">Note: This is a demo map implementation.</p>
        <p className="text-xs text-neutral-500">In a production environment, you would integrate with a maps API like Google Maps or Mapbox.</p>
      </div>
    </div>
  );
};