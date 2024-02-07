import { Box, Grid, Show, GridItem, Stack } from "@chakra-ui/react";
import Games from "../components/Games/Games";
import GenreList from "../components/GenreList/GenreList";
import PlatformSelector from "../components/PlatformSelector/PlatformSelector";
import SelectionHeading from "../components/SelectionHeading";
import SortSelctor from "../components/SortSelector/SortSelector";

function HomeView() {
  return (
    <div className="home-container">
      <Grid
        templateAreas={{
          base: `'main'`,
          lg: `'aside main'`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        {/* side panel */}
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main" mx={{ base: "2", lg: "0" }}>
          {/* app heading */}
          <Box mb={2} textAlign={{ base: "center", md: "justify" }}>
            <SelectionHeading />
          </Box>
          {/* dropdown filters */}
          <Stack mb={2} direction={{ base: "column", md: "row" }}>
            <PlatformSelector />
            <SortSelctor />
          </Stack>
          {/* actual games */}
          <Box>
            <Games></Games>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
}

export default HomeView;
