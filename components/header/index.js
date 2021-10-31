import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Box,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import Topbar from './Topbar';
import Drawer from './Drawer';

const listNav = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/exclusive',
    title: 'Exclusive Awal Mula',
  },
  {
    path: '/lifestyle',
    title: 'Lifestyle',
  },
];

function ElevationScroll({ children, window }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    trigger,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const NavItem = styled(Typography)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export default function Header({ window }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const router = useRouter();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  return (
    <>
      <CssBaseline />
      <Drawer listNav={listNav} open={state} toggleDrawer={toggleDrawer} />
      {matches && (
        <Box
          sx={{
            maxWidth: 'lg',
            mx: 'auto',
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="primary"
              sx={{ display: 'block', cursor: 'pointer', fontSize: 24 }}
            >
              E-Catalog
            </Typography>
          </Link>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {
              listNav.map(({ title, path }) => (
                <Link href={path}>
                  <NavItem color={path === router.pathname ? 'primary' : 'textPrimary'}>{title}</NavItem>
                </Link>
              ))
            }
          </Box>
        </Box>
      )}
      {!matches && (
        <>
          <ElevationScroll window={window}>
            <Topbar toggleDrawer={toggleDrawer} />
          </ElevationScroll>
          <Toolbar />
        </>
      )}
    </>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};
