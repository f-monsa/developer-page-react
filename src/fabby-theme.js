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
export default theme;