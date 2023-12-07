import { GitHub, Launch } from "@mui/icons-material";
import {
    Box,
    Card,
    IconButton,
    Link,
    Stack,
    Typography,
    styled,
} from "@mui/joy";

const ProjectCard = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
    backgroundColor: "none",
    backdropFilter: "blur(3px)",
    [theme.breakpoints.up("md")]: {
        aspectRatio: "3/1",
        width: "30%",
    },
}));

interface ProjectProps {
    index: number;
    title: string;
    description: string;
    tech: string[];
    github: string;
    deployed: string;
}

const Project = ({
    index,
    title,
    description,
    tech,
    github,
    deployed,
}: ProjectProps) => {
    return (
        <Card
            sx={(theme) => ({
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                gap: 1,
                padding: 2,
                [theme.breakpoints.up("md")]: {
                    aspectRatio: 1/1.1,
                    width: "20%",
                },
            })}
        >
            <Stack flexDirection="row" justifyContent="space-between">
                <Typography level="body-lg" color="neutral">
                    {index < 10 ? `0${index}.` : `${index}.`}
                </Typography>
                <Box>
                    <Link href={deployed}>
                        <IconButton size="sm">
                            <Launch />
                        </IconButton>
                    </Link>
                    <Link href={github}>
                        <IconButton size="sm">
                            <GitHub />
                        </IconButton>
                    </Link>
                </Box>
            </Stack>
            <Typography level="h4" lineHeight={1}>
                {title}
            </Typography>
            <Typography
                level="body-md"
                sx={(theme) => ({
                    lineHeight: 1.3,
                    flexGrow: 1,
                    mb: 2,
                    fontWeight: 200,
                    color: theme.palette.text.primary,
                })}
            >
                {description}
            </Typography>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignContent="center"
            >
                {tech.map((tech, i) => (
                    <Typography key={i} level="body-sm">
                        {tech}
                    </Typography>
                ))}
            </Stack>
        </Card>
    );
};
export default Project;
