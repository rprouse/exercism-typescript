const EARTH_YEAR = 31557600;

enum OrbitalPeriod {
  Mercury = 0.2408467,
  Venus = 0.61519726,
  Earth = 1,
  Mars = 1.8808158,
  Jupiter = 11.862615,
  Saturn = 29.447498,
  Uranus = 84.016846,
  Neptune = 164.79132
};

export default class SpaceAge {
  seconds: number;

  constructor(seconds: number) {
    this.seconds = seconds;
  }

  onEarth = (): number => this.calculate(OrbitalPeriod.Earth);
  onMercury = (): number => this.calculate(OrbitalPeriod.Mercury);
  onVenus = (): number => this.calculate(OrbitalPeriod.Venus);
  onMars = (): number => this.calculate(OrbitalPeriod.Mars);
  onJupiter = (): number => this.calculate(OrbitalPeriod.Jupiter);
  onSaturn = (): number => this.calculate(OrbitalPeriod.Saturn);
  onUranus = (): number => this.calculate(OrbitalPeriod.Uranus);
  onNeptune = (): number => this.calculate(OrbitalPeriod.Neptune);

  private round = (num: number): number => Math.round(num * 100) / 100;

  private calculate = (orbitalPeriod: OrbitalPeriod): number =>
    this.round( this.seconds / EARTH_YEAR / orbitalPeriod );
}