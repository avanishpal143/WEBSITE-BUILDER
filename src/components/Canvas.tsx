import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { useStore } from '../store/store';
import { ElementRenderer } from './elements/ElementRenderer';
import { CanvasSection } from './CanvasSection';

export const Canvas: React.FC = () => {
  const { elements, selectedElement, setSelectedElement } = useStore();
  
  const { setNodeRef } = useDroppable({
    id: 'canvas-main',
  });

  const rootElements = elements.filter(el => el.containerId === 'canvas-main' || !el.containerId);

  return (
    <div 
      className="mx-auto bg-white rounded-lg shadow-md min-h-[800px] max-w-5xl"
      onClick={() => setSelectedElement(null)}
    >
      <div 
        ref={setNodeRef} 
        className="p-6"
      >
        {rootElements.length === 0 ? (
          <div className="drop-indicator h-48">
            Drag and drop elements here to build your website
          </div>
        ) : (
          <div>
            {rootElements.map((element) => (
              <CanvasSection key={element.id} elementId={element.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};