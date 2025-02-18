import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function NavbarDefault() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li><NavLink to="/">Home</NavLink></li>
            <li>   <NavLink to={'/findjob'}>
                Find Job
            </NavLink></li>

            <li>   <NavLink to={'/findjob'}>
                Find Job
            </NavLink></li>

            <li>   <NavLink to={'/findjob'}>
                Find Job
            </NavLink></li>

            <li>   <NavLink to={'/findjob'}>
                Find Job
            </NavLink></li>

        </ul>
    );

    return (
        <Navbar className="mx-auto  py-2  lg:py-3">
            <div className="2xl:max-w-[1400px] max-w-full px-3 md:px-8 xl:max-w-[1240px] container  mx-auto flex items-center justify-between text-black">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer  lg:text-3xl text-black font-medium"
                >
                    Hire<span className="text-[#0275D8]">ly</span>
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <div className="flex items-center xl:gap-2 gap-x-1">
                   
                    <Button
                        variant="#0275D8"
                        size="sm"
                        className="hidden lg:inline-block bg-[#f4f7fb] text-black"
                    >
                        <span>Log In</span>
                    </Button>

                    <Button
                        variant="#0275D8"
                        size="sm"
                        className="hidden lg:inline-block bg-[#cbe1f5] text-black"
                    >
                        <span>Sign in</span>
                    </Button>
                    <Button
                        variant="#0275D8"
                        size="sm"
                        className="hidden lg:inline-block bg-[#0275D8]"
                    >
                        <span>For Agency</span>
                    </Button>
                  
                        <select className="border border-gray-300 rounded-md text-[#0275D8] p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 hidden lg:inline-block">
                            <option>English</option>
                            <option>English</option>
                        </select>
                   


                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto text-black">
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="text" size="sm" className="">
                            <span>Log In</span>
                        </Button>
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <span>Sign in</span>
                        </Button>
                    </div>
                </div>
            </MobileNav>
        </Navbar>
    );
}