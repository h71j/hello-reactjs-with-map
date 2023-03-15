// 根据具体功能选择合适的icon
// 可以通过 https://mui.com/material-ui/material-icons/?query=review&selected=RateReview 查询需要的icon
import PeopleIcon from '@mui/icons-material/People';

// 固定模版（无需修改）
import MyList from './MyList';
import MyCreate from './MyCreate';
import MyEdit from './MyEdit';

// 对外提供page
export default {
    list: MyList,
    create: MyCreate,
    edit: MyEdit,
    icon: PeopleIcon,
};
