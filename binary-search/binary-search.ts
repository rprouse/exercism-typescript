export default class BinarySearch {
  public array?: number[];

  constructor(array: number[])
  {
    // Check if the array is sorted
    const sorted = array.slice().sort((a, b) => a - b);
    if (sorted.some((val, idx) => array[idx] !== val))
      return;

    this.array = array;
  }

  indexOf = (val: number): number => {
    if (this.array !== undefined && this.array !== null) {
      let start = 0;
      let end = this.array?.length - 1;
      let middle = Math.floor(end / 2);
      while (start < end) {
        if (val === this.array[middle]) {
          return middle;
        } else if (val < this.array[middle]) {
          end = middle - 1;
        } else {
          start = middle + 1;
        }
        middle = Math.floor((end - start) / 2) + start;
      }
    }
    return -1;
  };
}
