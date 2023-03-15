import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CodeIcon from '@mui/icons-material/Code';
import TodayIcon from '@mui/icons-material/Today';
import PersonIcon from '@mui/icons-material/Person';

// 系统信息是由服务器自动添加的信息
// 包含
// id、创建时间、更新时间、创建者、更新者
// @ts-ignore
export default function SystemInformation({record}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CodeIcon />
          </Avatar>
        </ListItemAvatar>
              <ListItemText primary="ID" secondary={record.id}/>
      </ListItem>
      
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <TodayIcon color='primary'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="MerchantId" secondary={record.merchant_id} />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <TodayIcon color='primary'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Created At" secondary={record.created_at} />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon color='primary'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Operator" secondary={record.user_id}/>
          </ListItem>
          <ListItem>
        <ListItemAvatar>
          <Avatar>
            <TodayIcon color='success'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Updated At" secondary={record.updated_at} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon  color='success'/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Updater" secondary={record.updated_user_id}/>
      </ListItem>
    </List>
  );
}