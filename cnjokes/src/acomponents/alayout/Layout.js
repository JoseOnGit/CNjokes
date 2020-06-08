import React from "react";

import AppNavbar from "./AppNavbar";
import AppFooter from './AppFooter';

function Layout({ children }) {
    return (
        <>
            <AppNavbar />
                {children}
            <AppFooter />
        </>
    )
}

export default Layout;