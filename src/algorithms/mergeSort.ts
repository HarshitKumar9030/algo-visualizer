import { ElementType } from '../types';

export const mergeSort = async (
  array: ElementType[],
  setArray: React.Dispatch<React.SetStateAction<ElementType[]>>,
  speed: number,
  isRunningRef: React.MutableRefObject<boolean>
) => {
  await divide(array, setArray, speed, isRunningRef, 0, array.length - 1);
};

const divide = async (
  array: ElementType[],
  setArray: React.Dispatch<React.SetStateAction<ElementType[]>>,
  speed: number,
  isRunningRef: React.MutableRefObject<boolean>,
  left: number,
  right: number
) => {
  if (left < right && isRunningRef.current) {
    const mid = Math.floor((left + right) / 2);
    await divide(array, setArray, speed, isRunningRef, left, mid);
    await divide(array, setArray, speed, isRunningRef, mid + 1, right);
    await merge(array, setArray, speed, isRunningRef, left, mid, right);
  }
};

const merge = async (
  array: ElementType[],
  setArray: React.Dispatch<React.SetStateAction<ElementType[]>>,
  speed: number,
  isRunningRef: React.MutableRefObject<boolean>,
  left: number,
  mid: number,
  right: number
) => {
  const leftArray = array.slice(left, mid + 1);
  const rightArray = array.slice(mid + 1, right + 1);

  let i = 0,
    j = 0,
    k = left;
  while (i < leftArray.length && j < rightArray.length && isRunningRef.current) {
    array[k].state = 'comparing';
    setArray([...array]);
    await new Promise((res) => setTimeout(res, speed));
    if (leftArray[i].value <= rightArray[j].value) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    array[k].state = 'swapped';
    setArray([...array]);
    await new Promise((res) => setTimeout(res, speed));
    array[k].state = 'default';
    k++;
  }
  while (i < leftArray.length && isRunningRef.current) {
    array[k] = leftArray[i];
    array[k].state = 'swapped';
    setArray([...array]);
    await new Promise((res) => setTimeout(res, speed));
    array[k].state = 'default';
    i++;
    k++;
  }
  while (j < rightArray.length && isRunningRef.current) {
    array[k] = rightArray[j];
    array[k].state = 'swapped';
    setArray([...array]);
    await new Promise((res) => setTimeout(res, speed));
    array[k].state = 'default';
    j++;
    k++;
  }
  if (left === 0 && right === array.length - 1) {
    array.forEach((el) => (el.state = 'sorted'));
    setArray([...array]);
  }
};
