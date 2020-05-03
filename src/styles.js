import {makeStyles} from "@material-ui/core/styles";

export const styles = makeStyles((theme) => ({
        heroContent: {
            padding: theme.spacing(16, 0, 16),
            marginTop: '64px',
            [theme.breakpoints.down('sm')]: {
                marginTop: '56px',
            },
            backgroundColor: "#edf1f1",
            height: '50vh',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },
        fabbySection: {
            padding: theme.spacing(16, 0, 16),
            height: '50vh',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },
        fabbyAppBar: {
            backgroundColor: "#edf1f1 !important",
            flexGrow: 1,
        },
        fabbyAppBarLink: {
            fontFamily: 'Michroma, sans-serif !important',

        },
        fabbyAvatar: {
            marginRight: theme.spacing(2),
        },
        fabbyHeading: {
            fontFamily: 'Michroma, sans-serif !important',
            letterSpacing: '-1.5px',
            lineHeight: '90px !important',
            [theme.breakpoints.down('sm')]: {
                lineHeight: 'initial !important',
            },
        },
        fabbyFooter: {
            borderTop: `1px solid ${theme.palette.divider}`,
            marginTop: theme.spacing(8),
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            [theme.breakpoints.up('sm')]: {
                paddingTop: theme.spacing(6),
                paddingBottom: theme.spacing(6),
            },
        },
    }))
;
