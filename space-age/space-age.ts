const EARTH_YEAR = 31557600;

export default class SpaceAge {
  seconds: number;

  constructor(seconds: number) {
    this.seconds = seconds;
  }

  onEarth = (): number => this.round( this.onEarthAccurate() );
  onMercury = (): number => this.round( this.onEarthAccurate() / 0.2408467 );
  onVenus = (): number => this.round( this.onEarthAccurate() / 0.61519726 );
  onMars = (): number => this.round( this.onEarthAccurate() / 1.8808158 );
  onJupiter = (): number => this.round( this.onEarthAccurate() / 11.862615 );
  onSaturn = (): number => this.round( this.onEarthAccurate() / 29.447498 );
  onUranus = (): number => this.round( this.onEarthAccurate() / 84.016846 );
  onNeptune = (): number => this.round( this.onEarthAccurate() / 164.79132 );

  private round = (num: number): number => Math.round(num * 100) / 100;
  private onEarthAccurate = (): number => this.seconds / EARTH_YEAR;
}