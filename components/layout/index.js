import * as React from 'react';
import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Topbar from './Topbar';

function ElevationScroll({ children, window }) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    color: trigger ? 'primary' : 'transparent',
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Layout({ children, window }) {
  return (
    <>
      <CssBaseline />
      <ElevationScroll window={window}>
        <Topbar />
      </ElevationScroll>
      <Toolbar />
      <Container sx={{ p: 0 }}>
        <Box>
          {children}
        </Box>
      </Container>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  window: PropTypes.func,
};
