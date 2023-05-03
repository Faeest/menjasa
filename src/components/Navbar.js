import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import ModeToggler from "./ModeToggler";
import { Button, Collapse, IconButton, LightMode, useBoolean, useColorMode, useDisclosure } from "@chakra-ui/react";

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
        <nav className="bg-white dark:bg-gunmetal drop-shadow-sm sticky z-50 top-0">
            <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 ">
                <div className="relative flex h-16 items-center justify-between gap-[25px]">
                    {/* Profile dropdown */}
                    <Menu as="div" className="absolute lg:right-0 md:right-0 pl-2">
                        <ModeToggler variant="ghost" />
                    </Menu>

                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="block h-6 w-auto lg:hidden dark:hidden" src="/images/logo.png" alt="Your Company" />
                            <img className="hidden h-8 w-auto lg:block dark:hidden" src="/images/logo.png" alt="Your Company" />
                            <img className="dark:block h-6 w-auto dark:lg:hidden hidden" src="/images/logo-white.png" alt="Your Company" />
                            <img className="dark:hidden h-8 w-auto dark:lg:block hidden" src="/images/logo-white.png" alt="Your Company" />
                        </div>
                        <div className="hidden md:ml-6 md:block grow">
                            <div className="flex space-x-4 justify-center max-w-[52rem]">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className={classNames(item.current ? " text-teal-700 font-bold dark:text-mint" : "text-mono-800 font-medium dark:text-mono-200 hover:text-teal-700 dark:hover:text-mint", "px-3 py-2 text-base")} aria-current={item.current ? "page" : undefined}>
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="hidden lg:block md:hidden items-center">
                            <LightMode>
                                <Button borderRadius={"sm"} as="a" href="login" className="mr-4" fontSize="14px" px="30px" colorScheme="mint" color="palette.white" fontWeight="500">
                                    Login
                                </Button>
                                <Button as="a" href="register" borderRadius={"sm"} variant="outline" colorScheme="mint" color="palette.mint" fontSize="14px" px="25px" _hover={{ backgroundColor: "palette.mint", color: "palette.white", borderColor:"transparent" }}>
                                    Sign Up
                                </Button>
                            </LightMode>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                        <div className="relative flex items-center md:hidden">
                            {/* Mobile menu button*/}
                            <IconButton onClick={onToggle} variant={"ghost"} colorScheme={colorMode === "light" ? "gray" : "flash"} className="inline-flex items-center justify-center rounded-md">
                                <FontAwesomeIcon icon={solid.faBars} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>

            <Collapse in={isOpen} animateOpacity>
                <div className="space-y-1 px-2 pb-3 pt-2 flex flex-wrap md:hidden">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className={classNames(item.current ? "text-teal-700 dark:text-mint font-bold" : "text-mono-800 dark:text-mono-200 font-medium hover:text-teal-700 dark:hover:text-mint", "navlink block rounded-md px-3 py-2 text-base w-full")} aria-current={item.current ? "page" : undefined}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </Collapse>
        </nav>
    );
}
