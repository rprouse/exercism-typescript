const food = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];

const lines = [
    "It wriggled and jiggled and tickled inside her.",
    "How absurd to swallow a bird!",
    "Imagine that, to swallow a cat!",
    "What a hog, to swallow a dog!",
    "Just opened her throat and swallowed a goat!",
    "I don't know how she swallowed a cow!",
    "She's dead, of course!"
];

export default class FoodChain {
  static verse(v: number): string {
    v = v - 1;
    let song = 'I know an old lady who swallowed a ' + food[v] + '.\n';
    if (v >= 1) song += lines[v - 1] + '\n';

    if (v === 7) return song; // Last verse kills her

    for (let j = v; j > 0; j--) {
      song += 'She swallowed the ' + food[j] + ' to catch the ' + food[j - 1];
      if (j === 2) {
        song += ' that wriggled and jiggled and tickled inside her';
      }
      song += '.\n';
    }
    return song + "I don't know why she swallowed the fly. Perhaps she'll die.\n";
  }

  static verses(i: number, j: number): string {
    let song = '';
    for (let v = i; v <= j; v++) {
      song += FoodChain.verse(v) + '\n';
    }
    return song;
  }
}