type Time = { hour: number, minute: number };

const MINUTES_IN_DAY = 24 * 60;

export default class Clock {
  private time: Time;

  constructor(hour: number, minute: number = 0) {
    this.time = Clock.calculate(hour * 60 + minute);
  }

  toString = (): string =>
    `${Clock.paddingString(this.time.hour)}:${Clock.paddingString(this.time.minute)}`;

  plus = (minutes: number): Clock => {
    this.time = Clock.calculate(this.totalMinutes() + minutes);
    return this;
  }

  minus = (minutes: number): Clock => {
    this.time = Clock.calculate(this.totalMinutes() - minutes);
    return this;
  }

  equals = (other: Clock): boolean =>
    this.time.hour === other.time.hour &&
    this.time.minute === other.time.minute;

  private totalMinutes = (): number =>
    this.time.hour * 60 + this.time.minute;

  private static calculate(minutes: number): Time {
    while(minutes < 0) {
      minutes += MINUTES_IN_DAY;
    }
    const hour = Math.floor(minutes / 60) % 24;
    const mint = minutes % 60;
    return { hour: hour, minute: mint };
  }

  private static paddingString = (num: number): string =>
    num.toString().padStart(2, '0');
}