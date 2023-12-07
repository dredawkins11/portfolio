import { Stack, Typography } from "@mui/joy";

interface SectionHeaderProps {
    text: string;
}

const SectionHeader = ({ text }: SectionHeaderProps) => {
    return (
        <Stack
            direction="row"
            sx={(theme) => ({
                width: 1,
                gap: 1,
                mb: 3,
                justifyContent: "space-between",
                alignItems: "flex-end",
                "& div": {
                    flexGrow: 1,
                    height: "1px",
                    backgroundImage: `linear-gradient(90deg,rgba(0,0,0,0) 0%, ${theme.palette.text.primary} 100%)`,
                },
                "& div:last-child": {
                    backgroundImage: `linear-gradient(90deg,${theme.palette.text.primary} 0%, rgba(0,0,0,0) 100%);`,
                },
            })}
        >
            <div></div>
            <Typography level="h1" lineHeight={0.6}>
                {text}
            </Typography>
            <div></div>
        </Stack>
    );
};
export default SectionHeader;
