export default class Words {
  count(phrase: string): Map<string, number> {
    const counts: Map<string, number> = new Map();
    phrase
      .toLowerCase()
      .split(/\s/)
      .filter((word) => word && word.length > 0)
      .forEach((word) => counts.set(word, (counts.get(word) || 0) + 1)
    );
    return counts;
  }
}