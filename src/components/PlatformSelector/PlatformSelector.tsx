import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { MdExpandCircleDown } from "react-icons/md";
import useFindPlatform from "../../hooks/useFindPlatform";
import usePlatforms from "../../hooks/usePlatform";
import { IPlatformData } from "../../interfaces/interfaces";

interface IPlatformSelectProps {
  onPlatformSelect: (platform: IPlatformData) => void;
  selectedPlatformId: number | undefined;
}

function PlatformSelector({
  onPlatformSelect,
  selectedPlatformId,
}: Readonly<IPlatformSelectProps>) {
  //  to fetch the list of all the platforms using useQuery
  const { data: platforms_, error } = usePlatforms();
  // fetching the name of selected platform from the id recieved
  const selectedPlatformName_ = useFindPlatform(selectedPlatformId);
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
            onClick={() => onPlatformSelect(platform_)}
          >
            <span>{platform_.name}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
