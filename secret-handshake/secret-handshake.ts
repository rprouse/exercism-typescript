const REVERSE = 0b00010000;
const handshake = ['wink', 'double blink', 'close your eyes', 'jump'];

export default class HandShake {
  private _commands: string[];

  constructor(num: number) {
    this._commands = handshake.filter((_, index) => 1 << index & num);
    if (num & REVERSE) this._commands.reverse();
  }

  commands = (): string[] => this._commands;
}
