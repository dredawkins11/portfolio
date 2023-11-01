import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Button, IconButton, Link, Stack, Typography } from "@mui/joy";
import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <Box
            ref={ref}
            width={1}
            display="flex"
            flexDirection="column"
            alignItems="stretch"
            paddingBottom="20vh"
        >
            <Stack
                direction="row"
                alignItems="center"
                mb={3}
                gap={3}
                sx={{
                    width: 1,
                    justifyContent: "space-between",
                    "& div": {
                        flexGrow: 1,
                        height: "1px",
                        border: "none",
                        borderTop: "solid 1px ",
                    },
                }}
            >
                <div></div>
                <Typography level="h1">CONTACT</Typography>
                <div></div>
            </Stack>
            <Stack gap={3} alignItems="center">
                <Typography level="body-lg" textAlign="center" width={1}>
                    Ready to turn your web project ideas into reality? Let's
                    collaborate and bring your vision to life. Reach out to me,
                    and let's start building something amazing together. I'm
                    just a click away, so don't hesitate to get in touch!
                </Typography>
                <Stack
                    direction="row"
                    sx={(theme) => ({
                        [theme.breakpoints.up("md")]: { display: "none" },
                    })}
                >
                    <Link href="https://github.com/dredawkins11">
                        <IconButton>
                            <GitHub />
                        </IconButton>
                    </Link>
                    <Link>
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </Link>
                </Stack>
                <Link href="mailto:dredawkins11@gmail.com">
                    <Button>Reach Out</Button>
                </Link>
            </Stack>
        </Box>
    );
});
export default Contact;
