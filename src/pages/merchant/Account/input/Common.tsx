import { Card, CardContent, Box, Grid, Typography, Link } from '@mui/material';

import {Create, FormTab, required, TabbedForm, TextInput,
    BooleanInput,
    SelectInput,
    ReferenceInput,
    useTranslate,
    AutocompleteInput,
    ArrayInput,
    NumberInput,
    SimpleFormIterator,
    CheckboxGroupInput,
    RadioButtonGroupInput,
    ReferenceArrayInput,
} from 'react-admin';
import { optionsList } from '../data/Version';


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
                <Grid item xs={12} sm={12} md={6}>
                    <TextInput
                            label="resources.pages.account.fields.name"
                            source="name"
                    />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                        <TextInput
                            label="resources.pages.account.fields.phone"
                            source="phone"
                        />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                        <TextInput
                            label="resources.pages.account.fields.password"
                            source="password"
                        />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <NumberInput
                        label="resources.pages.account.fields.maxStoreNumber"
                        source="max_store_number"
                        defaultValue={5}
                    />
                </Grid>
            </Grid>
            {/* 用户自定义输入结束 */}
            
            <Spacer />
            <Typography variant="h6" gutterBottom>
                        {translate(
                            'resources.header.fields.title.select'
                        )}
            </Typography>

            {/* 用户自定义选择部分 */}
            <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                    <ReferenceInput
                        source="version"
                        reference="merchant/version"
                    >
                        <SelectInput
                            label="resources.pages.account.fields.version"
                            validate={req}
                            optionText={'name'}
                            optionValue={'id'}
                        />
                    </ReferenceInput>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <ReferenceInput source="apps" reference="merchant/apps">

                    <CheckboxGroupInput
                            label="resources.pages.account.fields.apps"
                            source='id'
                            optionText={'name'}
                            optionValue={'key'}

                        />
                    </ReferenceInput>
                </Grid>
                
            </Grid>
            
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