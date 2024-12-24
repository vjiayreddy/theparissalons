import React, { Fragment } from "react";
import AppNavigation from "../components/app-navigation/AppNavigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Fragment>
      <AppNavigation />
      {children}
    </Fragment>
  );
};

export default MainLayout;
