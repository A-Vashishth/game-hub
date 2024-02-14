import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchGames.css";
import useGameQueryStore from "../../Stores/queryStore";

function SearchGames() {
  const onSearch_ = useGameQueryStore((s) => s.updateSearchText);
  const searchBarRef_ = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchBarRef_?.current?.value)
          onSearch_(searchBarRef_?.current?.value);
      }}
      className="search-bar-form"
    >
      <InputGroup _hover={{ cursor: "pointer" }}>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          borderRadius={20}
          placeholder="What do you feel like playing today? ..."
          variant={"field"}
          ref={searchBarRef_}
        ></Input>
      </InputGroup>
    </form>
  );
}
export default SearchGames;
