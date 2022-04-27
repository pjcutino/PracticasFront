export interface IPokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: IPokemonURL[];
}

export interface IPokemonURL {
  name: string;
  url: string;
}

export interface IPokemon {
  id: number;
  spriteUrl: string;
  name: string;
  types: string[];
  abilities: string[];
  moves: string[];
}
