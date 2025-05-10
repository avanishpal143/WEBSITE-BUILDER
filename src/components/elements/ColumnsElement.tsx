import React from 'react';
import { ColumnsElementType } from '../../types/element';

interface ColumnsElementProps {
  element: ColumnsElementType;
  className?: string;
}

export const ColumnsElement: React.FC<ColumnsElementProps> = ({ element, className }) => {
  const { properties } = element;
  const { columns, gap } = properties;
  
  const getGapClass = () => {
    switch (gap) {
      case 'small':
        return 'gap-2';
      case 'medium':
        return 'gap-4';
      case 'large':
        return 'gap-8';
      default:
        return 'gap-4';
    }
  };
  
  const numCols = columns || 2;
  
  return (
    <div className={`${className || ''}`}>
      <div
        className={`grid ${getGapClass()}`}
        style={{ gridTemplateColumns: `repeat(${numCols}, 1fr)` }}
      >
        {/* The child elements will be rendered by the CanvasSection component */}
      </div>
    </div>
  );
};