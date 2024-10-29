// context/DataContext.tsx
'use client';
import { createContext, useContext, useState } from 'react';

interface ImageContextType {
  imageData: string | null;
  setImageData: (imageData: string | null) => void;
}

const DataContext = createContext(null);
const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [imageData, setImageData] = useState<string | null>(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <ImageContext.Provider value={{ imageData, setImageData }}>
        {children}
      </ImageContext.Provider>
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
