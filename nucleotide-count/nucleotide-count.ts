export default class NucleotideCount {
  A: number;
  C: number;
  G: number;
  T: number;

  constructor() {
    this.A = this.C = this.G = this.T = 0;
  }

  static nucleotideCounts(strand: string): NucleotideCount {
    const counts = new NucleotideCount();
    strand.toUpperCase().split('').forEach(c => {
      if(!(c in counts))
        throw Error('Invalid nucleotide in strand');
      counts[c as keyof NucleotideCount]++;
    });
    return counts;
  }
}
