import { HStack, Image, Tooltip } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchGames from "../SearchGames/SearchGames";

interface INavbarProps {
  onSearch: (value: string) => void;
}

function Navbar({ onSearch }: INavbarProps) {
  return (
    <HStack padding="10px">
      <Tooltip label={"Posh's Game Hub"} closeOnScroll={true}>
        <Image src={logo} boxSize={"60px"} />
      </Tooltip>
      <SearchGames onSearch={(value_) => onSearch(value_)} />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default Navbar;
