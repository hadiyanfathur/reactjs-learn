import React from 'react';
import {
    CssBaseline,
    Typography,
    Container,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Dashboard = ({ children }) => {

    const theme = useTheme();

    const [open, setOpen] = React.useState(false);
    const [tempOpen, setTempOpen] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerMobile = (toogle) => (e) => {
        setMobileOpen(toogle);
    };

    const handleDrawerToogle = () => {
        setOpen(!open);
        setTempOpen(false);
    };

    const handleDrawerHover = (toogle) => (e) => {
        if (!open)
            setTempOpen(toogle);
    };

    const upSm = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <React.Fragment>
            <CssBaseline />
            <Navbar
                open={open}
                handleDrawerMobile={toogle => handleDrawerMobile(toogle)}
            />
            <Sidebar
                open={open}
                tempOpen={tempOpen}
                mobileOpen={mobileOpen}
                handleDrawerMobile={toogle => handleDrawerMobile(toogle)}
                handleDrawerHover={toogle => handleDrawerHover(toogle)}
                handleDrawerToogle={() => handleDrawerToogle()}
                upSm = {upSm}
            />
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
