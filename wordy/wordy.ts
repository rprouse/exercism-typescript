export class ArgumentError { }

export class WordProblem {
  constructor(private question: string) { }

  answer(): number {
    if (!this.question.startsWith('What is '))
      throw new ArgumentError();

    const parts = this.question
      .substring(8)
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
        case "multiplied":
          if (i === parts.length - 1 || parts[i++] !== 'by')
            throw new ArgumentError();
          result *= parseInt(parts[i++]);
          break;
        case "divided":
          if (i === parts.length - 1 || parts[i++] !== 'by')
            throw new ArgumentError();
          result /= parseInt(parts[i++]);
          break;
        case "raised":
          if (i === parts.length - 3 || parts[i++] !== 'to' || parts[i++] != 'the')
            throw new ArgumentError();
          result = result ** parseInt(parts[i++]);
          if (!parts[i++].startsWith('power'))
            throw new ArgumentError();
          break;
        default:
          throw new ArgumentError()
      }
    }
    return result;
  }
}