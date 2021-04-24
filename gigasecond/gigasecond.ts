export default class Gigasecond {
  constructor(private birthday: Date) { }

  date(): Date {
    return new Date(this.birthday.getTime() + 10 ** 12);
  }
}
