export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  region: string;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  capital: string[];
  cca3: string;
}
