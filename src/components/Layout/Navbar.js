import React from 'react';
import {
    CssBaseline,
    Typography,
    Container,
    AppBar,
    Toolbar,
    IconButton,
} from '@material-ui/core';
import {
    Menu,
} from '@material-ui/icons';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useStyles from './layout-jss';

const Navbar = (props) => {

    const classes = useStyles();

    const { handleDrawerMobile, open, upSm } = { ...props }

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: upSm && open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerMobile(true)}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: upSm && open,
                    })}
                >
                    <Menu />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Mini variant drawer
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default React.memo(Navbar);
