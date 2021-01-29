import React from 'react';
import {
    CssBaseline,
    Typography,
    Container,
    Drawer,
    AppBar,
    Toolbar,
    List,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer
} from '@material-ui/core';
import {
    Menu,
    ChevronLeft,
    ChevronRight,
    Inbox,
    Mail
} from '@material-ui/icons';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${theme.spacing(9) + 1}px)`,
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
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
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
        width: theme.spacing(9) + 1,
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(7) + 1,
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
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
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Dashboard = ({ children }) => {
    const classes = useStyles();

    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    const [tempOpen, setTempOpen] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = (toogle) => (e) => {
        setMobileOpen(toogle);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(!open);
    };

    const handleDrawerHover = () => {
        if (!open)
            setTempOpen(true);
    };

    const handleDrawerLeave = () => {
        if (!open)
            setTempOpen(false);
    };


    const upSm = useMediaQuery(theme.breakpoints.up('sm'));

    const drawerChildren = (
        <React.Fragment>
            <div className={classes.toolbar}>
                { upSm && (<IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                </IconButton> ) }
            </div>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </React.Fragment>
    )

    const CustomDrawer = upSm ? (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: tempOpen || open,
                [classes.drawerClose]: !tempOpen && !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: tempOpen || open,
                    [classes.drawerClose]: !tempOpen && !open,
                }),
            }}
            onMouseOver={handleDrawerHover}
            onMouseLeave={handleDrawerLeave}
        >
            {drawerChildren}
        </Drawer>
    ) : 
    (
        <SwipeableDrawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle(false)}
            onOpen={handleDrawerToggle(true)}
            classes={{
                paper: classes.drawerPaper,
            }}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
        >
            {drawerChildren}
        </SwipeableDrawer>
    );


    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle(true)}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Mini variant drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            {CustomDrawer}
            <Container maxWidth="sm">

                {children}
                <Typography
                    component="div"
                    style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
                />
            </Container>

        </React.Fragment>
    );
}

export default React.memo(Dashboard);
