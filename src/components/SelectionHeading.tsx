import { Heading } from "@chakra-ui/react";
import { IGamesRequestData } from "../interfaces/interfaces";

interface ISelectionHeadingProps {
  selection: IGamesRequestData | null;
}

function SelectionHeading({ selection }: ISelectionHeadingProps) {
  const heading_ = `${selection?.platform?.name ?? ""} ${
    selection?.genre?.name ?? ""
  } Games`;
  return (
    <>
      <Heading fontSize={"5xl"}> {heading_} </Heading>
    </>
  );
}

export default SelectionHeading;
