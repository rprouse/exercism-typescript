export default class Rational {
  constructor(private num: number,
              private den: number) {
    const gcd = Rational.gcd(this.num, this.den);
    this.num /= gcd;
    this.den /= gcd;

    if (this.den < 0) {
      this.num *= -1;
      this.den *= -1;
    }
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

  sub(o: Rational): Rational {
    const num = this.num * o.den - o.num * this.den;
    const den = this.den * o.den;
    return new Rational(num, den);
  }

  mul(o: Rational): Rational {
    const num = this.num * o.num;
    const den = this.den * o.den;
    return new Rational(num, den);
  }

  div(o: Rational): Rational {
    const num = this.num * o.den;
    const den = this.den * o.num;
    return new Rational(num, den);
  }

  abs(): Rational {
    return new Rational(Math.abs(this.num), Math.abs(this.den));
  }

  exprational(n: number): Rational {
    n = Math.abs(n);
    const num = this.num ** n;
    const den = this.den ** n;
    return new Rational(num, den);
  }

  expreal(n: number): number {
    return n;
  }

  reduce(): Rational {
    return this;
  }
}