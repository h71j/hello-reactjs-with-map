import { Card, CardContent, Box, Grid, Typography, Link } from '@mui/material';

import {
    required,
    BooleanInput,
    useTranslate,
    NumberInput,
    TextInput,
} from 'react-admin';


const BaseInputFields = () => {

    const translate = useTranslate();

    return (
        <CardContent>
            <Typography variant="h6" gutterBottom>
                    {translate(
                        'resources.header.fields.title.input'
                    )}
            </Typography>
            
            {/* 用户自定义输入部分 */}
            <Grid container>
                <Grid item xs={12} sm={12} md={4}>
                    <TextInput
                            label="resources.pages.apps.fields.name"
                            source="name"
                    />
                </Grid>


                <Grid item xs={12} sm={12} md={4}>
                        <NumberInput
                            label="resources.pages.apps.fields.price"
                            source="price"
                        />
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                        <TextInput
                            label="resources.pages.apps.fields.key"
                            source="key"
                        />
                </Grid>

                <Grid item xs={12} sm={12} md={8}>
                    <TextInput
                        label="resources.pages.apps.fields.desc"
                        source="desc"
                        multiline
                        />
                </Grid>

            </Grid>
            {/* 用户自定义输入结束 */}
            
            {/* 开关部分 */}
            <Spacer />
            <Typography variant="h6" gutterBottom>
                        {translate(
                            'resources.header.fields.title.switch'
                        )}
            </Typography>


            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <BooleanInput
                        label="resources.header.fields.title.status"
                        source="status"
                        defaultChecked
                    />
                </Grid>
            </Grid>
            
        </CardContent>
    )
    
}

const Spacer = () => <Box m={1}>&nbsp;</Box>;

const req = [required()];

export default BaseInputFields;