export class ArgumentError { }

export class WordProblem {
  constructor(private question: string) { }

  answer(): number {
    if (!this.question.startsWith('What is '))
      throw new ArgumentError();

    const parts = this.question
      .substring(8)
      .replace(/ by/g, 'by')
      .replace(/ to the/g, 'tothe')
      .split(' ');

    if (parts.length < 3)
      throw new ArgumentError();

    let i = 0;
    let result = parseInt(parts[i++]);
    while (i < parts.length - 1) {
      switch (parts[i++]) {
        case "plus":
          result += parseInt(parts[i++]);
          break;
        case "minus":
          result -= parseInt(parts[i++]);
          break;
        case "multipliedby":
          result *= parseInt(parts[i++]);
          break;
        case "dividedby":
          result /= parseInt(parts[i++]);
          break;
        case "raisedtothe":
          result = result ** parseInt(parts[i++]);
          if (i === parts.length || !parts[i++].startsWith('power'))
            throw new ArgumentError();
          break;
        default:
          throw new ArgumentError()
      }
    }
    return result;
  }
}