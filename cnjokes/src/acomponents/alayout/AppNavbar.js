import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import JokeNavbarSearch from '../JokeNavbarSearch';

function AppNavbar() {
  return (
    <Navbar color="faded" dark>
      <NavbarBrand href="/">CNjokes</NavbarBrand>
      <JokeNavbarSearch />
    </Navbar>
  );
}

export default AppNavbar