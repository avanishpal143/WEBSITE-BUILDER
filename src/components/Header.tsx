import React, { useState } from 'react';
import { useStore } from '../store/store';
import { Laptop, Smartphone, Save, PlayCircle, Undo, Redo } from 'lucide-react';

export const Header: React.FC = () => {
  const { saveWebsite, previewMode, setPreviewMode, undo, redo, canUndo, canRedo } = useStore();
  const [isSaving, setIsSaving] = useState(false);
  
  const handleSave = () => {
    setIsSaving(true);
    saveWebsite();
    setTimeout(() => setIsSaving(false), 1000);
  };
  
  return (
    <header className="bg-white border-b border-neutral-200 py-3 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-primary-700 mr-8">Website Builder</h1>
          
          <div className="hidden md:flex items-center space-x-2">
            <button 
              onClick={undo}
              disabled={!canUndo}
              className={`p-2 rounded ${canUndo ? 'hover:bg-neutral-100 text-neutral-700' : 'text-neutral-300'}`}
              title="Undo"
            >
              <Undo className="h-5 w-5" />
            </button>
            
            <button 
              onClick={redo}
              disabled={!canRedo}
              className={`p-2 rounded ${canRedo ? 'hover:bg-neutral-100 text-neutral-700' : 'text-neutral-300'}`}
              title="Redo"
            >
              <Redo className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="bg-neutral-100 p-1 rounded-md flex">
            <button
              onClick={() => setPreviewMode('desktop')}
              className={`p-2 rounded ${previewMode === 'desktop' ? 'bg-white shadow-sm' : 'hover:bg-neutral-50'}`}
              title="Desktop view"
            >
              <Laptop className="h-5 w-5" />
            </button>
            <button
              onClick={() => setPreviewMode('mobile')}
              className={`p-2 rounded ${previewMode === 'mobile' ? 'bg-white shadow-sm' : 'hover:bg-neutral-50'}`}
              title="Mobile view"
            >
              <Smartphone className="h-5 w-5" />
            </button>
          </div>
          
          <button
            onClick={() => setPreviewMode(previewMode === 'preview' ? 'desktop' : 'preview')}
            className={`p-2 rounded-md flex items-center ${
              previewMode === 'preview' ? 'bg-primary-100 text-primary-700' : 'bg-neutral-100 hover:bg-neutral-200'
            }`}
            title="Preview website"
          >
            <PlayCircle className="h-5 w-5 mr-1" />
            <span>{previewMode === 'preview' ? 'Exit Preview' : 'Preview'}</span>
          </button>
          
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="button-primary flex items-center"
          >
            <Save className="h-4 w-4 mr-1" />
            <span>{isSaving ? 'Saving...' : 'Save'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};