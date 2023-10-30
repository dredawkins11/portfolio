import { Box, Card, Stack, Typography } from "@mui/joy";

const About = () => {
    return (
        <Box
            width={1}
            display="flex"
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
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        flexWrap: "wrap",
                        gap: 3,
                        "& .MuiTypography-root": {
                            // textAlign: "center",
                            minWidth: .2,
                            fontWeight: "bold",

                            "&::before": {
                                content: "'▹'",
                                color: theme.vars.palette.primary.plainColor
                            }
                        }
                    })}>
                        <Typography level="body-lg">JavaScript</Typography>
                        <Typography level="body-lg">TypeScript</Typography>
                        <Typography level="body-lg">React</Typography>
                        <Typography level="body-lg">NodeJS</Typography>
                        <Typography level="body-lg">ExpressJS</Typography>
                        <Typography level="body-lg">MongoDB</Typography>
                    </Box>
                </Stack>
            </Card>
        </Box>
    );
};
export default About;
