import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Textarea,
    Typography,
} from "@mui/joy";
import { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
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
            </Stack>
            <Stack gap={1}>
                <FormControl>
                    <FormLabel>NAME</FormLabel>
                    <Input name="name" />
                </FormControl>
                <FormControl>
                    <FormLabel>EMAIL</FormLabel>
                    <Input name="email" />
                </FormControl>
                <FormControl>
                    <FormLabel>MESSAGE</FormLabel>
                    <Textarea minRows={4} name="message" />
                </FormControl>
            </Stack>
        </Box>
    );
});
export default Contact;
