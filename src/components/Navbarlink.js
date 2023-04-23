import { Link, useColorMode } from "@chakra-ui/react";

export default function NavbarLink(props) {
    const { colorMode, toggleColorMode } = useColorMode();
    let modified = structuredClone(props);
    modified["_hover"] ? (modified["_hover"]["textDecoration"] = "none") : (modified._hover = { textDecoration: "none" });
    modified["fontWeight"] ?? (modified["fontWeight"] = 600);
    modified["fontSize"] ?? (modified["fontSize"] = "1.1rem");
    modified["_hover"]["color"] ?? (modified["_hover"]["color"] = colorMode == "light" ? "mint.500" : "palette.mint");
    return <Link {...modified}>{modified.children}</Link>;
}
