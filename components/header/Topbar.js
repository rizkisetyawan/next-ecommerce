import * as React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { Menu } from '@mui/icons-material';

export default function Topbar({ trigger = false }) {
  return (
    <AppBar color={trigger ? 'primary' : 'transparent'} elevation={0} sx={{ flexGrow: 1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
        >
          <Menu />
        </IconButton>
        <Link href="/">
          <Typography
            variant="h6"
            noWrap
            component="div"
            color={!trigger && 'primary'}
            align="right"
            sx={{ flexGrow: 1, display: 'block', cursor: 'pointer' }}
          >
            E-Catalog
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

Topbar.propTypes = {
  trigger: PropTypes.bool,
};
