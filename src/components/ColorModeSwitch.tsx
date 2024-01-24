import { HStack, Show, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Show above="sm">
        <Text whiteSpace={"nowrap"}>Dark Mode</Text>
      </Show>
    </HStack>
  );
}

export default ColorModeSwitch;
