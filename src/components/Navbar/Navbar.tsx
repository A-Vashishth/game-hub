import { HStack, Image, Tooltip } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchGames from "../SearchGames/SearchGames";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate_ = useNavigate();
  // mrthod to navigate to home page
  function onBrandClick() {
    console.log("navigating back to home");
    navigate_("/");
  }
  return (
    <HStack padding="10px" pl={{ base: "0", lg: "10px" }}>
      <Tooltip label={"Posh's Game Hub"} closeOnScroll={true}>
        <Image src={logo} boxSize={"60px"} onClick={() => onBrandClick()} />
      </Tooltip>
      <SearchGames />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default Navbar;
