import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../../hooks/useGames";
import { IGamesRequestData } from "../../interfaces/interfaces";
import FetchingSkeleton from "../FetchingSkeleton/FetchingSkeleton";
import GameCard from "../GameCard/GameCard";

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
    fetchNextPage,
  } = useGames(query);
  {
    if (error) <Text>{error.message}</Text>;
  }
  const skeletons_ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const totalFetchedResults_ =
    games_?.pages.reduce((total, page) => total + page?.results.length, 0) ?? 0;
  return (
    <InfiniteScroll
      dataLength={totalFetchedResults_}
      hasMore={hasNextPage}
      loader={<Spinner />}
      next={() => fetchNextPage()}
    >
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
    </InfiniteScroll>
  );
}

export default Games;
