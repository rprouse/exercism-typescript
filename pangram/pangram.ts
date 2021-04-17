export default class Panagram {
  private sentence: string;
  private readonly alphabet: string[];

  constructor(sentence: string) {
    this.sentence = sentence.toLowerCase();

    // Overkill way to create an array with each letter of the alphabet vs
    // this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const a = 'a'.charCodeAt(0);
    this.alphabet = [...Array(26).keys()].map(k => String.fromCharCode(k + a));
  }

  isPangram = (): boolean =>
    this.alphabet.every(letter => this.sentence.includes(letter));
}