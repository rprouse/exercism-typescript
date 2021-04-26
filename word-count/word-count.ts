export default class Words {
  count(phrase: string): Map<string, number> {
    const counts: Map<string, number> = new Map();
    phrase
      .toLowerCase()
      .split(/\s/)
      .filter((word) => word && word.length > 0)
      .forEach((word) =>
        counts.set(word, counts.has(word) ? counts.get(word)! + 1 : 1)
    );
    return counts;
  }
}