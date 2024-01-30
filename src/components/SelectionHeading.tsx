import { Heading } from "@chakra-ui/react";
import useFindGenre from "../hooks/useFindGenre";
import useFindPlatform from "../hooks/useFindPlatform";
import { IGamesRequestData } from "../interfaces/interfaces";

interface ISelectionHeadingProps {
  selection: IGamesRequestData | null;
}

function SelectionHeading({ selection }: Readonly<ISelectionHeadingProps>) {
  // fetching appropriate info for heading to display
  const platformName_ = useFindPlatform(selection?.platformId);
  const genreName_ = useFindGenre(selection?.genreId);
  // formulating heading
  const heading_ = `${platformName_ ?? ""} ${genreName_ ?? ""} Games`;

  return <Heading fontSize={{ base: "3xl", md: "5xl" }}>{heading_}</Heading>;
}

export default SelectionHeading;
