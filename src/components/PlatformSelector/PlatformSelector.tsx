import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { MdExpandCircleDown } from "react-icons/md";
import useGameQueryStore from "../../Stores/queryStore";
import useFindPlatform from "../../hooks/useFindPlatform";
import usePlatforms from "../../hooks/usePlatform";

function PlatformSelector() {
  //  to fetch the list of all the platforms using useQuery
  const { data: platforms_, error } = usePlatforms();
  const selectedPlatformId_ = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatform_ = useGameQueryStore((s) => s.updatePlatformId);

  // fetching the name of selected platform from the id recieved
  const selectedPlatformName_ = useFindPlatform(selectedPlatformId_);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<MdExpandCircleDown />}>
        {selectedPlatformName_ ?? "platforms"}
      </MenuButton>
      <MenuList
        maxH={"500px"}
        minH={"100px"}
        overflowY={"auto"}
        w={{ base: "300px", md: "100%" }}
      >
        {error && <Text>Oops somthing went wrong!</Text>}
        {platforms_?.results?.map((platform_) => (
          <MenuItem
            minH="40px"
            key={platform_.name}
            onClick={() => setSelectedPlatform_(platform_.id)}
          >
            <span>{platform_.name}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
