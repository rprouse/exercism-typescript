export default class Panagram {
  private sentence: string;

  constructor(sentence: string) {
    this.sentence = sentence.toLowerCase();
  }

  isPangram(): boolean {
    const a = 'a'.charCodeAt(0);
    const z = 'z'.charCodeAt(0);

    for (let ascii = a; ascii <= z; ascii++) {
      const char = String.fromCharCode(ascii);
      if (!this.sentence.includes(char))
        return false;
    }
    return true;
  }
}