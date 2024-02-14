import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface ITextSummarizerProps {
  children: string;
}

const limit_ = 300;

function TextSummarizer({ children }: Readonly<ITextSummarizerProps>) {
  const [summarized_, setSummarized_] = useState(true);
  if (!children?.length) return null;
  const summary_ =
    children?.length >= limit_ ? children.slice(0, limit_) + "..." : children;
  return (
    <div className="text-summarizer-container">
      <Text>
        <>
          {summarized_ ? summary_ : children}
          <Button
            size={"xs"}
            ml={2}
            onClick={() => setSummarized_(!summarized_)}
            colorScheme="yellow"
            fontWeight={"bold"}
          >
            {summarized_ ? "show more" : "show less"}
          </Button>
        </>
      </Text>
    </div>
  );
}

export default TextSummarizer;
