import React, { PropsWithChildren } from "react";
import NavbarAdmin from "./Navbar-Admin.js"
import NavbarUser from "./Navbar-Staff.js"

function Navbar({ children }) {
    const userRole = localStorage.getItem("userRole");
    if (userRole == "USER") {
        return (
            <NavbarUser>
                {children}
            </NavbarUser>
        )
    }
    else {
        return (
            <NavbarAdmin>
                {children}
            </NavbarAdmin>
        )
    }
}

export default Navbar;