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
            '"Public Sans"',
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
        h1: {
            fontFamily: 'Michroma, sans-serif !important',
        },
        h2: {
            fontFamily: 'Michroma, sans-serif !important',
        },
        h3: {
            fontFamily: 'Michroma, sans-serif !important',
        },
        button: {

            fontWeight: '500',
        }
    },
});
theme.typography.h1 = {
    fontFamily: 'Michroma, sans-serif !important',
    [theme.breakpoints.up('xs')]: {
        fontSize: '2.1rem',
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

theme.typography.h3 = {
    fontFamily: 'Michroma, sans-serif !important',
    [theme.breakpoints.up('xs')]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '3rem',
    }
};
theme.typography.h6 = {
    fontFamily: 'Michroma, sans-serif !important',
    [theme.breakpoints.up('xs')]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.25rem',
    }
};
export default theme;