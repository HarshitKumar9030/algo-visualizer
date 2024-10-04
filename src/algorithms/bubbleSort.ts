import { ElementType } from '../types';

export const bubbleSort = async (
  array: ElementType[],
  setArray: React.Dispatch<React.SetStateAction<ElementType[]>>,
  speed: number,
  isRunningRef: React.MutableRefObject<boolean>
) => {
  const n = array.length;
  for (let i = 0; i < n && isRunningRef.current; i++) {
    for (let j = 0; j < n - i - 1 && isRunningRef.current; j++) {
      array[j].state = 'comparing';
      array[j + 1].state = 'comparing';
      setArray([...array]);
      await new Promise((res) => setTimeout(res, speed));
      if (array[j].value > array[j + 1].value) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        array[j].state = 'swapped';
        array[j + 1].state = 'swapped';
        setArray([...array]);
        await new Promise((res) => setTimeout(res, speed));
      }
      array[j].state = 'default';
      array[j + 1].state = 'default';
    }
    array[n - i - 1].state = 'sorted';
  }
  setArray([...array]);
};
