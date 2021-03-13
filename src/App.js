import React from "react";
import theme from "./styles/fabby-theme.js";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import Icon from "@material-ui/core/Icon";
import Work from "./components/work/Work";
import About from "./components/About";

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(8, 0, 8),
        marginTop: "64px",
        [theme.breakpoints.down("sm")]: {
            // marginTop: '0px',
            marginTop: "56px",
        },
        backgroundColor: "#edf1f1",
        height: "65vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    fabbySection: {
        padding: theme.spacing(16, 0, 16),
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    fabbyAppBar: {
        backgroundColor: "#edf1f1 !important",
        flexGrow: 1,
    },
    fabbyAppBarLink: {
        fontSize: "1rem !Important",
    },
    fabbyAvatar: {
        marginRight: theme.spacing(2),
    },
    fabbyHeadingHero: {
        fontFamily: "Michroma, sans-serif !important",
        letterSpacing: "-1.5px",
        lineHeight: "90px !important",
        [theme.breakpoints.down("sm")]: {
            lineHeight: "initial !important",
        },
    },
    fabbyHeadingSection: {
        fontFamily: "Michroma, sans-serif !important",
        letterSpacing: "-1.5px",
        lineHeight: "90px !important",
        [theme.breakpoints.down("sm")]: {
            lineHeight: "initial !important",
        },
    },
    fabbyFooter: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
            marginBottom: "56px",
        },
    },
    fabbyMainHeroImage: {
        width: "250px",
        [theme.breakpoints.down("sm")]: {
            width: "200px",
        },
        [theme.breakpoints.down("xs")]: {
            width: "170px",
        },
    },
    fabbyProjectImage: {
        maxWidth: "900px",
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <AppBar
                    className={classes.fabbyAppBar}
                    position="fixed"
                    elevation={0}
                >
                    <Container maxWidth="md">
                        <Toolbar disableGutters={true}>
                            <Grid
                                justify="space-between"
                                alignItems="center"
                                container
                            >
                                <Grid item>
                                    <Button
                                        fontWeight={"600"}
                                        className={classes.fabbyAppBarLink}
                                    >
                                        Work
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <IconButton href={"https://www.linkedin.com/in/fabio-m-52aa85145/"} target={"_blank"}>
                                        <SvgIcon>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black"
                                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                <rect x="2" y="9" width="4" height="12"></rect>
                                                <circle cx="4" cy="4" r="2"></circle>
                                            </svg>
                                        </SvgIcon>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton href={"https://github.com/f-monsa"} target={"_blank"}>
                                        <SvgIcon>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black"
                                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                <path
                                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </SvgIcon>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton href={"https://dribbble.com/fabiolario"} target={"_blank"}>
                                        <SvgIcon>
                                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5"
                                                fill="black">
                                                <path className="cls-1"
                                                    d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm7.93,5.53a10.19,10.19,0,0,1,2.31,6.38,23.92,23.92,0,0,0-7.13-.33c-.08-.17-.14-.35-.22-.53-.21-.49-.44-1-.68-1.48A13.78,13.78,0,0,0,19.93,5.53ZM12,1.77a10.23,10.23,0,0,1,6.79,2.58A11.56,11.56,0,0,1,13.42,8,55.13,55.13,0,0,0,9.59,2,10.6,10.6,0,0,1,12,1.77Zm-4.36,1a65.8,65.8,0,0,1,3.8,5.93A38.49,38.49,0,0,1,2,9.9,10.31,10.31,0,0,1,7.64,2.73ZM1.74,12V11.7a37.4,37.4,0,0,0,10.53-1.46c.3.58.58,1.16.84,1.75l-.41.11a16.37,16.37,0,0,0-8.33,6.76A10.27,10.27,0,0,1,1.74,12ZM12,22.26A10.21,10.21,0,0,1,5.71,20.1a14.13,14.13,0,0,1,8.05-6.41l.06,0A42.21,42.21,0,0,1,16,21.44,10.16,10.16,0,0,1,12,22.26Zm5.71-1.76a43.42,43.42,0,0,0-2-7.3,14.89,14.89,0,0,1,6.38.44A10.14,10.14,0,0,1,17.71,20.5Z" />
                                            </svg>
                                        </SvgIcon>
                                    </IconButton >
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Container>
                </AppBar>
                <div className={classes.heroContent}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3} justify="center">
                            <Grid item xs={12} sm={12} md={9}>
                                <img
                                    className={classes.fabbyMainHeroImage}
                                    src="/images/open-doodles-chilling.png"
                                    alt=""
                                />
                                <Typography
                                    className={classes.fabbyHeadingHero}
                                    variant="h1"
                                    align="left"
                                    color="textPrimary"
                                    gutterBottom
                                >
                                    Fabby's developer page
                                </Typography>
                                <Typography
                                    variant="body1"
                                    align="left"
                                    paragraph
                                >
                                    Hello! My name is Fabio and welcome to my
                                    personal/portfolio website.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <Work />
                <About />
            </ThemeProvider>
        </div>
    );
}

export default App;
