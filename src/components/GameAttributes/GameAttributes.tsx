import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import { IGameData } from "../../interfaces/interfaces";
import GameScore from "../GameScore";

interface IGameAttributesProps {
  game: IGameData;
}

function GameAttributes({ game }: Readonly<IGameAttributesProps>) {
  return (
    <div className="attributes-container">
      <SimpleGrid columns={2} as={"dl"}>
        <GridItem>
          <DefinitionItem term="Platforms">
            {game?.parent_platforms?.map(({ platform }) => (
              <Text key={platform.id}>{platform.name}</Text>
            ))}
          </DefinitionItem>
        </GridItem>
        <GridItem>
          <DefinitionItem term="Critic Score">
            <GameScore criticScore={game?.metacritic}></GameScore>
          </DefinitionItem>
        </GridItem>
        <GridItem>
          <DefinitionItem term="Genre">
            {game?.genres?.map((genre_) => (
              <Text key={genre_.id}>{genre_.name}</Text>
            ))}
          </DefinitionItem>
        </GridItem>
        <GridItem>
          <DefinitionItem term="Publisher">
            {game?.publishers?.map((publisher) => (
              <Text key={publisher.id}>{publisher.name}</Text>
            ))}
          </DefinitionItem>
        </GridItem>
      </SimpleGrid>
    </div>
  );
}

export default GameAttributes;
