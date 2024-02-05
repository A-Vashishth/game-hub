import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGameQueryStore from "../../Stores/queryStore";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-cropper";

function GenreList() {
  const selectedGenreId_ = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId_ = useGameQueryStore((s) => s.updateGenreId);
  const { data: genre_, isLoading, error } = useGenres();
  //   incase of error let user know
  if (error) return <Text>"Oops Something Went Wrong! :("</Text>;
  // in case of loading show spinner
  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="gray.800"
        size="xl"
      />
    );
  // in case of fetch successfull show data fetched
  return (
    <>
      <Heading fontSize={"2xl"} mb={3}>
        Genres
      </Heading>
      <List>
        {genre_?.results?.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
              ></Image>
              <Button
                variant="link"
                fontSize="lg"
                fontWeight={genre.id === selectedGenreId_ ? "bold" : ""}
                backgroundColor={genre.id === selectedGenreId_ ? "gray" : ""}
                onClick={() => setSelectedGenreId_(genre.id)}
                px={2}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
