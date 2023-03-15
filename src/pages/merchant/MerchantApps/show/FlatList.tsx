import {
    CloneButton,
    Datagrid,
    NumberField,
    ReferenceField, SelectField, TextField
} from 'react-admin';

// 扁平列表
const FlatList = () => {
    return (
        <Datagrid rowClick="edit">
            <TextField source="name" label="resources.pages.apps.fields.name" />
            <TextField source="key" label="resources.pages.apps.fields.key" />
            <NumberField source="price" label="resources.pages.apps.fields.price" />
            <TextField source="desc" label="resources.pages.apps.fields.desc" />
            <CloneButton />

        </Datagrid>
    )
};

export default FlatList;