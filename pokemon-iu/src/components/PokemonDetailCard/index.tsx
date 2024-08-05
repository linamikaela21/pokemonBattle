import React from 'react';
import { PokemonInterface } from '../../interfaces/Pokemon';
import { PokemonDetailCardSkeleton } from './PokemonDetailCardSkeleton';
import { PokemonDetailCardContent } from './PokemonDetailCardContent';

interface PokemonDetailCardProps {
  pokemon?: PokemonInterface;
  loading: boolean;
}

export const PokemonDetailCard = ({
  pokemon,
  loading,
}: PokemonDetailCardProps): JSX.Element => {
  return loading ? (
    <PokemonDetailCardSkeleton />
  ) : (
    <PokemonDetailCardContent pokemon={pokemon} />
  );
};
