import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/router';

export default function TemporaryDrawer({ open, toggleDrawer, listNav }) {
  const router = useRouter();
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {listNav.map(({ title, path }) => (
          <ListItem button key={title} onClick={() => router.push(path)}>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <>
        {/* <Button onClick={toggleDrawer(true)}>left</Button> */}
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          {list('left')}
        </Drawer>
      </>
    </div>
  );
}

TemporaryDrawer.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  listNav: PropTypes.array,
};
