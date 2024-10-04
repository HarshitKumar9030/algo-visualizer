'use client';

import { useAlgorithmContext } from '../contexts/AlgorithmContext';
import { useAlgorithm } from '../hooks/useAlgorithm';

const ControlPanel = ({ generateNewArray }: { generateNewArray: () => void }) => {
  const {
    selectedAlgorithm,
    setSelectedAlgorithm,
    speed,
    setSpeed,
    isRunning,
  } = useAlgorithmContext();
  const { runAlgorithm } = useAlgorithm();

  const algorithms = ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Insertion Sort'];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <select
        value={selectedAlgorithm}
        onChange={(e) => setSelectedAlgorithm(e.target.value)}
        disabled={isRunning}
        className="border rounded p-2 mb-2 lg:mb-0"
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
        />
      </div>
      <div className="flex items-center">
        <button
          onClick={runAlgorithm}
          disabled={isRunning}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 disabled:bg-gray-400"
        >
          {isRunning ? 'Running...' : 'Start'}
        </button>
        <button
          onClick={generateNewArray}
          disabled={isRunning}
          className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          New Array
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
