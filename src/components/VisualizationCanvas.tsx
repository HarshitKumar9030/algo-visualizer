'use client';

import { useAlgorithmContext } from '../contexts/AlgorithmContext';

const VisualizationCanvas = () => {
  const { elements } = useAlgorithmContext();

  return (
    <div className="flex-1 flex items-end justify-center h-80 border border-zinc-700 p-4 bg-zinc-900">
      {elements.map((el, idx) => (
        <div
          key={idx}
          className={`mx-0.5 w-1 ${
            el.state === 'sorted'
              ? 'bg-green-500'
              : el.state === 'comparing'
              ? 'bg-red-500'
              : el.state === 'swapped'
              ? 'bg-yellow-500'
              : 'bg-zinc-500'
          }`}
          style={{ height: `${el.value}%` }}
        ></div>
      ))}
    </div>
  );
};

export default VisualizationCanvas;
