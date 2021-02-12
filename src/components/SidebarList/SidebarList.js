import React, { useEffect } from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Icon
} from '@material-ui/core';
import { NavLink, useLocation } from 'react-router-dom';
import menu from '../../routes/menu';

const SidebarList = (props) => {

    const location = useLocation();

    const { handleInitialContent } = { ...props }

    const currentMenu = menu.find(menu => location.pathname === menu.path);

    useEffect(() => {
        currentMenu && handleInitialContent(currentMenu.title, currentMenu.breadcrumbs)

    }, [currentMenu, handleInitialContent])

    const menuMapper = menu.map((menu, index) => {
        
        return (
            <ListItem button component={NavLink} to={menu.path} key={index} activeStyle={{ color: 'yellow', background: '#aab62660' }} exact={menu.path === '/'}>
                <ListItemIcon style={{ color: 'inherit' }}><Icon>{menu.icons}</Icon></ListItemIcon>
                <ListItemText primary={menu.title} />
            </ListItem>
        );
    });

    return (
        <List>
            {menuMapper}
        </List>
    )
}

export default SidebarList




