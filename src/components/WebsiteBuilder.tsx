import React, { useState } from 'react';
import { DndContext, DragOverlay, useSensor, useSensors, PointerSensor, closestCenter } from '@dnd-kit/core';
import { Sidebar } from './Sidebar';
import { Canvas } from './Canvas';
import { PropertiesPanel } from './PropertiesPanel';
import { Header } from './Header';
import { useStore } from '../store/store';
import { ElementRenderer } from './elements/ElementRenderer';

export const WebsiteBuilder: React.FC = () => {
  const { 
    addElement,
    selectedElement,
    setSelectedElement,
    elements,
    setDraggingElement,
    draggingElement
  } = useStore();
  
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  const handleDragStart = (event: any) => {
    const { active } = event;
    setActiveId(active.id);
    
    // Handle dragging from sidebar (new element)
    if (active.data?.current?.type && active.data?.current?.isTemplate) {
      setDraggingElement({
        id: active.id,
        type: active.data.current.type,
        properties: active.data.current.defaultProperties || {}
      });
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    setActiveId(null);
    setDraggingElement(null);

    if (over && active.data?.current?.isTemplate) {
      const newElement = {
        id: `element-${Date.now()}`,
        type: active.data.current.type,
        properties: active.data.current.defaultProperties || {},
        containerId: over.id
      };
      
      addElement(newElement);
      setSelectedElement(newElement.id);
    }
  };

  const handleDragCancel = () => {
    setActiveId(null);
    setDraggingElement(null);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
          collisionDetection={closestCenter}
        >
          <Sidebar />
          
          <div className="flex-1 overflow-auto p-4 bg-neutral-100">
            <Canvas />
          </div>
          
          {selectedElement && (
            <PropertiesPanel />
          )}
          
          <DragOverlay className="drag-overlay">
            {activeId && draggingElement && (
              <ElementRenderer 
                element={draggingElement} 
                isOverlay 
                className="w-full h-full opacity-70"
              />
            )}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
};