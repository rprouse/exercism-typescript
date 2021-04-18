export default class Robot {
  private static allNames: Array<string> = Robot.createAllPossibleNames();
  private static unusedNames: Array<string> = Robot.allNames.slice();
  private _name: string;

  constructor() {
    this._name = Robot.createUniqueName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = Robot.createUniqueName();
  }

  public static releaseNames(): void {
    Robot.unusedNames = Robot.allNames.slice();
  }

  private static createUniqueName(): string {
    const i = Robot.getRandomInt(0, Robot.unusedNames.length);
    const name = Robot.unusedNames[i];
    Robot.unusedNames.splice(i, 1);  // delete from names
    return name;
  }

  private static createAllPossibleNames() : Array<string> {
    const A = 'A'.charCodeAt(0);
    const allNames = new Array<string>();
    for(let l1 = 0; l1 < 26; l1++) {
      for(let l2 = 0; l2 < 26; l2++) {
        for(let n = 0; n <= 999; n++) {
          allNames.push(`${String.fromCharCode(A + l1)}${String.fromCharCode(A + l2)}${`${n}`.padStart(3, '0')}`);
        }
      }
    }
    return allNames;
  }

  private static getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
}
