import {
    ChipField,
    CloneButton,
    Datagrid,
    NumberField,
    ReferenceField, ReferenceManyField, SelectField, SingleFieldList, TextField
} from 'react-admin';

// 扁平列表
const FlatList = () => {
    return (
        <Datagrid rowClick="edit">
            <TextField source="name" label="resources.pages.version.fields.name" />
            <TextField source="sub_title" label="resources.pages.version.fields.sub_title" />
            <TextField source="badge" label="resources.pages.version.fields.badge" />
            <ReferenceManyField
                label='resources.pages.version.fields.combo'
                reference="merchant/apps" target="combo">
            <SingleFieldList>
                <ChipField source="name" />
            </SingleFieldList>
            </ReferenceManyField>
            
            <NumberField source="price" label="resources.pages.version.fields.price" />
            <TextField source="desc" label="resources.pages.version.fields.desc" />
            <CloneButton />

        </Datagrid>
    )
};

export default FlatList;