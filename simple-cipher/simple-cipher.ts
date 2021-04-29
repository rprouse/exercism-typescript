const A = 'a'.charCodeAt(0);

const getRandomInt = (max: number): number =>
  Math.floor(Math.random() * Math.floor(max));

const randomKey = (): string =>
Array.from(Array(100).keys())
    .map(_ => String.fromCharCode(A + getRandomInt(26)))
    .join('');

class SimpleCipher {
  key: string;

  constructor(key?: string) {
    this.key = key ?? randomKey();
  }

  encode = (text: string): string =>
    text.split('')
      .map((c, i) => {
        const enc = c.charCodeAt(0) +
          this.key.charCodeAt(i % this.key.length) - 2 * A;
        return String.fromCharCode(enc % 26 + A);
      })
      .join('');

  decode = (text: string): string =>
    text.split('')
      .map((c, i) => {
        let dec = c.charCodeAt(0) - this.key.charCodeAt(i % this.key.length);
        if (dec < 0)
          dec += 26;
        return String.fromCharCode(A + dec);
      })
      .join('');
}

export default SimpleCipher
