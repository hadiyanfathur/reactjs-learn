import React from 'react';
import {
    Drawer,
    List,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer,
    Tooltip
} from '@material-ui/core';
import {
    Inbox,
    Mail,
    SwapHoriz,
} from '@material-ui/icons';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './layout-jss';

const Sidebar = ({ children, ...props }) => {

    const classes = useStyles();

    const theme = useTheme();

    const {
        open,
        tempOpen,
        mobileOpen,
        handleDrawerHover,
        handleDrawerMobile,
        handleDrawerToogle,
        upSm
    } = { ...props };

    const drawerOpen = tempOpen || open;
    const drawerClose = !tempOpen && !open;

    const drawerChildren = (
        <React.Fragment>
            <div className={classes.toolbar}>
                {upSm && (<IconButton onClick={handleDrawerToogle}>
                        {open && <Tooltip title="Collapse Sidebar" arrow placement="right" ><SwapHoriz /></Tooltip> }
                        {tempOpen && <Tooltip title="Expand Sidebar" arrow placement="right" ><SwapHoriz /></Tooltip> }
                </IconButton>)}
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


    return (
        upSm ? (
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: drawerOpen,
                    [classes.drawerClose]: drawerClose,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: drawerOpen,
                        [classes.drawerClose]: drawerClose,
                    }),
                }}
                onMouseOver={handleDrawerHover(true)}
                onMouseLeave={handleDrawerHover(false)}
            >
                {drawerChildren}
            </Drawer>
        )
        : (
            <SwipeableDrawer
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerMobile(false)}
                onOpen={handleDrawerMobile(true)}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                {drawerChildren}
            </SwipeableDrawer>
        )
    )
}

export default React.memo(Sidebar);
