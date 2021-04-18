export default class Clock {
  private hour: number;
  private minute: number;

  constructor(hour: number, minute: number = 0) {
    this.hour = hour;
    this.minute = minute;
  }

  toString(): string {
    return '';
  }

  plus(minutes: number): Clock {
    return this;
  }

  minus(minutes: number): Clock {
    return this;
  }

  equals(other: Clock): boolean {
    return false;
  }
}