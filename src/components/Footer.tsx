import { Button, Box } from "@mui/joy";
import { Code } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box mb={5}>
            <a href="#">
                <Button variant="outlined" endDecorator={<Code />}>
                    See my source code
                </Button>
            </a>
        </Box>
    );
};
export default Footer;
