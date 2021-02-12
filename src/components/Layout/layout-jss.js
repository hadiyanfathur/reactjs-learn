import React from 'react';
import { makeStyles, fade } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.color.navbar,
        color: theme.palette.color.navbarText,
        transition: theme.transitions.create(['width', 'margin','background'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
        }),
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${theme.spacing(7) + 1}px)`,
        },
        backdropFilter: `blur(${theme.spacing(1)}px)`,
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin', 'background'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    hide: {
        display: 'none',
    },
    drawer: {
        background: theme.palette.color.sidebar,
        color: theme.palette.color.sidebarText,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        border: 0,
    },
    drawerOpen: {
        width: drawerWidth,
        color: theme.palette.color.sidebarText,
        transition: theme.transitions.create(['width', 'background'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create(['width', 'background'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
        }),
        color: theme.palette.color.sidebarText,
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        background: theme.palette.color.sidebar,
        color: theme.palette.color.sidebarText,
        width: drawerWidth,
    },
    drawerContainer: {
        transition: theme.transitions.create('display', {
            duration: theme.transitions.duration.standard,
        }),
        overflowY: "auto",
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        '-ms-overflow-style': 'none',  /* IE and Edge */
        'scrollbar-width': 'none',  /* Firefox */
        "&:hover": {
            '&::-webkit-scrollbar': {
                display: 'block',
            },
            '-ms-overflow-style': 'auto',  /* IE and Edge */
            'scrollbar-width': 'auto',  /* Firefox */
        },
        
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        background: theme.palette.color.sidebar,
        color: theme.palette.color.sidebarText,
    },
    content: {
        display: 'flex',
        flex: '1 1 auto',
        minWidth: '0',
        flexDirection: 'column',
        position: 'relative',
        paddingTop: '56px',
        minHeight: '100vh',
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(7) + 1,
            paddingTop: '64px',
        },
        background: theme.palette.background.default,
        transition: theme.transitions.create(['background', 'transform', 'width', 'padding'], {
            duration: theme.transitions.duration.shortest,
        }),
    },
    contentShift: {
        paddingLeft: drawerWidth,
        transition: theme.transitions.create(['width', 'padding', 'background'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.standard,
        }),
    },
    appContent: {
        padding: theme.spacing(3),
        flex: '1 1',
        transition: theme.transitions.create(['width', 'padding'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.standard,
        }),
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