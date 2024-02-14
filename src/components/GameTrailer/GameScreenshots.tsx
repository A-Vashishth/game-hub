import useFetchScreenshots from "../../hooks/useFetchScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface IGameScreenshotsProps {
  gameId: number;
}

function GameScreenshots({ gameId }: IGameScreenshotsProps) {
  const { data, error } = useFetchScreenshots(gameId);
  if (error) return null;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} mt={1}>
      {data?.results.map((file) => (
        <Image src={file.image} key={file.id}></Image>
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
