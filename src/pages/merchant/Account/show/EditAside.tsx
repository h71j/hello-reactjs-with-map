import { Typography, Box, Grid } from "@mui/material";

import {
    useRecordContext,
    useTranslate
} from "react-admin";
import CircularDeterminate from "./Progress";

import SystemInformation from "./SystemInformation";

// 编辑边路显示
const EditAside = () => {
    const translate = useTranslate()
    const record = useRecordContext();
    if (!record) {
        return (
            <Box sx={{ width: '400px', margin: '1em', height: '600px' }}>
    
                <Grid container>
                    <Grid item xs={8} sm={8} md={8}>
                    <Typography variant="h6">
                        {translate(
                            'resources.header.fields.title.system'
                        )}
                        </Typography>
                        {/* 骨架显示 */}
                    </Grid>
                </Grid>
            </Box>
        );
    }
    return (
        <Box sx={{ width: '400px', margin: '1em', height: '600px' }}>

            <Grid container>
                <Grid item xs={8} sm={8} md={8}>
                <Typography variant="h6">
                    {translate(
                        'resources.header.fields.title.system'
                    )}
                    </Typography>
                    {/* 配置完成百分比 */}
                    <CircularDeterminate />
                    
                    {/* 系统信息 */}
                    <SystemInformation record={record} />
                    {/* 运营信息 */}
                    {/* 客户信息 */}
                </Grid>
            </Grid>
        </Box>
    );
}

export default EditAside;