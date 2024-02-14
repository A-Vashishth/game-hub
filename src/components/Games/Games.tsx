import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../../hooks/useGames";
import FetchingSkeleton from "../FetchingSkeleton/FetchingSkeleton";
import GameCard from "../GameCard/GameCard";

function Games() {
  // getting the games from the custom hook
  const {
    data: games_,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useGames();
  // incase any error log it to user
  if (error) return <Text>{error.message}</Text>;
  // dummy data for loading skeletons
  const skeletons_ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // to keep a count of results fetched till now
  const totalFetchedResults_ =
    games_?.pages.reduce((total, page) => total + page?.results.length, 0) ?? 0;
  return (
    // using infinite scroll lib to fetch new results when page is scrolled to it's bottom
    <InfiniteScroll
      dataLength={totalFetchedResults_}
      hasMore={hasNextPage}
      loader={
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={3}
          mx={{ base: 0, lg: 2 }}
        >
          {skeletons_.map((num_) => (
            <FetchingSkeleton key={num_}></FetchingSkeleton>
          ))}
        </SimpleGrid>
      }
      next={() => fetchNextPage()}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        mx={{ base: 0, lg: 2 }}
        mt={{ base: 0, lg: 2 }}
      >
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
