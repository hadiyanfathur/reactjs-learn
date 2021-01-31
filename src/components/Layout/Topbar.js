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
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions';

const Topbar = (props) => {

    const { 
        handleDrawerMobile,
        handleDarkModeToogle, 
        open, 
        upSm, 
        classes 
    } = { ...props }

    const { darkMode } = useSelector(({ theme }) => theme);

    // dispatch
    const dispatch = useDispatch();

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
                <IconButton
                    display="flex"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => dispatch(actions.setDarkMode(!darkMode))}
                    edge="end"
                >
                    <Brightness7Icon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default React.memo(Topbar);
