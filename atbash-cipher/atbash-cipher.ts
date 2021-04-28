const A = 'a'.charCodeAt(0);
const Z = 'z'.charCodeAt(0);
const ZERO = '0'.charCodeAt(0);
const NINE = '9'.charCodeAt(0);

const isNumeric = (str: string): boolean => {
  const ascii = str.charCodeAt(0);
  return ascii >= ZERO && ascii <= NINE;
}

const isAlphaNumeric = (str: string): boolean => {
  const ascii = str.charCodeAt(0);
  return (ascii >= A && ascii <= Z) ||
         (ascii >= ZERO && ascii <= NINE);
}

const encodeDecode = (str: string): string[] =>
  str.toLowerCase()
  .split('')
  .filter(c => isAlphaNumeric(c))
  .map(c => isNumeric(c) ? c : String.fromCharCode(A + Z - c.charCodeAt(0)));

const insertSpaces = (array: string[]): string[] => {
  for(let idx = 5; idx < array.length; idx += 6) {
    array.splice(idx, 0, ' ');
  }
  return array;
}

export default class AtbashCipher {
  encode(plaintext: string) : string {
    const encrypted = encodeDecode(plaintext);
    return insertSpaces(encrypted).join('');
  }

  decode = (encrypted: string) : string =>
    encodeDecode(encrypted).join('');
}