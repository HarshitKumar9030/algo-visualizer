'use client';

import { createContext, useState, useContext } from 'react';
import { ElementType } from '../types';

interface AlgorithmContextType {
  elements: ElementType[];
  setElements: React.Dispatch<React.SetStateAction<ElementType[]>>;
  selectedAlgorithm: string;
  setSelectedAlgorithm: React.Dispatch<React.SetStateAction<string>>;
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlgorithmContext = createContext<AlgorithmContextType | undefined>(
  undefined
);

export const AlgorithmProvider = ({ children }: { children: React.ReactNode }) => {
  const [elements, setElements] = useState<ElementType[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState<string>('Bubble Sort');
  const [speed, setSpeed] = useState<number>(100);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  return (
    <AlgorithmContext.Provider
      value={{
        elements,
        setElements,
        selectedAlgorithm,
        setSelectedAlgorithm,
        speed,
        setSpeed,
        isRunning,
        setIsRunning,
      }}
    >
      {children}
    </AlgorithmContext.Provider>
  );
};

export const useAlgorithmContext = () => {
  const context = useContext(AlgorithmContext);
  if (!context) {
    throw new Error(
      'useAlgorithmContext must be used within AlgorithmProvider'
    );
  }
  return context;
};
