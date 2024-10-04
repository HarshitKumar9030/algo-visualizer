'use client'

import { useAlgorithmContext } from '../contexts/AlgorithmContext'

export default function VisualizationCanvas() {
  const { elements } = useAlgorithmContext()

  return (
    <div className="flex-1 flex items-end justify-center h-80 border p-4 bg-gray-50">
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
              : 'bg-blue-500'
          }`}
          style={{ height: `${el.value}%` }}
        ></div>
      ))}
    </div>
  )
}