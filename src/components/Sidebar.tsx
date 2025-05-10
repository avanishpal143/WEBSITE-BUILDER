import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { 
  Type, 
  Image, 
  CircleIcon, 
  Square, 
  Columns, 
  ListOrdered, 
  PhoneCall, 
  Map
} from 'lucide-react';

const ELEMENT_TEMPLATES = [
  {
    id: 'template-heading',
    type: 'heading',
    name: 'Heading',
    icon: <Type className="h-4 w-4" />,
    defaultProperties: {
      text: 'New Heading',
      level: 'h2',
      align: 'left'
    }
  },
  {
    id: 'template-paragraph',
    type: 'paragraph',
    name: 'Paragraph',
    icon: <ListOrdered className="h-4 w-4" />,
    defaultProperties: {
      text: 'New paragraph text. Click to edit.',
      align: 'left'
    }
  },
  {
    id: 'template-image',
    type: 'image',
    name: 'Image',
    icon: <Image className="h-4 w-4" />,
    defaultProperties: {
      src: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Image description',
      width: '100%'
    }
  },
  {
    id: 'template-button',
    type: 'button',
    name: 'Button',
    icon: <CircleIcon className="h-4 w-4" />,
    defaultProperties: {
      text: 'Click Me',
      link: '#',
      variant: 'primary',
      size: 'medium'
    }
  },
  {
    id: 'template-section',
    type: 'section',
    name: 'Section',
    icon: <Square className="h-4 w-4" />,
    defaultProperties: {
      backgroundColor: '#ffffff',
      padding: 'medium',
      borderRadius: 'none'
    }
  },
  {
    id: 'template-columns',
    type: 'columns',
    name: 'Columns',
    icon: <Columns className="h-4 w-4" />,
    defaultProperties: {
      columns: 2,
      gap: 'medium'
    }
  },
  {
    id: 'template-contact',
    type: 'contact',
    name: 'Contact Form',
    icon: <PhoneCall className="h-4 w-4" />,
    defaultProperties: {
      title: 'Contact Us',
      submitButtonText: 'Send'
    }
  },
  {
    id: 'template-map',
    type: 'map',
    name: 'Map',
    icon: <Map className="h-4 w-4" />,
    defaultProperties: {
      location: 'New York',
      zoom: 10,
      height: '300px'
    }
  }
];

interface DraggableTemplateProps {
  template: typeof ELEMENT_TEMPLATES[0];
}

const DraggableTemplate: React.FC<DraggableTemplateProps> = ({ template }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: template.id,
    data: {
      type: template.type,
      isTemplate: true,
      defaultProperties: template.defaultProperties
    }
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`flex items-center space-x-2 p-3 mb-2 bg-white rounded-md border border-neutral-200 cursor-move transition-all hover:border-primary-400 hover:shadow-sm ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <div className="flex-shrink-0 text-neutral-500">
        {template.icon}
      </div>
      <span className="text-sm">{template.name}</span>
    </div>
  );
};

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white border-r border-neutral-200 overflow-y-auto flex-shrink-0">
      <div className="p-4">
        <h2 className="font-medium text-lg mb-4">Elements</h2>
        <div className="space-y-1">
          {ELEMENT_TEMPLATES.map((template) => (
            <DraggableTemplate key={template.id} template={template} />
          ))}
        </div>
      </div>
    </div>
  );
};