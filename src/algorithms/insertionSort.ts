import { ElementType } from '../types';

export const insertionSort = async (
  array: ElementType[],
  setArray: React.Dispatch<React.SetStateAction<ElementType[]>>,
  speed: number,
  isRunningRef: React.MutableRefObject<boolean>
) => {
  const n = array.length;
  for (let i = 1; i < n && isRunningRef.current; i++) {
    const key = array[i];
    let j = i - 1;
    key.state = 'comparing';
    while (j >= 0 && array[j].value > key.value && isRunningRef.current) {
      array[j + 1] = array[j];
      array[j].state = 'swapped';
      setArray([...array]);
      await new Promise((res) => setTimeout(res, speed));
      array[j].state = 'default';
      j--;
    }
    array[j + 1] = key;
    array[j + 1].state = 'swapped';
    setArray([...array]);
    await new Promise((res) => setTimeout(res, speed));
    array[j + 1].state = 'default';
    key.state = 'default';
  }
  array.forEach((el) => (el.state = 'sorted'));
  setArray([...array]);
};
