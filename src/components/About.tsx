import { Box, Card, Stack, Typography } from "@mui/joy";
import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <Box
            ref={ref}
            width={1}
            display="flex"
            paddingBottom="20vh"
            flexDirection="column"
            alignItems="center"
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
                <Typography level="h1">ABOUT</Typography>
            </Stack>
            <Card sx={{ padding: 3 }}>
                <Stack gap={3}>
                    <Typography level="body-lg">
                        Hi, my name is <Typography>Drevayne!</Typography> I'm a passionate <Typography>full-stack web
                        developer</Typography> on a mission to transform ideas into
                        captivating, one-of-a-kind websites. With a creative
                        flair and a love for <Typography>problem-solving</Typography>, I thrive on
                        crafting digital experiences that exceed expectations.
                    </Typography>
                    <Typography>
                        My journey in the world of web development has allowed
                        me to combine <Typography>cutting-edge</Typography> technology with a keen eye
                        for <Typography>design</Typography>, resulting in a portfolio of projects that
                        I'm proud to share with you. Whether it's building a
                        sleek e-commerce platform or creating a dynamic personal
                        blog, I'm dedicated to turning your <Typography>vision</Typography> into a
                        reality.
                    </Typography>
                    <Typography level="body-lg">
                        Here's what I've working with lately:
                    </Typography>
                    <Box
                        sx={(theme) => ({
                            display: "flex",
                            justifyContent: "space-between",
                            textAlign: "center",
                            flexWrap: "wrap",

                            "& .MuiTypography-root": {
                                width: "30%",
                                marginTop: 1,
                                flexGrow: 1,
                                fontWeight: "bold",
                                [theme.breakpoints.down("md")]: {
                                    width: "50%",
                                },
                                [theme.breakpoints.down("sm")]: {
                                    fontSize: theme.fontSize.sm,
                                },

                                "&::before": {
                                    content: "'▹ '",
                                    color: theme.vars.palette.primary[500],
                                },
                            },
                        })}
                    >
                        <Typography level="body-lg">JavaScript</Typography>
                        <Typography level="body-lg">TypeScript</Typography>
                        <Typography level="body-lg">React</Typography>
                        <Typography level="body-lg">ExpressJS</Typography>
                        <Typography level="body-lg">GraphQL</Typography>
                        <Typography level="body-lg">MongoDB</Typography>
                    </Box>
                </Stack>
            </Card>
        </Box>
    );
});
export default About;
