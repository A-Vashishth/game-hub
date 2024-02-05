import { Heading } from "@chakra-ui/react";
import useFindGenre from "../hooks/useFindGenre";
import useFindPlatform from "../hooks/useFindPlatform";
import useGameQueryStore from "../Stores/queryStore";

function SelectionHeading() {
  // fetching appropriate info for heading to display
  const selection = useGameQueryStore((s) => s.gameQuery);
  const platformName_ = useFindPlatform(selection?.platformId);
  const genreName_ = useFindGenre(selection?.genreId);
  // formulating heading
  const heading_ = `${platformName_ ?? ""} ${genreName_ ?? ""} Games`;

  return <Heading fontSize={{ base: "3xl", md: "5xl" }}>{heading_}</Heading>;
}

export default SelectionHeading;
