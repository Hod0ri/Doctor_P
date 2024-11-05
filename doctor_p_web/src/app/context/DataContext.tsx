// context/DataContext.tsx
'use client';
import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface ImageContextType {
  imageData: string | null;
  setImageData: (imageData: string | null) => void;
}
interface DataContextType {
  data: object | null;
  setData: Dispatch<SetStateAction<object | null>>;
}
const defaultValue: DataContextType = {
  data: null,
  setData: () => {}, // 기본값으로 빈 함수
};

// 타입 명시 추가
const DataContext = createContext<DataContextType | null>(defaultValue);
const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<object | null>(null);
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
  const context = useContext(DataContext);
  if (context === null) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
