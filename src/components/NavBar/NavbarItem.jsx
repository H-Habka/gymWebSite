import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ title, href }) => {
    return (
        <Link href={href} to={href} className="hover:text-two cursor-pointer before:absolute before:w-0 before:h-[2px] before:bg-two relative before:bottom-0 before:transition-all before:duration-500 before:hover:w-full">
            {title}
        </Link>
    );
};

export default NavbarItem;
