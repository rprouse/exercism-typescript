export function twoFer(): string;
export function twoFer(name: string) : string;
export function twoFer(name?: string): string {
  if(name === undefined)
    return 'One for you, one for me.';

  return `One for ${name}, one for me.`;
}
