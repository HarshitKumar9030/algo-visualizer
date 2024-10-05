import { ElementType } from '../types';

export const quickSort = async (
  array: ElementType[],
  setArray: React.Dispatch<React.SetStateAction<ElementType[]>>,
  speed: number,
  isRunningRef: React.MutableRefObject<boolean>,
  low = 0,
  high = array.length - 1
) => {
  if (low < high && isRunningRef.current) {
    const pi = await partition(
      array,
      setArray,
      speed,
      isRunningRef,
      low,
      high
    );
    await quickSort(array, setArray, speed, isRunningRef, low, pi - 1);
    await quickSort(array, setArray, speed, isRunningRef, pi + 1, high);
  } else if (low === high && isRunningRef.current) {
    array[low].state = 'sorted';
    setArray([...array]);
  }
};

const partition = async (
  array: ElementType[],
  setArray: React.Dispatch<React.SetStateAction<ElementType[]>>,
  speed: number,
  isRunningRef: React.MutableRefObject<boolean>,
  low: number,
  high: number
): Promise<number> => {
  const pivot = array[high];
  pivot.state = 'comparing';
  let i = low - 1;
  for (let j = low; j < high && isRunningRef.current; j++) {
    array[j].state = 'comparing';
    setArray([...array]);
    await new Promise((res) => setTimeout(res, speed));
    if (array[j].value < pivot.value) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
      array[i].state = 'swapped';
      array[j].state = 'swapped';
      setArray([...array]);
      await new Promise((res) => setTimeout(res, speed));
    }
    array[j].state = 'default';
  }
  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  pivot.state = 'default';
  array[i + 1].state = 'sorted';
  setArray([...array]);
  await new Promise((res) => setTimeout(res, speed));
  return i + 1;
};
