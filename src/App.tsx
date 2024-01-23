import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Games from "./components/Games/Games";
import GenreList from "./components/GenreList/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector/PlatformSelector";
import { IGamesRequestData } from "./interfaces/interfaces";
import SortSelctor from "./components/SortSelector/SortSelector";
import SelectionHeading from "./components/SelectionHeading";

function App() {
  // state to keep track of the selected genre and platform
  const [gameQuery, setGameQuery_] = useState<IGamesRequestData>(
    {} as IGamesRequestData
  );
  return (
    <>
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
                setGameQuery_({ ...gameQuery, searchText: value })
              }
            ></Navbar>
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList
                onGenreSelect={(genre_) =>
                  setGameQuery_({ ...gameQuery, genre: genre_ })
                }
                selectedGenre={gameQuery.genre}
              ></GenreList>
            </GridItem>
          </Show>
          <GridItem area="main">
            <Box mb={2}>
              <SelectionHeading selection={gameQuery} />
            </Box>
            <HStack pr={2} mb={2}>
              <PlatformSelector
                onPlatformSelect={(platform_) =>
                  setGameQuery_({ ...gameQuery, platform: platform_ })
                }
                selectedPlatform={gameQuery.platform}
              />
              <SortSelctor
                sortByValue={gameQuery.sortBy}
                onCategorySelect={(value_) =>
                  setGameQuery_({ ...gameQuery, sortBy: value_ })
                }
              />
            </HStack>
            <Games query={gameQuery}></Games>
          </GridItem>
        </Grid>
      </div>
    </>
  );
}

export default App;
