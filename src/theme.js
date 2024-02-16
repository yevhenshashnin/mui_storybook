import { createTheme } from '@mui/material';

import '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    }пше
})

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


export const themes = {
    light: lightTheme,
    dark: darkTheme,
};