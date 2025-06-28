// src/types.ts

export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [lang: string]: {
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
  capital?: string[];
  cca3: string;
}
