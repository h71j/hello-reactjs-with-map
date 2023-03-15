import {
    Create,
} from 'react-admin';

import { Box60Form } from './input/Form';


const MyCreate = () => {
    return (
        <Create>
            {/* 选择合适的表单 */}
            <Box60Form />
        </Create>
    );
};

export default MyCreate;
