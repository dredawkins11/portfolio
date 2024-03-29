import {
    Box,
    Stack,
    Typography,
    styled,
} from "@mui/joy";

// import Resume from "../assets/resume.pdf"

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
            position="absolute"
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 1,
                paddingX: 3,
                paddingY: 2,
                background: "none",
                zIndex: 100,
            }}
        >
            <Stack
                direction="row"
                flexGrow={1}
                gap={5}
                sx={{
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                <NavLink onClick={() => onScroll("hero")}>Home</NavLink>
                <NavLink onClick={() => onScroll("about")}>About</NavLink>
                <NavLink onClick={() => onScroll("projects")}>Projects</NavLink>
                <NavLink onClick={() => onScroll("contact")}>Contact</NavLink>
                {/* <Link href={Resume}>
                    <Button variant="outlined" size="sm">
                        RESUME
                    </Button>
                </Link> */}
            </Stack>
        </Box>
    );
};
export default NavBar;
