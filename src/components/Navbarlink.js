import { Link, useColorMode } from "@chakra-ui/react";

export default function NavbarLink(props) {
    const { colorMode } = useColorMode(),
    initialProps = {
        _hover: {
            textDecoration: "none",
            color : colorMode == "light" ? "mint.500" : "palette.mint"
        },
        fontWeight : 500,
        fontSize : "1.1rem",
        className:"navlink"
    }
    // modified["_hover"] ? (modified["_hover"]["textDecoration"] = "none") : (modified._hover = { textDecoration: "none" });
    // modified["fontWeight"] ?? (modified["fontWeight"] = 500);
    // modified["fontSize"] ?? (modified["fontSize"] = "1.1rem");
    // modified["_hover"]["color"] ?? (modified["_hover"]["color"] = colorMode == "light" ? "mint.500" : "palette.mint");

    return <Link {...initialProps} {...props}>{props.children}</Link>;
}
