export default class Anagram {
  constructor(private word: string) {}

  matches = (...words: string[]): string[] =>
    words.filter((w) => this.isAnagram(w));

  private sortLetters = (str: string): string =>
    str.toLowerCase().split('').sort().join('');

  private isAnagram = (test: string): boolean =>
    this.word.toLowerCase() !== test.toLowerCase() &&
    this.sortLetters(this.word) === this.sortLetters(test);
}