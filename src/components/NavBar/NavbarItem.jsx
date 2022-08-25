import React from "react";

const NavbarItem = ({ title, href }) => {
    return (
        <a href={href} className="hover:text-two cursor-pointer before:absolute before:w-0 before:h-[2px] before:bg-two relative before:bottom-0 before:transition-all before:duration-500 before:hover:w-full">
            {title}
        </a>
    );
};

export default NavbarItem;
