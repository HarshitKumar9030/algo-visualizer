'use client';

import ControlPanel from './ControlPanel';
import VisualizationCanvas from './VisualizationCanvas';
import FlowChart from './FlowChart';
import { useAlgorithmContext } from '../contexts/AlgorithmContext';
import { useEffect } from 'react';

const Visualizer = () => {
  const { setElements, selectedAlgorithm } = useAlgorithmContext();

  useEffect(() => {
    generateNewArray();
  }, []);

  const generateNewArray = () => {
    const array = Array.from({ length: 50 }, () => ({
      value: Math.floor(Math.random() * 100),
      state: 'default',
    }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setElements(array as any[]);
  };

  return (
    <div className="w-full max-w-5xl bg-zinc-800 rounded-lg shadow-lg p-6">
      <ControlPanel generateNewArray={generateNewArray} />
      <div className="flex flex-col lg:flex-row mt-4">
        <VisualizationCanvas />
        <FlowChart algorithmName={selectedAlgorithm} />
      </div>
    </div>
  );
};

export default Visualizer;
