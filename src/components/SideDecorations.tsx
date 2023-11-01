import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton, Link, Stack, Typography } from "@mui/joy";

const SideDecorations = () => {
    return (
        <Stack
            direction="row"
            sx={(theme) => ({
                [theme.breakpoints.down("md")]: {display: "none"},
                justifyContent: "space-between",
                position: "fixed",
                bottom: 0,
                width: 1,
                height: 0.4,
                paddingX: 5,
                "& a": {
                    textDecoration: "none",
                },
                "& .MuiStack-root div": {
                    backgroundColor: theme.vars.palette.text.primary,
                    width: "1px",
                    height: "3rem",
                    marginTop: 3,
                },
                "& .MuiStack-root": {
                    justifyContent: "flex-end",
                    alignItems: "center",
                },
            })}
        >
            <Stack>
                <Link href="mailto:dredawkins11@gmail.com">
                    <Typography
                        sx={{
                            writingMode: "vertical-rl",
                            textOrientation: "sideways",
                            letterSpacing: 1
                        }}
                    >
                        dredawkins11@gmail.com
                    </Typography>
                </Link>
                <div></div>
            </Stack>
            <Stack>
                <Link href="https://github.com/dredawkins11">
                    <IconButton>
                        <GitHub />
                    </IconButton>
                </Link>
                <Link href="https://www.linkedin.com/in/drevayne-dawkins/">
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </Link>
                <div></div>
            </Stack>
        </Stack>
    );
};
export default SideDecorations;
