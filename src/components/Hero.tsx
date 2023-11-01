import { Box, Stack, Typography, styled } from "@mui/joy";
import { forwardRef } from "react";

const Hero = forwardRef<HTMLDivElement>((props, ref) => {
    const Letter = styled(Typography)(({ theme }) => ({
        fontSize: "5rem",
        fontWeight: 100,
        [theme.breakpoints.down("md")]: {
            fontSize: "4rem"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "3rem"
        },
    }));

    return (
        <Box
            ref={ref}
            width="100%"
            height="110vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                display="flex"
                flexDirection="column"
                sx={{
                    position: "relative",
                    "& svg": {
                        width: "33vw",
                        height: "11vw",
                    },
                }}
            >
                {/* <Stack direction="row" justifyContent="space-between">
                    <Typography level="h4">FULL</Typography>
                    <Typography level="h4">STACK</Typography>
                    <Typography level="h4">WEB</Typography>
                    <Typography level="h4">DEVELOPMENT</Typography>
                </Stack> */}
                <Typography
                    sx={(theme) => ({
                        fontSize: "5rem",
                        [theme.breakpoints.down("md")]: {
                            fontSize: "4rem"
                        },
                        [theme.breakpoints.down("sm")]: {
                            fontSize: "3rem"
                        },
                        fontWeight: 900,
                        margin: 0,
                        lineHeight: "1rem",
                    })}
                >
                    DREVAYNE
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                    {Array.from("DAWKINS").map((letter, i) => (
                        <Letter key={i}>{letter}</Letter>
                    ))}
                </Stack>
                {/* <HeroSVG /> */}
            </Box>
        </Box>
    );
});
export default Hero;
