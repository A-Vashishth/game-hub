import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";
import { IGameData } from "../../interfaces/interfaces";
import PlatformIconList from "../PlatformIconList";
import GameScore from "../GameScore";
import getCroppedImageUrl from "../../services/image-cropper";
import RatingEmoji from "../RatingEmoji/RatingEmoji";
import { useNavigate } from "react-router-dom";

interface IGameCardProps {
  game: IGameData;
}

function GameCard({ game }: IGameCardProps) {
  const navigate_ = useNavigate();
  function openGameDetails(slug: string) {
    navigate_(`/details/${slug}`);
  }
  return (
    <Card
      variant={"elevated"}
      _hover={{
        boxShadow: "gray 0px 10px 20px, gray 0px 6px 6px",
        transform: "scale(1)",
        transition: "transform 0.15s",
      }}
      onClick={() => openGameDetails(game.slug)}
    >
      <CardBody>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading fontSize="2xl" minH={"86px"}>
            {game.name}
          </Heading>
          <Divider />
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platform={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <GameScore criticScore={game.metacritic}></GameScore>
          </HStack>
          <HStack spacing={5}>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
            <RatingEmoji rating={game.rating_top} />
          </HStack>
        </Stack>
        <Divider />
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default GameCard;
