import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import ModeToggler from "./ModeToggler";
import { Button, Collapse, IconButton, useBoolean, useColorMode, useDisclosure } from "@chakra-ui/react";

const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "FAQ", href: "#", current: false },
    { name: "Job", href: "#", current: false },
    { name: "Talent Finder", href: "#", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure(),
        { colorMode, toggleColorMode } = useColorMode();
    return (
        <nav className="bg-white drop-shadow-sm">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                <div className="relative flex h-16 items-center justify-between gap-[25px]">
                    {/* Profile dropdown */}
                    <Menu as="div" className="absolute lg:right-0 md:right-0 pl-2">
                        <ModeToggler variant="ghost" />
                    </Menu>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="block h-6 w-auto lg:hidden" src="/images/logo.png" alt="Your Company" />
                            <img className="hidden h-8 w-auto lg:block" src="/images/logo.png" alt="Your Company" />
                        </div>
                        <div className="hidden sm:ml-6 sm:block grow">
                            <div className="flex space-x-4 justify-center max-w-[52rem]">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className={classNames(item.current ? " text-mint" : "text-black hover:text-mint", "px-3 py-2 text-base font-medium")} aria-current={item.current ? "page" : undefined}>
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="hidden lg:block md:hidden sm:hidden items-center">
                            <Button 
                              as="a" 
                              href="login" 
                              className="mr-4 text-center"
                              fontSize="14px"
                              px="30px"
                              colorScheme="tiffany"
                              color="palette.white"
                              fontWeight="500"
                            >Login</Button>
                            <Button 
                              as="a" 
                              href="register" 
                              variant="outline"
                              colorScheme="black"
                              fontSize="14px"
                              px="25px"
                              _hover={{backgroundColor:"palette.mint", color:"palette.white"}}
                            >Sign Up</Button>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <IconButton onClick={onToggle} variant={"ghost"} colorScheme={colorMode === "light" ? "gray" : "flash"} className="inline-flex items-center justify-center rounded-md">
                                <FontAwesomeIcon icon={solid.faBars} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>

            <Collapse in={isOpen} animateOpacity className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 flex flex-wrap">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className={classNames(item.current ? "text-mint" : "text-black hover:text-mint", "navlink block rounded-md px-3 py-2 text-base font-medium w-full")} aria-current={item.current ? "page" : undefined}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </Collapse>

        </nav>
    );
}
