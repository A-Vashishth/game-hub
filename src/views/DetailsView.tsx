import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import TextSummarizer from "../components/TextSummarizer";
import GameAttributes from "../components/GameAttributes/GameAttributes";
import GameTrailer from "../components/GameTrailer/GameTrailer";
import GameScreenshots from "../components/GameTrailer/GameScreenshots";

function DetailsView() {
  // fething slug from the route
  const { slug } = useParams();
  // fetching appropriate game
  const { data: game, isLoading, error } = useGameDetails(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;
  return (
    <SimpleGrid
      className="detail-view-container"
      columns={{ base: 1, md: 2 }}
      spacing={5}
      m={2}
    >
      <GridItem>
        <Heading mb={2}>{game?.name}</Heading>
        <div className="diescription-container">
          <TextSummarizer>{game?.description_raw ?? ""}</TextSummarizer>
        </div>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game?.id} />
        <GameScreenshots gameId={game?.id} />
      </GridItem>
    </SimpleGrid>
  );
}

export default DetailsView;
