import { useAlgorithmContext } from '../contexts/AlgorithmContext';
import { useRef } from 'react';
import algorithms from '../algorithms';

export const useAlgorithm = () => {
  const {
    elements,
    setElements,
    selectedAlgorithm,
    speed,
    setIsRunning,
  } = useAlgorithmContext();
  const isRunningRef = useRef(false);

  const runAlgorithm = async () => {
    setIsRunning(true);
    isRunningRef.current = true;
    const algorithmFunction = algorithms[selectedAlgorithm];
    if (algorithmFunction) {
      await algorithmFunction([...elements], setElements, speed, isRunningRef);
    }
    setIsRunning(false);
    isRunningRef.current = false;
  };

  return { runAlgorithm };
};
