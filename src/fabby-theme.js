import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    shape: {
        borderRadius: '16px',
    },
    palette: {
        primary: {
            main: '#367ecb',
        },
        secondary: {
            main: '#4D5061',
        },
        contrastThreshold: 3,
    },
    typography: {
        fontFamily: [
            '"PT Sans"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        button: {
            textTransform: 'none',
        }
    },
});
theme.typography.h3 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '2.2rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '4rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '4.5rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '5rem',
    }
};
theme.typography.h6 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.25rem',
    }
};
export default theme;