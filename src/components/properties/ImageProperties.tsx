import React from 'react';
import { useStore } from '../../store/store';
import { ImageElementType } from '../../types/element';

interface ImagePropertiesProps {
  element: ImageElementType;
}

export const ImageProperties: React.FC<ImagePropertiesProps> = ({ element }) => {
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
  
  const popularImages = [
    {
      url: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      label: 'Nature Landscape'
    },
    {
      url: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      label: 'Business Meeting'
    },
    {
      url: 'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      label: 'Office Workspace'
    },
    {
      url: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      label: 'Digital Marketing'
    }
  ];
  
  return (
    <div className="property-form">
      <div className="mb-4">
        <label htmlFor="image-src" className="block text-sm font-medium text-neutral-700 mb-1">
          Image URL
        </label>
        <input
          type="text"
          id="image-src"
          value={element.properties.src}
          onChange={(e) => handleChange('src', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          placeholder="https://example.com/image.jpg"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          Or choose a stock image:
        </label>
        <div className="grid grid-cols-2 gap-2">
          {popularImages.map((image, index) => (
            <div 
              key={index}
              className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all ${
                element.properties.src === image.url ? 'border-primary-500' : 'border-transparent hover:border-primary-200'
              }`}
              onClick={() => handleChange('src', image.url)}
            >
              <div className="aspect-video bg-neutral-100 overflow-hidden">
                <img src={image.url} alt={image.label} className="w-full h-full object-cover" />
              </div>
              <div className="text-xs p-1 text-center truncate">{image.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="image-alt" className="block text-sm font-medium text-neutral-700 mb-1">
          Alt Text
        </label>
        <input
          type="text"
          id="image-alt"
          value={element.properties.alt}
          onChange={(e) => handleChange('alt', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          placeholder="Image description"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="image-width" className="block text-sm font-medium text-neutral-700 mb-1">
          Width
        </label>
        <select
          id="image-width"
          value={element.properties.width}
          onChange={(e) => handleChange('width', e.target.value)}
          className="w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        >
          <option value="100%">Full width (100%)</option>
          <option value="75%">Three quarters (75%)</option>
          <option value="50%">Half width (50%)</option>
          <option value="25%">Quarter width (25%)</option>
        </select>
      </div>
    </div>
  );
};