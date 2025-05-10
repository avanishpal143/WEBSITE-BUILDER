// Base element type with common properties
export interface BaseElement {
  id: string;
  type: string;
  containerId?: string;
}

// Heading element
export interface HeadingElementType extends BaseElement {
  type: 'heading';
  properties: {
    text: string;
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    align: 'left' | 'center' | 'right';
  };
}

// Paragraph element
export interface ParagraphElementType extends BaseElement {
  type: 'paragraph';
  properties: {
    text: string;
    align: 'left' | 'center' | 'right';
  };
}

// Image element
export interface ImageElementType extends BaseElement {
  type: 'image';
  properties: {
    src: string;
    alt: string;
    width: string;
  };
}

// Button element
export interface ButtonElementType extends BaseElement {
  type: 'button';
  properties: {
    text: string;
    link: string;
    variant: 'primary' | 'secondary' | 'accent';
    size: 'small' | 'medium' | 'large';
  };
}

// Section element
export interface SectionElementType extends BaseElement {
  type: 'section';
  properties: {
    backgroundColor: string;
    padding: 'small' | 'medium' | 'large';
    borderRadius: 'none' | 'small' | 'medium' | 'large';
  };
}

// Columns element
export interface ColumnsElementType extends BaseElement {
  type: 'columns';
  properties: {
    columns: number;
    gap: 'small' | 'medium' | 'large';
  };
}

// Contact form element
export interface ContactElementType extends BaseElement {
  type: 'contact';
  properties: {
    title: string;
    submitButtonText: string;
  };
}

// Map element
export interface MapElementType extends BaseElement {
  type: 'map';
  properties: {
    location: string;
    zoom: number;
    height: string;
  };
}

// Union type of all element types
export type ElementTypes =
  | HeadingElementType
  | ParagraphElementType
  | ImageElementType
  | ButtonElementType
  | SectionElementType
  | ColumnsElementType
  | ContactElementType
  | MapElementType;