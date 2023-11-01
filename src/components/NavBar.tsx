import { Menu } from "@mui/icons-material";
import {
    Box,
    Button,
    Drawer,
    IconButton,
    Link,
    Stack,
    Typography,
    styled,
} from "@mui/joy";
import { useState } from "react";

interface NavBarProps {
    onScroll: (section: "hero" | "about" | "projects" | "contact") => void;
}

const NavLink = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("md")]: { display: "none" },
    ...theme.typography.h3,
    "&:hover": {
        transform: `translateY(-${theme.spacing(0.5)})`,
        color: theme.vars.palette.neutral.plainHoverColor,
    },
}));

const NavBar = ({ onScroll }: NavBarProps) => {
    return (
        <Box
            position="fixed"
            sx={(theme) => ({
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 1,
                paddingX: 3,
                paddingY: 1,
                backgroundColor: theme.palette.background.backdrop,
                backdropFilter: "blur(3px)",
                zIndex: 100,
            })}
        >
            <Typography level="h1">DD</Typography>
            <Stack
                direction="row"
                flexGrow={1}
                gap={5}
                sx={{
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
            >
                <NavLink onClick={() => onScroll("hero")}>Home</NavLink>
                <NavLink onClick={() => onScroll("about")}>About</NavLink>
                <NavLink onClick={() => onScroll("projects")}>Projects</NavLink>
                <NavLink onClick={() => onScroll("contact")}>Contact</NavLink>
                <Link>
                    <Button variant="outlined" size="sm">
                        RESUME
                    </Button>
                </Link>
            </Stack>
        </Box>
    );
};
export default NavBar;
