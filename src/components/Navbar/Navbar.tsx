import { HStack, Image, Tooltip } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchGames from "../SearchGames/SearchGames";

function Navbar() {
  return (
    <HStack padding="10px" pl={{ base: "0", lg: "10px" }}>
      <Tooltip label={"Posh's Game Hub"} closeOnScroll={true}>
        <Image src={logo} boxSize={"60px"} />
      </Tooltip>
      <SearchGames />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default Navbar;
