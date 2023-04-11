import {createTheme} from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
    danger: 'rgba(214, 61, 57, 1)',
    warning: 'rgba(255, 193, 7, 1)',
  },
  darkColors: {
    primary: '#000',
    danger: 'rgba(214, 61, 57, 1)',
    warning: 'rgba(255, 193, 7, 1)',
  },
  mode: 'light',
});

export {theme};
