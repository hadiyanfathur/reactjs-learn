import React, { useState } from 'react';
import {
    CssBaseline,
    Typography,
    Container,
    Box,
    Paper
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import SidebarList from '../SidebarList/SidebarList';
import useStyles from './layout-jss';
import clsx from "clsx";

const Dashboard = ({ children }) => {

    const theme = useTheme();

    const classes = useStyles();

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
                    <div className={classes.appContent}>
                        <div className={classes.toolbar} />
                        {children}
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                            donec massa sapien faucibus et molestie ac.
                        </Typography>
                        <Typography paragraph>
                            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                        </Typography>
                        
                    </div>
                    <Paper style={{width: theme.spacing(16), height: theme.spacing(16), margin: theme.spacing(1)}}/>
                    <div className={classes.appFooter}>
                        &copy;2021 Hadiyan Fathur Rahman
                    </div>
                </main>
            </React.Fragment>
    );
}

export default React.memo(Dashboard);
