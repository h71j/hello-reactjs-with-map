import {
    Edit,
} from 'react-admin';
import { Box60Form } from './input/Form';
import EditAside from './show/EditAside';


const MyEdit = () => {
    return (
        <Edit aside={<EditAside />}>
            <Box60Form />
        </Edit>
    );
};

export default MyEdit;
