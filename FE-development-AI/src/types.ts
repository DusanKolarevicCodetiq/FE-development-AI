export interface Country {
  cca3: string;
  name: {
    common: string;
    official: string;
  };
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  capital: string[];
}
