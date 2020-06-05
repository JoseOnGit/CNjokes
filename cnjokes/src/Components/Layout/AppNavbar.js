import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import JokeNavbarSearch from '../JokeNavbarSearch';

export function AppNavbar() {
  return (
    <Navbar color="faded" dark>
      <NavbarBrand href="/">CNjokes</NavbarBrand>
      <JokeNavbarSearch />
    </Navbar>
  );
}