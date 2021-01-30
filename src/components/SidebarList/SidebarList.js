import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@material-ui/core';
import {
    Inbox,
    Mail,
} from '@material-ui/icons';


const SidebarList = () => {

    return (
        <React.Fragment>
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
}

export default SidebarList




