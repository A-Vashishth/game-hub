import { Grid, GridItem, Show } from "@chakra-ui/react";

function TestGrid() {
  return (
    <>
      <div className="grid-container">
        <Grid
          templateAreas={{ base: `'nav' 'main'`, md: `'nav nav' 'aside main' ` }}
          h={'200px'}
        >
          <GridItem area="nav" bg={"coral"}>Nav </GridItem>
          <Show above="md">
            <GridItem area="aside" bg={"gold"}>Aside</GridItem>
          </Show>
          <GridItem area="main" bg={"dodgerblue"}>Main</GridItem>
        </Grid>
      </div>
    </>
  );
}
export default TestGrid;
