'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

export default function FlowChart({ algorithmName }: { algorithmName: string }) {
  const chartRef = useRef<HTMLDivElement>(null)

  const charts: { [key: string]: string } = {
    'Bubble Sort': `
      graph TD;
      Start-->Compare["Compare adjacent elements"];
      Compare-- Yes -->Swap["Swap if out of order"];
      Swap-->Next["Move to next pair"];
      Next-->Compare;
      Compare-- No -->End["Array is sorted"];
    `,
    'Quick Sort': `
      graph TD;
      Start-->Partition["Partition the array"];
      Partition-->QuickSortLeft["QuickSort left subarray"];
      QuickSortLeft-->QuickSortRight["QuickSort right subarray"];
      QuickSortRight-->End["Array is sorted"];
    `,
    'Merge Sort': `
      graph TD;
      Start-->Divide["Divide array into halves"];
      Divide-->Conquer["Recursively sort halves"];
      Conquer-->Combine["Merge sorted halves"];
      Combine-->End["Array is sorted"];
    `,
    'Insertion Sort': `
      graph TD;
      Start-->Pick["Pick next element"];
      Pick-->Compare["Compare with sorted part"];
      Compare-- Yes -->Shift["Shift larger elements"];
      Shift-->Insert["Insert element"];
      Insert-->Pick;
      Compare-- No -->Pick;
    `,
  }

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true })
    if (chartRef.current) {
      chartRef.current.innerHTML = charts[algorithmName] || ''
      mermaid.contentLoaded()
    }
  }, [algorithmName])

  return (
    <div className="flex-1 p-4">
      <h2 className="text-center font-bold mb-2">{algorithmName} Flowchart</h2>
      <div className="border rounded p-2 bg-white">
        <div ref={chartRef} className="mermaid"></div>
      </div>
    </div>
  )
}