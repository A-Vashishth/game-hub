import { IPlatformData } from "../interfaces/interfaces";
import {
  FaAndroid,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaWindows,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Tooltip } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IPlatfromListProps {
  platform: IPlatformData[];
}

function PlatformIconList({ platform }: IPlatfromListProps) {
  const iconMap_: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack>
      {platform.map((platform) => (
        <Tooltip label={platform.slug} closeOnScroll={true} color={"white"}>
          <span>
            <Icon
              key={platform.id}
              as={iconMap_[platform.slug]}
              color="gray.500"
            />
          </span>
        </Tooltip>
      ))}
    </HStack>
  );
}

export default PlatformIconList;
