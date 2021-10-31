import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Topbar from './Topbar';

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
