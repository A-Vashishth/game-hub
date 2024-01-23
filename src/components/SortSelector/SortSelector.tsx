import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { MdExpandCircleDown } from "react-icons/md";

interface ISortSelectProps {
  sortByValue: string | null;
  onCategorySelect: (value: string) => void;
}

function SortSelctor({
  sortByValue = null,
  onCategorySelect,
}: ISortSelectProps) {
  //  to fetch the list of all the platforms
  const sortCategories_ = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const buttonLabel_ = sortByValue
    ? sortCategories_.filter((category_) => category_.value === sortByValue)[0]
        ?.label
    : sortCategories_[0].label;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<MdExpandCircleDown />}>
          {"Order by: " + buttonLabel_}
        </MenuButton>
        <MenuList maxH={"500px"} minH={"100px"} overflowY={"auto"}>
          {sortCategories_.map((category_) => (
            <MenuItem
              minH="40px"
              onClick={() => onCategorySelect(category_.value)}
              key={category_.value}
              value={category_.value}
            >
              <span>{category_.label}</span>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default SortSelctor;
