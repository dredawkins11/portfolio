import { Button, Box, Link } from "@mui/joy";
import { Code } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box mb={5}>
            <Link href="https://github.com/dredawkins11/portfolio">
                <Button variant="outlined" endDecorator={<Code />}>
                    See my source code
                </Button>
            </Link>
        </Box>
    );
};
export default Footer;
