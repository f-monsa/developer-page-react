import React from 'react';
import './App.css';
import theme from './fabby-theme.js';
import {ThemeProvider} from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(16, 0, 16),
    }
}));

function App() {
    const classes = useStyles();
    theme.typography.h3 = {
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.25rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '2.5rem',
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: '3rem',
        },
    };

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <AppBar position="fixed" color="transparent" elevation={"0"}>
                    <Container maxWidth="lg">
                        <Toolbar disableGutters="true">
                            <Typography variant="h6">
                                News
                            </Typography>
                        </Toolbar>
                    </Container>
                </AppBar>
                <div className={classes.heroContent}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Typography className="Fabby-heading" variant="h3" align="left"
                                            color="textPrimary" gutterBottom>
                                    Fabby's developer page
                                </Typography>
                                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                                    Hello, my name is Fabio Monsalve and welcome to my developer/portfolio page!
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>

                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default App;
