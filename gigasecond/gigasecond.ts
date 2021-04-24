const GIGASECOND = 1000000000;

export default class Gigasecond {

  constructor(private birthday: Date) { }

  date(): Date {
    return new Date(this.birthday.getTime() + GIGASECOND * 1000);
  }
}
