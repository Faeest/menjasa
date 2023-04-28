import * as solid from "@fortawesome/free-solid-svg-icons";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModeToggler(props) {
    const { colorMode, toggleColorMode } = useColorMode();

    return <IconButton {...props} variant={props.outline ?? "outline"} colorScheme={colorMode === "light" ? "gunmetal" : "orange"} onClick={toggleColorMode} icon={colorMode === "light" ? <FontAwesomeIcon icon={solid.faMoon} /> : <FontAwesomeIcon icon={solid.faSun} />} />;
}
