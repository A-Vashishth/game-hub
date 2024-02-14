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
  Tooltip,
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

function GameCard({ game }: Readonly<IGameCardProps>) {
  const navigate_ = useNavigate();
  function openGameDetails(slug: string) {
    navigate_(`/details/${slug}`);
  }
  return (
    <Card
      variant={"elevated"}
      _hover={{
        boxShadow: "gray 0px 2px 4px 0px, gray 0px 2px 16px 0px",
        cursor: "pointer",
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
              platform={
                game?.parent_platforms?.map((platform) => platform.platform) ??
                undefined
              }
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
          <Tooltip label={"coming soon..."} closeOnScroll={true}>
            <Button variant="solid" colorScheme="blue" cursor={"not-allowed"}>
              Buy now
            </Button>
          </Tooltip>
          <Tooltip label={"coming soon..."} closeOnScroll={true}>
            <Button variant="ghost" colorScheme="blue" cursor={"not-allowed"}>
              Add to cart
            </Button>
          </Tooltip>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default GameCard;
