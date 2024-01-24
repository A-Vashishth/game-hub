import { Heading } from "@chakra-ui/react";
import { IGamesRequestData } from "../interfaces/interfaces";

interface ISelectionHeadingProps {
  selection: IGamesRequestData | null;
  size: "large" | "small";
}

function SelectionHeading({ selection, size }: ISelectionHeadingProps) {
  const heading_ = `${selection?.platform?.name ?? ""} ${
    selection?.genre?.name ?? ""
  } Games`;
  return (
    <Heading fontSize={size === "large" ? "5xl" : "3xl"}>{heading_}</Heading>
  );
}

export default SelectionHeading;
