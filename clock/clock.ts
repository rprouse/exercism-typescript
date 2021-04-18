type Time = { hour: number, minute: number };

const MINUTES_IN_DAY = 24 * 60;

const pad = (n: number): string =>
  n.toString().padStart(2, '0');

export default class Clock {
  private time: Time;

  constructor(hour: number, minute: number = 0) {
    this.time = Clock.calculate(hour * 60 + minute);
  }

  toString = (): string =>
    `${pad(this.time.hour)}:${pad(this.time.minute)}`;

  plus = (minutes: number): Clock =>
    new Clock(this.time.hour, this.time.minute + minutes);

  minus = (minutes: number): Clock =>
    new Clock(this.time.hour, this.time.minute - minutes);

  equals = (other: Clock): boolean =>
    this.time.hour === other.time.hour &&
    this.time.minute === other.time.minute;

  private static calculate(minutes: number): Time {
    if (minutes < 0) {
      minutes = minutes % MINUTES_IN_DAY + MINUTES_IN_DAY;
    }
    return {
      hour: Math.floor(minutes / 60) % 24,
      minute: minutes % 60
    };
  }
}