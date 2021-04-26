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

const range = (start: number, end: number): number[] =>
  Array.from({length: (end - start)}, (_, k) => k + start);

export default class FoodChain {
  static verse(verse: number): string {
    verse--;
    let song = `I know an old lady who swallowed a ${food[verse]}.\n`;
    if (verse >= 1) song += lines[verse - 1] + '\n';

    if (verse === 7) return song; // Last verse kills her

    for (let idx = verse; idx > 0; idx--) {
      song += `She swallowed the ${food[idx]} to catch the ${food[idx - 1]}`;
      if (idx === 2) {
        song += ' that wriggled and jiggled and tickled inside her';
      }
      song += '.\n';
    }
    return song + "I don't know why she swallowed the fly. Perhaps she'll die.\n";
  }

  static verses = (start: number, end: number): string =>
    range(start, end + 1).map(v => FoodChain.verse(v)).join('\n');
}