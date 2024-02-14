import { HStack, Image, Tooltip } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchGames from "../SearchGames/SearchGames";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <HStack padding="10px" pl={"10px"}>
      <Tooltip label={"Posh's Game Hub"} closeOnScroll={true}>
        <Link to={"/"}>
          <Image src={logo} boxSize={"60px"} objectFit={"cover"} />
        </Link>
      </Tooltip>
      <SearchGames />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default Navbar;
