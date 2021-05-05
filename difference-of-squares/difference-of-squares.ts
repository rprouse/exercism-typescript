const range = (start: number, end: number): number[] =>
  Array.from({length: (end - start)}, (_, k) => k + start);

export default class Squares {
  squareOfSum: number;
  sumOfSquares: number;
  difference: number;

  constructor(count: number) {
    const array = range(1, count + 1);
    this.squareOfSum = array.reduce((prev, cur) => prev + cur) ** 2;
    this.sumOfSquares = array.reduce((prev, cur) => prev + cur ** 2);
    this.difference = this.squareOfSum - this.sumOfSquares;
  }
}