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
import UiUx from './UiUx'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.fabbySectionDiv}>
            <Container className={classes.fabbySection} maxWidth="lg">
                <Grid container spacing={3} justify="center">
                    <Grid item xs={12} sm={12} md={9}>
                        <Typography className={classes.fabbyHeadingSection} variant="h3" align="left" color="textPrimary" gutterBottom>
                            Work
                        </Typography>
                        <AppBar className={classes.fabbyTabs} position="static">
                            <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example" textColor="secondary" elevation={0}>
                                <Tab label="UI/UX" {...a11yProps(0)} />
                                <Tab label="Front end" {...a11yProps(1)} />
                                <Tab label="Other" {...a11yProps(2)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                            Item One
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                    </Grid>
                </Grid>
            </Container>

        </div>

    );
}

export default Work;