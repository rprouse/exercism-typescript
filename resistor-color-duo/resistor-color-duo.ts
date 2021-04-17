export class ResistorColor {
  private colors: string[]

  constructor(colors: string[]) {
    if (colors.length < 2)
      throw new Error('At least two colors need to be present');

    this.colors = colors
  }
  value = (): number => {
    const key: string[] = [
      `black`,
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ];

    return key.indexOf(this.colors[0]) * 10 + key.indexOf(this.colors[1]);
  }
}
