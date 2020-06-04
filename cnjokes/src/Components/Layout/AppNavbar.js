import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export function AppNavbar() {
  return (
    <Navbar color="faded" dark>
      <NavbarBrand href="/">CNjokes</NavbarBrand>
    </Navbar>
  );
}