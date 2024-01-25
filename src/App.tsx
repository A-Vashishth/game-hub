import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import Games from "./components/Games/Games";
import GenreList from "./components/GenreList/GenreList";
import Navbar from "./components/Navbar/Navbar";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import SelectionHeading from "./components/SelectionHeading";
import SortSelctor from "./components/SortSelector/SortSelector";
import { IGamesRequestData } from "./interfaces/interfaces";

function App() {
  // state to keep track of the selected genre and platform
  const [gameQuery_, setGameQuery_] = useState<IGamesRequestData>(
    {} as IGamesRequestData
  );
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
          <Navbar
            onSearch={(value) =>
              setGameQuery_({ ...gameQuery_, searchText: value })
            }
          ></Navbar>
        </GridItem>
        {/* side panel */}
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onGenreSelect={(genre_) =>
                setGameQuery_({ ...gameQuery_, genre: genre_ })
              }
              selectedGenre={gameQuery_.genre}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main" mx={{ base: "2", lg: "0" }}>
          {/* app heading */}
          <Box mb={2} textAlign={{ base: "center", md: "justify" }}>
            <SelectionHeading selection={gameQuery_} />
          </Box>
          {/* dropdown filters */}
          <Stack mb={2} direction={{ base: "column", md: "row" }}>
            <PlatformSelector
              onPlatformSelect={(platform_) =>
                setGameQuery_({ ...gameQuery_, platform: platform_ })
              }
              selectedPlatform={gameQuery_.platform}
            />
            <SortSelctor
              sortByValue={gameQuery_.sortBy}
              onCategorySelect={(value_) =>
                setGameQuery_({ ...gameQuery_, sortBy: value_ })
              }
            />
          </Stack>
          {/* actual games */}
          <Box>
            <Games query={gameQuery_}></Games>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
