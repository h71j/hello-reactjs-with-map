import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { List } from 'react-admin';
import { ListItem } from '@mui/material';

export default function CircularDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            hasCreate={false} hasEdit={false} exporter={false} pagination={false}>
            <ListItem>
            <Stack spacing={2} direction="row">
                <CircularProgress variant="determinate" value={75} color="info" />
                <CircularProgress variant="determinate" value={progress} color="success" />
            </Stack>
            </ListItem>
            </List>
  );
}