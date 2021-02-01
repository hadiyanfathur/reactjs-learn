import React, { useState } from 'react';
import {
    CssBaseline,
    Typography,
    Container,
    Box,
    Paper,
    Grid
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import SidebarList from '../SidebarList/SidebarList';
import useStyles from './layout-jss';
import clsx from "clsx";

const Dashboard = ({ ...props }) => {

    const theme = useTheme();

    const classes = useStyles();

    const { children, contentHeader, breadcrumbs } = { ...props };

    const [open, setOpen] = useState(localStorage.getItem('sidebar'));
    const [tempOpen, setTempOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode'));

    const handleDrawerMobile = (toogle) => (e) => {
        setMobileOpen(toogle);
    };

    const handleDrawerToogle = () => {
        setOpen(!open);
        setTempOpen(false);
        if (!open)
            localStorage.setItem('sidebar', !open);
        else
            localStorage.removeItem('sidebar');
    };

    const handleDrawerHover = (toogle) => (e) => {
        if (!open)
            setTempOpen(toogle);
    };

    const handleDarkModeToogle = () => {
        setDarkMode(!darkMode);
        if (!darkMode)
            localStorage.setItem('darkMode', !darkMode);
        else
            localStorage.removeItem('darkMode');
    }

    const upSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <React.Fragment>
            <CssBaseline />
            <Sidebar
                open={open}
                tempOpen={tempOpen}
                mobileOpen={mobileOpen}
                handleDrawerMobile={toogle => handleDrawerMobile(toogle)}
                handleDrawerHover={toogle => handleDrawerHover(toogle)}
                handleDrawerToogle={() => handleDrawerToogle()}
                upSm={upSm}
                classes={classes}
            >
                <SidebarList />
            </Sidebar>
            <Topbar
                open={open}
                handleDrawerMobile={toogle => handleDrawerMobile(toogle)}
                upSm={upSm}
                classes={classes}
                handleDarkModeToogle={() => handleDarkModeToogle()}
            />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: upSm && open,
                })}
            >
                <Paper className={classes.appHeader} elevation={0} square>
                    <Typography variant="h4" component="h1">
                        {contentHeader}
                    </Typography>
                    <Typography paragraph>
                        {breadcrumbs}
                    </Typography>
                </Paper>
                <div className={classes.appContent}>
                    <Grid container spacing={3}>
                        {children}
                    </Grid>
                </div>
                <Paper className={classes.appFooter} square>
                    &copy;2021 Hadiyan Fathur Rahman
                </Paper>
            </main>
        </React.Fragment>
    );
}

export default React.memo(Dashboard);
