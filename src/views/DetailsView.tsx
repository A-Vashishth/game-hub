import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

function DetailsView() {
  // fething slug from the route
  const { slug } = useParams();
  // fetching appropriate game
  const { data: game, isLoading, error } = useGameDetails(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error) throw error;
  return (
    <Box className="detail-view-container" m={5} p={5}>
      <Heading mb={2}>{game?.name}</Heading>
      <div className="diescription-container">
        <Text>{game?.description_raw}</Text>
      </div>
    </Box>
  );
}

export default DetailsView;
