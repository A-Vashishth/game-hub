import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import FetchingSkeleton from "../FetchingSkeleton/FetchingSkeleton";
import { IGamesRequestData } from "../../interfaces/interfaces";
import React from "react";

interface IGamesProps {
  query: IGamesRequestData;
}

function Games({ query }: IGamesProps) {
  // getting the games from the custom hook
  const {
    data: games_,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGames(query);
  {
    if (error) <Text>{error.message}</Text>;
  }
  const skeletons_ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
        {isLoading &&
          skeletons_.map((num_) => (
            <FetchingSkeleton key={num_}></FetchingSkeleton>
          ))}
        {games_?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results?.map((game_) => (
              <GameCard key={game_.id} game={game_}></GameCard>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} my={5}>
          {isFetchingNextPage ? "fetching games.." : "more games.."}
        </Button>
      )}
    </>
  );
}

export default Games;
