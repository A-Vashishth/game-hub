import { Box, Heading } from "@chakra-ui/react";
import {
  isRouteErrorResponse,
  useParams,
  useRouteError,
} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function ErrorView() {
  const routeError_ = useRouteError();
  const { routeParams_ } = useParams();

  return (
    <div className="error-container">
      <Navbar />
      <Box m={5} className="error-message-container">
        <Heading>Oops!</Heading>
        <p>
          {isRouteErrorResponse(routeError_)
            ? `are you sure it was ${routeParams_}`
            : "something went wrong!"}
        </p>
      </Box>
    </div>
  );
}

export default ErrorView;
