'use client';

import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const FlowChart = ({ algorithmName }: { algorithmName: string }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const charts: { [key: string]: string } = {
    'Bubble Sort': `
      graph TD;
      Start-->B{Is array sorted?};
      B-- No -->C[Compare adjacent elements];
      C-->D{Is left > right?};
      D-- Yes -->E[Swap elements];
      D-- No -->F[Move to next pair];
      E-->F;
      F-->B;
      B-- Yes -->End[Array is sorted];
    `,
    'Quick Sort': `
      graph TD;
      Start-->A[Choose pivot];
      A-->B[Partition array];
      B-->C{Left side};
      B-->D{Right side};
      C-->QuickSortLeft[Quick Sort Left];
      D-->QuickSortRight[Quick Sort Right];
      QuickSortLeft-->End;
      QuickSortRight-->End;
    `,
    'Merge Sort': `
      graph TD;
      Start-->A[Divide array];
      A-->B[Recursively divide];
      B-->C[Merge halves];
      C-->D{Is array fully merged?};
      D-- No -->B;
      D-- Yes -->End[Array is sorted];
    `,
    'Insertion Sort': `
      graph TD;
      Start-->A[Pick element];
      A-->B{Compare with left elements};
      B-- Yes -->C[Shift elements];
      C-->B;
      B-- No -->D[Insert element];
      D-->E{More elements left?};
      E-- Yes -->A;
      E-- No -->End[Array is sorted];
    `,
  };

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true, theme: 'dark' });
    if (chartRef.current) {
      chartRef.current.innerHTML = charts[algorithmName] || '';
      mermaid.contentLoaded();
    }
  }, [algorithmName]);

  return (
    <div className="flex-1 p-4">
      <h2 className="text-center font-bold mb-2">{algorithmName} Flowchart</h2>
      <div className="border border-zinc-700 rounded p-2 bg-zinc-800">
        <div ref={chartRef} className="mermaid"></div>
      </div>
    </div>
  );
};

export default FlowChart;
