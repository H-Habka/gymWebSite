import React, { useEffect, useRef, useState } from "react";
import NavbarItem from "./NavbarItem";

const NavBar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [isSkiped, setIsSkiped] = useState(false);

    let oldScroll = useRef(0);
    let scrollDirection = useRef("");

    useEffect(() => {
        const scrollListener = (e) => {
            if (window.scrollY > oldScroll.current && showNavbar) {
                scrollDirection.current = "down";
                setShowNavbar(false);
            } else if (window.scrollY < oldScroll.current && !showNavbar) {
                scrollDirection.current = "up";
                setShowNavbar(true);
            }
            oldScroll.current = window.scrollY;

            if (window.scrollY >= 100 && !isSkiped) {
                setIsSkiped(true);
            } else if (window.scrollY < 100 && isSkiped) {
                setIsSkiped(false);
            }
        };

        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        };
    }, [showNavbar, isSkiped]);
    return (
        <div
            className={`pt-2 transition-all duration-1000 w-full flex justify-between items-center sm:px-10 px-2 z-50 fixed 
           ${
               showNavbar
                   ? ` top-0 ${isSkiped ? "bg-gray-900" : "bg-transparent"} `
                   : " -top-20 "
           }`}
        >
            <div className="w-44 sm:w-52">
                <img
                    loading="lazy"
                    src={require("../../images/TheFitClubLogo.webp")}
                    alt="logo"
                />
            </div>
            <div className="lg:flex gap-4 items-center text-white text-xl hidden">
                <NavbarItem href="#home" title="Home" />
                <NavbarItem href="#programs" title="Programs" />
                <NavbarItem href="#whyUs" title="Why us" />
                <NavbarItem href="#plans" title="Plans" />
                <NavbarItem href="#testimonials" title="Testimonials" />
            </div>
            <div>
                <a href="https://api.whatsapp.com/send?phone=971565561153&text=Hi" target="_blank"  rel="noreferrer" className="hover:bg-one bg-white hover:text-white text-one px-6 py-2 text-lg font-semibold">
                    join now
                </a>
            </div>
        </div>
    );
};

export default NavBar;
