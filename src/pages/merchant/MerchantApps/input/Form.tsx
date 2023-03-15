// Box60Form 是常规中等大小的输入表单

import { Box, Card, CardContent } from "@mui/material";
import { Form, Toolbar } from "react-admin";
import BaseInputFields from "./Common";

// 可以应用与简单的输入页面
const Box60Form= () => {
    return (
        <Form defaultValues={{id: '000000000000000000000000' }}>
            <Box maxWidth="60em">
                <Card>
                    <CardContent>
                        <BaseInputFields/>
                    </CardContent>
                    <Toolbar />
                </Card>
            </Box>
        </Form>
    );
};

export {
    Box60Form,
}