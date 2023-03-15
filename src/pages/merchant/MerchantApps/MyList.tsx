import {
    List,
    TopToolbar,
    CreateButton,
    Button,
    ExportButton,
} from 'react-admin';

import FlatList from './show/FlatList';

// 定义行动
const ListActions = () => (
    <TopToolbar>
        <CreateButton resource=''/>
        <ExportButton/>
        {/* Add your custom actions */}
        {/* <Button
            onClick={() => { alert('Your custom action'); }}
            label="Show calendar"
        >
            <IconEvent/>
        </Button> */}
    </TopToolbar>
);

const MyList = () => (
    <List
        // filterDefaultValues={{ the_type: 'online' }}
        // sort={{ field: 'date', order: 'DESC' }}
        perPage={25}
        actions={<ListActions/>}
        queryOptions={{ meta: { foo: 'bar' } }}
    >
        <FlatList />
    </List>
);

export default MyList;

