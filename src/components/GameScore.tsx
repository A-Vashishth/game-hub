import { Badge } from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";

interface IGameScoreProps {
  criticScore: number;
}

function GameScore({ criticScore }: IGameScoreProps) {
  const badgeColor_ =
    criticScore > 75 ? "green" : criticScore > 60 ? "yellow" : "red";
  return (
    <>
      <Badge colorScheme={badgeColor_} fontSize={"14px"} paddingX={2}>
        {criticScore ?? <RxCross2 />}
      </Badge>
    </>
  );
}

export default GameScore;
