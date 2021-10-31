import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Toolbar,
  CssBaseline,
  useScrollTrigger,
} from '@mui/material';
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

export default function Header({ window }) {
  return (
    <>
      <CssBaseline />
      <ElevationScroll window={window}>
        <Topbar />
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};
