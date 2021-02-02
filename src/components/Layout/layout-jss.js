import React from 'react';
import { makeStyles, fade } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.color.navbar,
        color: theme.palette.color.navbarText,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${theme.spacing(7) + 1}px)`,
        }
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    hide: {
        display: 'none',
    },
    drawer: {
        background: theme.palette.color.sidebar,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        border: 0,
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        background: theme.palette.color.sidebar,
        width: drawerWidth,
    },
    drawerContainer: {
        overflowY: "auto"
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        display: 'flex',
        flex: '1 1 auto',
        minWidth: '0',
        flexDirection: 'column',
        position: 'relative',
        paddingTop: '56px',
        minHeight: '100vh',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(7) + 1,
            paddingTop: '64px',
        },
        background: theme.palette.background.default,
        transition: theme.transitions.create(['background', 'transform'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        paddingLeft: drawerWidth,
        transition: theme.transitions.create(['width', 'padding'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        transition: theme.transitions.create(['background', 'transform'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appContent: {
        padding: theme.spacing(3),
        flex: '1 1',
    },
    appHeader: {
        margin: theme.spacing(1, 0),
        minHeight: theme.spacing(16),
        padding: `${theme.spacing(2)}px 3rem`,
    },
    appFooter: {
        padding: '.3rem .5rem .5rem .5rem',
        textAlign: 'center',
    }
}));

export default useStyles;