import React from 'react';
import theme from './fabby-theme.js';
import {styles} from './styles'
import {ThemeProvider} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";

function App() {
    const classes = styles();

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <AppBar className={classes.fabbyAppBar} position="fixed" elevation={0}>
                    <Container maxWidth="lg">
                        <Toolbar disableGutters={true}>
                            <Grid justify="space-evenly" container>
                                <Grid item>
                                    <Button color="dark" className={classes.fabbyAppBarLink}>
                                        Work
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button color="dark" className={classes.fabbyAppBarLink}>
                                        Skills
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button color="dark" className={classes.fabbyAppBarLink}>
                                        Contact
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button color="dark" className={classes.fabbyAppBarLink}>
                                        Github
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button color="dark" className={classes.fabbyAppBarLink}>
                                        Email
                                    </Button>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Container>
                </AppBar>
                <div className={classes.heroContent}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3} justify="center">
                            <Grid item xs={12} sm={12} md={9}>
                                <Typography className={classes.fabbyHeading} variant="h3" align="left" color="textPrimary" gutterBottom>
                                    Fabby's developer page
                                </Typography>
                                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <div className={classes.fabbySection}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3} justify="center">
                            <Grid item xs={12} sm={12} md={9}>
                                <Typography className={classes.fabbyHeading} variant="h3" align="left" color="textPrimary" gutterBottom>
                                    Fabby's developer page
                                </Typography>
                                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <Container maxWidth="md" component="footer" className={classes.footer}>
                    <Box mt={5} >
                        <Grid container justify="left" >
                            <Grid item>
                                <Avatar  alt="Fabio Monsalve" src="0.jpg"/>
                            </Grid>
                        </Grid>
                        <br/>
                        <Typography variant="body2" color="textSecondary" align="left">
                            Personal/portfolio website of Fabio Monsalve
                            <br/>
                            Made using <Link color="primary" href="/">ReactJS</Link> and <Link color="primary" href="/">material-ui</Link>. Thank you for all your hard work.
                        </Typography>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
