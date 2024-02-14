import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IDefinitionItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

function DefinitionItem({ term, children }: Readonly<IDefinitionItemProps>) {
  return (
    <>
      <Box m={5}>
        <Heading as={"dt"} fontSize={"md"} color={"gray.600"}>
          {term}
        </Heading>
        <dd>{children}</dd>
      </Box>
    </>
  );
}

export default DefinitionItem;
