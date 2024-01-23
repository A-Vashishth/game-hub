import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { MdExpandCircleDown } from "react-icons/md";
import usePlatforms from "../../hooks/usePlatform";
import { IPlatformData } from "../../interfaces/interfaces";

interface IPlatformSelectProps {
  onPlatformSelect: (platform: IPlatformData) => void;
  selectedPlatform: IPlatformData | null;
}

function PlatformSelector({
  onPlatformSelect,
  selectedPlatform,
}: IPlatformSelectProps) {
  //  to fetch the list of all the platforms
  const { data_: platforms_, error_ } = usePlatforms();
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<MdExpandCircleDown />}>
          {selectedPlatform?.name ?? "Platforms"}
        </MenuButton>
        <MenuList maxH={"500px"} minH={"100px"} overflowY={"auto"}>
          {error_ && <Text>Oops somthing went wrong!</Text>}
          {platforms_.map((platform_) => (
            <MenuItem
              minH="40px"
              key={platform_.id + "platform_menu_item"}
              onClick={() => onPlatformSelect(platform_)}
            >
              <span>{platform_.name}</span>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default PlatformSelector;
