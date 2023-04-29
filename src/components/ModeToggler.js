import * as solid from "@fortawesome/free-solid-svg-icons";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export default function ModeToggler(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    useEffect(()=>{
        if (localStorage["chakra-ui-color-mode"] === "dark" || (!("chakra-ui-color-mode" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    },[colorMode])
    return <IconButton {...props} variant={props.variant ?? "outline"} colorScheme={colorMode === "light" ? "gunmetal" : "orange"} onClick={toggleColorMode} icon={colorMode === "light" ? <FontAwesomeIcon icon={solid.faMoon} /> : <FontAwesomeIcon icon={solid.faSun} />} />;
}
