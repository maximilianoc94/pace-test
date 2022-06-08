export type Country = {
  name: string;
  native: string;
  capital: string;
  currency: string;
  languages: {
    name: string;
  }[];
  states: {
    name: string;
  }[];
};