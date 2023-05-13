import {
    Input,
    InputGroup,
    Stack,
    InputLeftElement,
    Select,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from "@chakra-ui/react";
import { Country, State, City } from "country-state-city";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";

export default function InputGroupJob() {
    return (
        <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-8 text-center lg:text-left md:text-center sm:text-center">
            <div className="flex lg:flex-nowrap flex-wrap gap-4 ">
                <Stack className="grow shrink min-w-[100px] w-[100%] lg:w-auto">
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={
                                <FontAwesomeIcon
                                    icon={solid.faMagnifyingGlass}
                                    style={{ color: "#acacac" }}
                                />
                            }
                        />
                        <Input
                            bgColor="#ffff"
                            variant="outline"
                            placeholder="Find by name here..."
                        ></Input>
                    </InputGroup>
                </Stack>

                <Stack className="min-w-[100px] grow shrink w-[100%] md:w-auto">
                    <Select
                        size="md"
                        bgColor="#ffff"
                        placeholder="Choose Spesialization"
                    >
                        <option>Test1</option>
                        <option>Test2</option>
                        <option>Test3</option>
                    </Select>
                </Stack>

                <Stack className="grow shrink min-w-[100px] w-[100%] sm:w-auto">
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={
                                <FontAwesomeIcon
                                    icon={solid.faCity}
                                    style={{ color: "#acacac" }}
                                />
                            }
                        />
                        <Input
                            bgColor="#ffff"
                            variant="outline"
                            placeholder="Find by city here..."
                        ></Input>
                    </InputGroup>
                </Stack>
                <Menu>
                    <MenuButton
                        width="150px"
                        className="bg-[#acacac] hover:bg-[#f9f9f9] grow lg:grow-0"
                        fontWeight="400"
                        bgColor="#ffff"
                        as={Button}
                        leftIcon={
                            <FontAwesomeIcon icon={solid.faBarsProgress} />
                        }
                    >
                        Sort Filter
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Newests Post</MenuItem>
                        <MenuItem>Oldest Post</MenuItem>
                        <MenuItem>Popular Post</MenuItem>
                    </MenuList>
                </Menu>

                <Button
                    borderRadius={"md"}
                    as="a"
                    href="/auth/login"
                    className="shadow-md grow-0"
                    fontSize="16px"
                    bgColor="palette.dark"
                    color="palette.white"
                    fontWeight="500"
                >
                    Reset
                </Button>
            </div>
        </div>
    );
}
