'use client';

import { useAlgorithmContext } from '../contexts/AlgorithmContext';
import { useAlgorithm } from '../hooks/useAlgorithm';

const ControlPanel = ({
  generateNewArray,
}: {
  generateNewArray: () => void;
}) => {
  const {
    selectedAlgorithm,
    setSelectedAlgorithm,
    speed,
    setSpeed,
    isRunning,
  } = useAlgorithmContext();
  const { runAlgorithm } = useAlgorithm();

  const algorithms = [
    'Bubble Sort',
    'Quick Sort',
    'Merge Sort',
    'Insertion Sort',
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <select
        value={selectedAlgorithm}
        onChange={(e) => setSelectedAlgorithm(e.target.value)}
        disabled={isRunning}
        className="bg-zinc-700 text-zinc-100 border border-zinc-600 rounded p-2 mb-2 lg:mb-0"
      >
        {algorithms.map((algo) => (
          <option key={algo}>{algo}</option>
        ))}
      </select>
      <div className="flex items-center mb-2 lg:mb-0">
        <label className="mr-2">Speed:</label>
        <input
          type="range"
          min="10"
          max="1000"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          disabled={isRunning}
          className="accent-zinc-500"
        />
      </div>
      <div className="flex items-center">
        <button
          onClick={runAlgorithm}
          disabled={isRunning}
          className="bg-green-600 text-zinc-100 px-4 py-2 rounded mr-2 disabled:bg-zinc-600"
        >
          {isRunning ? 'Running...' : 'Start'}
        </button>
        <button
          onClick={generateNewArray}
          disabled={isRunning}
          className="bg-blue-600 text-zinc-100 px-4 py-2 rounded disabled:bg-zinc-600"
        >
          New Array
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
