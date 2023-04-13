import * as solid from "@fortawesome/free-solid-svg-icons";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModeToggler() {
    const { colorMode, toggleColorMode } = useColorMode();

    return <IconButton variant="outline" colorScheme="white" color={colorMode === "light" ? "palette.black" : "#fee440"} onClick={toggleColorMode} icon={colorMode === "light" ? <FontAwesomeIcon icon={solid.faMoon} /> : <FontAwesomeIcon icon={solid.faSun} />} />;
}
