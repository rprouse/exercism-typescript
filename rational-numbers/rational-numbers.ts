export default class Rational {
  constructor(private num: number,
              private den: number) {
    const gcd = Rational.gcd(this.num, this.den);
    this.num /= gcd;
    this.den /= gcd;
  }

  public static gcd(a: number, b: number): number {
    let a1 = Math.max(Math.abs(a), Math.abs(b));
    let b1 = Math.min(Math.abs(a), Math.abs(b));
    while (b1 !== 0) {
      [a1, b1] = Rational.euclidean(a1, b1);
    }
    return a1;
  }

  private static euclidean(a: number, b: number): [number, number] {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    return [min, max % min];
  }

  add(o: Rational): Rational {
    const num = this.num * o.den + o.num * this.den;
    const den = this.den * o.den;
    return new Rational(num, den);
  }

  sub(_: Rational): Rational {
    return this;
  }

  mul(_: Rational): Rational {
    return this;
  }

  div(_: Rational): Rational {
    return this;
  }

  abs(): Rational {
    return this;
  }

  exprational(_: number): Rational {
    return this;
  }

  expreal(_: number): Rational {
    return this;
  }

  reduce(): Rational {
    return this;
  }
}