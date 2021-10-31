import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#476040',
    },
    secondary: {
      main: '#e59759',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
