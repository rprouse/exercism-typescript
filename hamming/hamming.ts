export default class Hamming {
  compute(dna1: string, dna2: string): number {
    if (dna1.length !== dna2.length) {
      throw Error('DNA strands must be of equal length.');
    }
    return dna1
      .split('')
      .filter((ltr, idx) => ltr !== dna2[idx])
      .length;
  }
}