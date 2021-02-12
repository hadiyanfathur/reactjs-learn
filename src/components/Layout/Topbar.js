import React from 'react';
import {
    Typography,
    AppBar,
    Toolbar,
    IconButton,
} from '@material-ui/core';
import {
    Menu,
} from '@material-ui/icons';
import clsx from 'clsx';
import { Brightness7, AccountCircle } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions';

const Topbar = (props) => {

    const {
        handleDrawerMobile,
        open,
        upMd,
        classes
    } = { ...props }

    const { darkMode } = useSelector(({ theme }) => theme);

    // dispatch
    const dispatch = useDispatch();

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: upMd && open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerMobile(true)}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: upMd && open,
                    })}
                >
                    <Menu />
                </IconButton>

                <Typography variant="h6" noWrap>
                    Mini variant drawer
                </Typography>
                <div style={{ flexGrow: 1 }}/>
                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => dispatch(actions.setDarkMode(!darkMode))}
                    >
                        <Brightness7 />
                    </IconButton>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        edge="end"
                    >
                        <AccountCircle />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default React.memo(Topbar);
