import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function FetchingSkeleton() {
  return (
    <Card>
      <Skeleton height={"300px"}></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
}

export default FetchingSkeleton;
