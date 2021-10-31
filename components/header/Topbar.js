import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from '@mui/material';
import { Menu, Search } from '@mui/icons-material';

const SearchWrapper = styled('div')(({ theme, trigger }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(trigger ? theme.palette.common.white : theme.palette.primary.main, 0.15),
  '&:hover': {
    backgroundColor: alpha(trigger ? theme.palette.common.white : theme.palette.primary.main, 0.25),
  },
  marginLeft: theme.spacing(1),
  width: 'auto',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '12ch',
    '&:focus': {
      width: '17ch',
    },
  },
}));

export default function Topbar({ trigger = false }) {
  return (
    <AppBar color={trigger ? 'primary' : 'transparent'} elevation={0} sx={{ flexGrow: 1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          color={!trigger && 'primary'}
          sx={{ flexGrow: 1, display: 'block' }}
        >
          E-Catalog
        </Typography>
        <SearchWrapper trigger={trigger}>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchWrapper>
      </Toolbar>
    </AppBar>
  );
}

Topbar.propTypes = {
  trigger: PropTypes.bool,
};
