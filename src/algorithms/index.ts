import { AlgorithmFunction } from '../types';
import { bubbleSort } from './bubbleSort';
import { quickSort } from './quickSort';
import { mergeSort } from './mergeSort';
import { insertionSort } from './insertionSort';

const algorithms: { [key: string]: AlgorithmFunction } = {
  'Bubble Sort': bubbleSort,
  'Quick Sort': quickSort,
  'Merge Sort': mergeSort,
  'Insertion Sort': insertionSort,
};

export default algorithms;
