import meh from "../../assets/meh.webp";
import thumbsUp from "../../assets/thumbs-up.webp";
import bullsEye from "../../assets/bulls-eye.webp";
import { Image, ImageProps, Tooltip } from "@chakra-ui/react";

interface IRatingEmojiProps {
  rating: number;
}

function RatingEmoji({ rating }: IRatingEmojiProps) {
  if (rating < 3) return null;
  const emojiMap_: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: bullsEye, alt: "high", boxSize: "35px", mb: 1 },
    5: { src: thumbsUp, alt: "good", boxSize: "25px" },
  };
  return (
    <>
      <Tooltip label={`rated: ${emojiMap_[rating].alt}`} closeOnScroll={true}>
        <Image {...emojiMap_[rating]} />
      </Tooltip>
    </>
  );
}

export default RatingEmoji;
