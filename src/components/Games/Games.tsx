import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import FetchingSkeleton from "../FetchingSkeleton/FetchingSkeleton";
import { IGamesRequestData } from "../../interfaces/interfaces";

interface IGamesProps {
  query: IGamesRequestData;
}

function Games({ query }: IGamesProps) {
  // getting the games from the custom hook
  const { data_: games_, error_, isLoading_ } = useGames(query);
  {
    if (error_) <Text>{error_}</Text>;
  }
  const skeletons_ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
        {isLoading_ &&
          skeletons_.map((num_) => (
            <FetchingSkeleton key={num_}></FetchingSkeleton>
          ))}
        {games_.map((game_) => (
          <GameCard key={game_.id} game={game_}></GameCard>
        ))}
        {games_.length === 0 && (
          <Text>Oh no Seems like there are no Games to display!</Text>
        )}
      </SimpleGrid>
    </>
  );
}

export default Games;
