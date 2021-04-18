const WINK         = 0b0001;
const DOUBLE_BLINK = 0b0010;
const CLOSE_EYES   = 0b0100;
const JUMP         = 0b1000;
const REVERSE      = 0b00010000;

export default class HandShake {
  private _commands: string[];

  constructor(num: number) {
    this._commands = [];
    if (num & WINK) {
      this._commands.push('wink');
    }
    if (num & DOUBLE_BLINK) {
      this._commands.push('double blink');
    }
    if (num & CLOSE_EYES) {
      this._commands.push('close your eyes');
    }
    if (num & JUMP) {
      this._commands.push('jump');
    }
    if (num & REVERSE) {
      this._commands.reverse();
    }
  }

  commands = (): string[] => this._commands;
}