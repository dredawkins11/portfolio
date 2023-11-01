import { Box, Card, Stack, Typography } from "@mui/joy";
import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((props, ref) => {
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
            <Card sx={{padding: 3}}>
                <Stack gap={3}>
                    <Typography level="body-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis veritatis cum eveniet iusto placeat corrupti
                        debitis similique rerum quo necessitatibus illum,
                        perspiciatis exercitationem ea voluptatem architecto
                        amet asperiores omnis odit, incidunt beatae rem modi
                        quaerat expedita!
                    </Typography>
                    <Typography level="body-lg">
                        Here's what I've working with lately:
                    </Typography>
                    <Box sx={(theme) => ({
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
                                width: "50%"
                            },
                            [theme.breakpoints.down("sm")] : {
                                fontSize: theme.fontSize.sm
                            },

                            "&::before": {
                                content: "'▹ '",
                                color: theme.vars.palette.primary.plainColor
                            }
                        }
                    })}>
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
