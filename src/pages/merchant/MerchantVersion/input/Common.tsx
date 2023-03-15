import { Card, CardContent, Box, Grid, Typography, Link } from '@mui/material';

import {
    required,
    BooleanInput,
    useTranslate,
    NumberInput,
    TextInput,
    ReferenceInput,
    CheckboxGroupInput,
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
            
            {/* // 版本名称
	Name string `json:"name"`

	// 小标题
	Subtitle string `json:"sub_title"`

	// 标签
	Badge string `json:"badge"`

	// 应用价格
	Price uint `json:"price" bson:"price"`

	// 版本介绍
	Desc string `json:"desc"`

	// 包含套餐
            Combo []string `json:"combo" bson:"combo"` */}
        
            {/* 用户自定义输入部分 */}
            <Grid container>
                <Grid item xs={12} sm={12} md={4}>
                    <TextInput
                            label="resources.pages.version.fields.name"
                            source="name"
                    />
                </Grid>


                <Grid item xs={12} sm={12} md={4}>
                        <NumberInput
                            label="resources.pages.version.fields.price"
                            source="price"
                        />
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                        <TextInput
                            label="resources.pages.version.fields.sub_title"
                            source="sub_title"
                        />
                </Grid>

                <Grid item xs={12} sm={12} md={8}>
                    <TextInput
                        label="resources.pages.version.fields.badge"
                        source="badge"
                        />
                </Grid>

                <Grid item xs={12} sm={12} md={8}>
                    <TextInput
                        label="resources.pages.version.fields.desc"
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


                <Grid item xs={12} sm={12} md={8}>
                
                    <ReferenceInput source="combo" reference="merchant/apps">
                    <CheckboxGroupInput
                            label="resources.pages.account.fields.apps"
                            source='id'
                            optionText={'name'}
                            optionValue={'key'}

                        />
                    </ReferenceInput>
                </Grid>
            </Grid>
            
        </CardContent>
    )
    
}

const Spacer = () => <Box m={1}>&nbsp;</Box>;

const req = [required()];

export default BaseInputFields;