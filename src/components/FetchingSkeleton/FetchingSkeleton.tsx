import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function FetchingSkeleton() {
  return (
    <>
      <Card width={"300px"}>
        <Skeleton height={"300px"}></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </>
  );
}

export default FetchingSkeleton;
