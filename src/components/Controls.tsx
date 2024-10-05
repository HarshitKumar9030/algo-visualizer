'use client'

import { useAlgorithmContext } from '../contexts/AlgorithmContext'
import { useAlgorithm } from '../hooks/useAlgorithm'

export default function Controls() {
  const {
    algorithm,
    setAlgorithm,
    speed,
    setSpeed,
    isSorting,
    setIsSorting,
    elements,
    setElements,
    selectedAlgorithm,
    setSelectedAlgorithm
  } = useAlgorithmContext()
  const { sort } = useAlgorithm()

  const generateNewArray = () => {
    const newArray = Array.from({ length: 50 }, () => ({
      value: Math.floor(Math.random() * 100),
      state: 'default',
    }))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setElements(newArray as any[])
  }

  const handleAlgorithmChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAlgorithm(e.target.value)
    setSelectedAlgorithm(e.target.value)
  }

  const handleSort = async () => {
    setIsSorting(true)
    await sort()
    setIsSorting(false)
  }

  return (
    <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
      <select
        value={algorithm}
        onChange={handleAlgorithmChange}
        disabled={isSorting}
        className="border p-2 rounded bg-white"
      >
        <option value="Bubble Sort">Bubble Sort</option>
        <option value="Quick Sort">Quick Sort</option>
        <option value="Merge Sort">Merge Sort</option>
        <option value="Insertion Sort">Insertion Sort</option>
      </select>
      <div className="flex items-center">
        <span className="mr-2">Speed:</span>
        <input
          type="range"
          min="10"
          max="1000"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          disabled={isSorting}
          className="w-32"
        />
      </div>
      <button
        onClick={handleSort}
        disabled={isSorting}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        {isSorting ? 'Sorting...' : 'Start'}
      </button>
      <button
        onClick={generateNewArray}
        disabled={isSorting}
        className="bg-red-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        Reset
      </button>
      <div className="w-full mt-2">
        <p>Current Algorithm: {selectedAlgorithm}</p>
        <p>Array Size: {elements.length}</p>
      </div>
    </div>
  )
}