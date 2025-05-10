import React from 'react';
import { useStore } from '../store/store';
import { ElementRenderer } from './elements/ElementRenderer';
import { useDroppable } from '@dnd-kit/core';

interface CanvasSectionProps {
  elementId: string;
}

export const CanvasSection: React.FC<CanvasSectionProps> = ({ elementId }) => {
  const { elements, selectedElement, setSelectedElement, removeElement } = useStore();
  
  const element = elements.find(el => el.id === elementId);
  if (!element) return null;
  
  const isSelected = selectedElement === elementId;
  
  const { setNodeRef } = useDroppable({
    id: elementId,
  });
  
  const childElements = elements.filter(el => el.containerId === elementId);
  
  const handleElementClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedElement(elementId);
  };
  
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeElement(elementId);
  };
  
  return (
    <div 
      className={`editor-element mb-4 ${isSelected ? 'selected' : ''}`}
      onClick={handleElementClick}
    >
      <ElementRenderer element={element} />
      
      {isSelected && (
        <div className="editor-element-handle">
          <div className="flex space-x-1">
            <button 
              className="p-1 hover:bg-primary-600 rounded"
              onClick={handleRemove}
            >
              ✕
            </button>
          </div>
        </div>
      )}
      
      {(element.type === 'section' || element.type === 'columns') && (
        <div ref={setNodeRef} className="p-2">
          {childElements.length === 0 ? (
            <div className="drop-indicator h-24 text-sm">
              Drag elements here
            </div>
          ) : (
            <div className={`${element.type === 'columns' ? 'grid gap-4' : ''}`} 
              style={element.type === 'columns' ? 
                { gridTemplateColumns: `repeat(${element.properties.columns || 2}, 1fr)` } : {}
              }
            >
              {childElements.map(child => (
                <CanvasSection key={child.id} elementId={child.id} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};