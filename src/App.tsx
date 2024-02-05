import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import "./App.css";
import Games from "./components/Games/Games";
import GenreList from "./components/GenreList/GenreList";
import Navbar from "./components/Navbar/Navbar";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import SelectionHeading from "./components/SelectionHeading";
import SortSelctor from "./components/SortSelector/SortSelector";

function App() {
  return (
    <div className="app-container">
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          lg: `'nav nav' 'aside main' `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar></Navbar>
        </GridItem>
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

export default App;
