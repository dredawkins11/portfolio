import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/joy";

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
                <a href="#">
                    <Typography
                        sx={{
                            writingMode: "vertical-rl",
                            textOrientation: "sideways",
                            letterSpacing: 1
                        }}
                    >
                        dredawkins11@gmail.com
                    </Typography>
                </a>
                <div></div>
            </Stack>
            <Stack>
                <a href="#">
                    <IconButton>
                        <GitHub />
                    </IconButton>
                </a>
                <a href="#">
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </a>
                <div></div>
            </Stack>
        </Stack>
    );
};
export default SideDecorations;
