import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    fabbyTabs: {
        backgroundColor: "#edf1f1",
        boxShadow: "none"
    },
    fabbyHeadingHero: {
        fontFamily: 'Michroma, sans-serif !important',
        letterSpacing: '-1.5px',
        lineHeight: '90px !important',
        [theme.breakpoints.down('sm')]: {
            lineHeight: 'initial !important',
        },
    },
    fabbySection: {
        padding: theme.spacing(8, 2, 8),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

    },
    fabbyHeadingSection: {
        fontFamily: 'Michroma, sans-serif !important',
        letterSpacing: '-1.5px',
        lineHeight: '90px !important',
        [theme.breakpoints.down('sm')]: {
            lineHeight: 'initial !important',
        },
        padding: theme.spacing(2, 0, 2),
    },
    fabbySectionDiv: {
        backgroundColor: "#fafafa",
    },
}));

function Work() {
    const classes = useStyles();
    return (
        <Container className={classes.fabbySection} maxWidth="lg">
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} sm={12} md={9}>
                    <Typography className={classes.fabbyHeadingSection} variant="h3" align="left" color="textPrimary" gutterBottom>
                       UI uX
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Work;