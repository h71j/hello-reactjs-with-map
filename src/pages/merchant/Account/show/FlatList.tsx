import {
    CloneButton,
    Datagrid,
    ReferenceField,
    TextField
} from 'react-admin';

// 扁平列表
const FlatList = () => {
    return (
        <Datagrid rowClick="edit">
            <TextField source="merchant_id" label="resources.header.fields.title.merchant_id" />
            <TextField source="name" label="resources.pages.account.fields.name" />
            <TextField source="phone" label="resources.pages.account.fields.phone" />
            <ReferenceField
                source='version'
                reference="merchant/version"
                label="resources.pages.account.fields.version">
                <TextField source='name'/>
            </ReferenceField>
            <CloneButton />

        </Datagrid>
    )
};

export default FlatList;