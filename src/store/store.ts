import { create } from 'zustand';
import { ElementTypes } from '../types/element';

interface HistoryState {
  past: ElementTypes[][];
  future: ElementTypes[][];
}

interface WebsiteBuilderState {
  elements: ElementTypes[];
  selectedElement: string | null;
  draggingElement: ElementTypes | null;
  previewMode: 'desktop' | 'mobile' | 'preview';
  history: HistoryState;
  canUndo: boolean;
  canRedo: boolean;
  
  setElements: (elements: ElementTypes[]) => void;
  addElement: (element: ElementTypes) => void;
  updateElement: (element: ElementTypes) => void;
  removeElement: (id: string) => void;
  setSelectedElement: (id: string | null) => void;
  setDraggingElement: (element: ElementTypes | null) => void;
  setPreviewMode: (mode: 'desktop' | 'mobile' | 'preview') => void;
  saveWebsite: () => void;
  loadWebsite: () => void;
  undo: () => void;
  redo: () => void;
}

export const useStore = create<WebsiteBuilderState>((set, get) => ({
  elements: [],
  selectedElement: null,
  draggingElement: null,
  previewMode: 'desktop',
  history: {
    past: [],
    future: []
  },
  canUndo: false,
  canRedo: false,
  
  setElements: (elements) => {
    const newPast = [...get().history.past, get().elements];
    
    set({
      elements,
      history: {
        past: newPast,
        future: []
      },
      canUndo: newPast.length > 0,
      canRedo: false
    });
  },
  
  addElement: (element) => {
    const newElements = [...get().elements, element];
    const newPast = [...get().history.past, get().elements];
    
    set({
      elements: newElements,
      history: {
        past: newPast,
        future: []
      },
      canUndo: true,
      canRedo: false
    });
  },
  
  updateElement: (updatedElement) => {
    const newElements = get().elements.map(element => 
      element.id === updatedElement.id ? updatedElement : element
    );
    
    const newPast = [...get().history.past, get().elements];
    
    set({
      elements: newElements,
      history: {
        past: newPast,
        future: []
      },
      canUndo: true,
      canRedo: false
    });
  },
  
  removeElement: (id) => {
    // Helper function to collect all child IDs recursively
    const getAllChildIds = (parentId: string): string[] => {
      const directChildren = get().elements.filter(el => el.containerId === parentId);
      const childIds = directChildren.map(child => child.id);
      
      // Recursively get all nested children
      return childIds.concat(
        childIds.flatMap(childId => getAllChildIds(childId))
      );
    };
    
    // Get all child elements to remove
    const childIds = getAllChildIds(id);
    const allIdsToRemove = [id, ...childIds];
    
    // Filter out the elements to be removed
    const newElements = get().elements.filter(el => !allIdsToRemove.includes(el.id));
    
    const newPast = [...get().history.past, get().elements];
    
    set({
      elements: newElements,
      selectedElement: null,
      history: {
        past: newPast,
        future: []
      },
      canUndo: true,
      canRedo: false
    });
  },
  
  setSelectedElement: (id) => {
    set({ selectedElement: id });
  },
  
  setDraggingElement: (element) => {
    set({ draggingElement: element });
  },
  
  setPreviewMode: (mode) => {
    set({ previewMode: mode });
  },
  
  saveWebsite: () => {
    // In a real implementation this would save to a database
    const websiteData = {
      elements: get().elements,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('websiteBuilder', JSON.stringify(websiteData));
    console.log('Website saved:', websiteData);
  },
  
  loadWebsite: () => {
    try {
      const savedData = localStorage.getItem('websiteBuilder');
      if (savedData) {
        const websiteData = JSON.parse(savedData);
        set({ 
          elements: websiteData.elements,
          selectedElement: null,
          history: {
            past: [],
            future: []
          },
          canUndo: false,
          canRedo: false
        });
      }
    } catch (error) {
      console.error('Error loading website data:', error);
    }
  },
  
  undo: () => {
    const { past, future } = get().history;
    
    if (past.length === 0) return;
    
    const newPast = [...past];
    const previousState = newPast.pop();
    
    if (!previousState) return;
    
    const newFuture = [get().elements, ...future];
    
    set({
      elements: previousState,
      history: {
        past: newPast,
        future: newFuture
      },
      canUndo: newPast.length > 0,
      canRedo: true
    });
  },
  
  redo: () => {
    const { past, future } = get().history;
    
    if (future.length === 0) return;
    
    const newFuture = [...future];
    const nextState = newFuture.shift();
    
    if (!nextState) return;
    
    const newPast = [...past, get().elements];
    
    set({
      elements: nextState,
      history: {
        past: newPast,
        future: newFuture
      },
      canUndo: true,
      canRedo: newFuture.length > 0
    });
  }
}));