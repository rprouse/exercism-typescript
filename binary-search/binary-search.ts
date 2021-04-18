export default class BinarySearch {
  public array?: number[];

  constructor(array: number[])
  {
    // Check if the array is sorted
    const sorted = array.slice().sort((a, b) => a - b);
    if (sorted.every((val, idx) => array[idx] === val))
      this.array = array;
  }

  indexOf = (val: number): number => {
    if (this.array !== undefined && this.array !== null) {
      let start = 0;
      let end = this.array.length - 1;
      while (start < end) {
        const middle = Math.floor((end - start) / 2) + start;
        if (val === this.array[middle]) {
          return middle;
        } else if (val < this.array[middle]) {
          end = middle - 1;
        } else {
          start = middle + 1;
        }
      }
    }
    return -1;
  };
}
