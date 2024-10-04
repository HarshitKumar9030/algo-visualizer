export interface ElementType {
    value: number;
    state: 'default' | 'comparing' | 'swapped' | 'sorted';
  }
  
  export type AlgorithmFunction = (
    array: ElementType[],
    setArray: React.Dispatch<React.SetStateAction<ElementType[]>>,
    speed: number,
    isRunningRef: React.MutableRefObject<boolean>
  ) => Promise<void>;
  