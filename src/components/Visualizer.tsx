'use client'

import { useEffect } from 'react'
import { useAlgorithmContext } from '../contexts/AlgorithmContext'
import Controls from './Controls'
import VisualizationCanvas from './VisualizationCanvas'
import FlowChart from './FlowChart'

export default function Visualizer() {
  const { setElements, selectedAlgorithm } = useAlgorithmContext()

  useEffect(() => {
    generateNewArray()
  }, [])

  const generateNewArray = () => {
    const array = Array.from({ length: 50 }, () => ({
      value: Math.floor(Math.random() * 100),
      state: 'default',
    }))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setElements(array as any[])
  }

  return (
    <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6">
      <Controls generateNewArray={generateNewArray} />
      <div className="flex flex-col lg:flex-row mt-4">
        <VisualizationCanvas />
        <FlowChart algorithmName={selectedAlgorithm} />
      </div>
    </div>
  )
}