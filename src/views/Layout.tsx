import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Layout() {
  return (
    <div className="layout-container">
      <Box className="nav-container">
        <Navbar />
      </Box>
      <Outlet />
    </div>
  );
}

export default Layout;
