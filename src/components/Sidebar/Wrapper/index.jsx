import React from "react";
import { useSelector } from "react-redux";
import { DesktopSidebar } from "./style";

export default ({ children }) => {
  const open = useSelector((state)=>state.sidebarReducer.open);
  return <DesktopSidebar open={open}>{children}</DesktopSidebar>;
};
