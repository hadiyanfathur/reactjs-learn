import React from 'react';
import {
    Drawer,
    Divider,
    IconButton,
    SwipeableDrawer,
    Tooltip, Paper
} from '@material-ui/core';
import {
    SwapHoriz,
} from '@material-ui/icons';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';

const Sidebar = (props) => {

    const theme = useTheme();

    const {
        open,
        tempOpen,
        mobileOpen,
        handleDrawerHover,
        handleDrawerMobile,
        handleDrawerToogle,
        upSm,
        children,
        classes,
    } = { ...props };

    const drawerOpen = tempOpen || open;
    const drawerClose = !tempOpen && !open;

    const drawerChildren = (
        <React.Fragment>
            <Paper className={classes.toolbar} elevation={1} square>
                {upSm && (<IconButton onClick={handleDrawerToogle}>
                    {open && <Tooltip title="Collapse Sidebar" arrow placement="right" ><SwapHoriz /></Tooltip>}
                    {tempOpen && <Tooltip title="Expand Sidebar" arrow placement="right" ><SwapHoriz /></Tooltip>}
                </IconButton>)}
            </Paper>
            <div className={classes.drawerContainer}>
                {children}
                {children}
                {children}
                {children}
            </div>
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
                    paper: clsx(classes.drawer, {
                        [classes.drawerOpen]: drawerOpen,
                        [classes.drawerClose]: drawerClose,
                    }),
                }}
                onMouseOver={handleDrawerHover(true)}
                onMouseLeave={handleDrawerHover(false)}
                PaperProps={{ elevation: 4, variant: 'elevation' }}
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
