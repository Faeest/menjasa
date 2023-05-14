import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import ModeToggler from "./ModeToggler";
import { Button, Collapse, IconButton, LightMode, Tooltip, useBoolean, useColorMode, useDisclosure } from "@chakra-ui/react";
import { useSession, useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { listenAuth } from "@/helpers/redirect";

const navigation = [
    { name: "Home", href: "/home" },
    { name: "FAQ", href: "/home/faq" },
    { name: "Job", href: "/home/job" },
    { name: "Talent Finder", href: "/home/talent" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar({ active }) {
    const { isOpen, onToggle } = useDisclosure(),
        { colorMode, toggleColorMode } = useColorMode(),
        [loading, setLoading] = useState(true),
        supabase = useSupabaseClient(),
        user = useUser(),
        session = useSession();
    useEffect(() => {
        if (user) {
            getProfile();
        }
    }, [session]);
    async function getProfile() {
        try {
            setLoading(true);
            let { data, error, status } = await supabase.from("profiles").select(`username, avatar_url, role (name), jobs (title, description, slug, type, salary, tags(name, categories(name)))`).eq("id", user.id).single();
            if (error && status !== 406) throw error;
            if (data) {
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <nav className="bg-white dark:bg-gunmetal drop-shadow-sm sticky z-50 top-0">
            <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 ">
                <div className="relative flex lg:flex-row-reverse lg:justify-center h-16 items-center justify-between gap-[25px]">
                    {/* Profile dropdown */}
                    <Menu as="div" className="pl-2">
                        <ModeToggler variant="ghost" />
                    </Menu>

                    <div className="flex flex-1 items-center justify-center md:justify-center">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="block h-6 w-auto lg:hidden dark:hidden" src="/images/logo.png" alt="Your Company" />
                            <img className="hidden h-8 w-auto lg:block dark:hidden" src="/images/logo.png" alt="Your Company" />
                            <img className="dark:block h-6 w-auto dark:lg:hidden hidden" src="/images/logo-white.png" alt="Your Company" />
                            <img className="dark:hidden h-8 w-auto dark:lg:block hidden" src="/images/logo-white.png" alt="Your Company" />
                        </div>
                        <div className="hidden lg:block md:ml-6 grow">
                            <div className="flex space-x-4 justify-center max-w-[52rem]">
                                {navigation.map((item, index) => (
                                    <a key={item.name} href={item.href} className={classNames(index == active - 1 ? " text-teal-700 font-bold dark:text-mint" : "text-mono-800 font-medium dark:text-mono-200 hover:text-teal-700 dark:hover:text-mint", "px-3 py-2 text-base")} aria-current={index == active - 1 ? true : undefined}>
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="hidden lg:block md:hidden items-center">
                            {user ? (
                                <Tooltip hasArrow placement="top" label="Log Out" bg="palette.dark" color="palette.light">
                                    <IconButton
                                        borderRadius={"2sm"}
                                        colorScheme="mint"
                                        onClick={async () => {
                                            await supabase.auth.signOut();
                                            redir("/auth/login");
                                        }}
                                        variant="ghost"
                                        icon={<FontAwesomeIcon icon={solid.faRightFromBracket} />}
                                    />
                                </Tooltip>
                            ) : (
                                <LightMode>
                                    <Button borderRadius={"sm"} as="a" href="/auth/login" className="mr-4" fontSize="14px" px="30px" colorScheme="mint" color="palette.white" fontWeight="500">
                                        Login
                                    </Button>
                                    <Button as="a" href="/auth/register" borderRadius={"sm"} variant="outline" colorScheme="mint" color="palette.mint" fontSize="14px" px="25px" _hover={{ backgroundColor: "palette.mint", color: "palette.white", borderColor: "transparent" }}>
                                        Sign Up
                                    </Button>
                                </LightMode>
                            )}
                        </div>
                    </div>
                    <div className="pr-2 lg:hidden md:ml-6 md:pr-0">
                        <div className="relative flex items-center">
                            {/* Mobile menu button*/}
                            <IconButton onClick={onToggle} variant={"ghost"} colorScheme={colorMode === "light" ? "gray" : "flash"} className="inline-flex items-center justify-center rounded-md">
                                <FontAwesomeIcon icon={solid.faBars} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>

            <Collapse in={isOpen} animateOpacity>
                <div className=" px-2 pb-3 pt-2 flex flex-wrap lg:hidden ">
                    <div className={"w-full gap-[15px] flex" + (user ? "" : "justify-center")}>
                        {user ? (
                            <button
                            className="text-teal-600 dark:text-mono-200 font-bold text-left hover:text-teal-700 dark:hover:text-mint navlink block rounded-md py-[.5rem] px-[.75rem] text-base w-full"
                                onClick={async () => {
                                    await supabase.auth.signOut();
                                    redir("/auth/login");
                                }}
                                variant="unstyled"
                            >
                                Log out
                            </button>
                        ) : (
                            <>
                                <Button borderRadius={"sm"} as="a" href="/auth/login" fontSize="14px" colorScheme="mint" color="palette.white" fontWeight="500">
                                    Login
                                </Button>
                                <Button className="mt-0" as="a" href="/auth/register" borderRadius={"sm"} variant="outline" colorScheme="mint" color="palette.mint" fontSize="14px" _hover={{ backgroundColor: "palette.mint", color: "palette.white", borderColor: "transparent" }}>
                                    Sign Up
                                </Button>
                            </>
                        )}
                    </div>
                    <div className="space-y-1 w-full">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className={classNames(item.current ? "text-teal-700 dark:text-mint font-bold" : "text-mono-800 dark:text-mono-200 font-medium hover:text-teal-700 dark:hover:text-mint", "navlink block rounded-md px-3 py-2 text-base w-full")} aria-current={item.current ? "page" : undefined}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </Collapse>
        </nav>
    );
}
