import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { MdExpandCircleDown } from "react-icons/md";
import useGameQueryStore from "../../Stores/queryStore";

function SortSelctor() {
  //  to fetch the list of all the platforms
  const sortCategories_ = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const sortByValue_ = useGameQueryStore((s) => s.gameQuery.sortBy);
  const setSortByValue_ = useGameQueryStore((s) => s.setSortOrder);

  const buttonLabel_ = sortByValue_
    ? sortCategories_.filter((category_) => category_.value === sortByValue_)[0]
        ?.label
    : sortCategories_[0].label;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<MdExpandCircleDown />}>
        {"Order by: " + buttonLabel_}
      </MenuButton>
      <MenuList
        maxH={"500px"}
        minH={"100px"}
        overflowY={"auto"}
        w={{ base: "300px", md: "100%" }}
      >
        {sortCategories_.map((category_) => (
          <MenuItem
            minH="40px"
            onClick={() => setSortByValue_(category_.value)}
            key={category_.value}
            value={category_.value}
          >
            <span>{category_.label}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelctor;
