import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import themesConfig from './themesConfig';

const Themes = ({ children }) => {
    // selector
    const { darkMode } = useSelector(({ theme }) => theme);

    const theme = createMuiTheme(darkMode ? themesConfig.dark : themesConfig.light);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default React.memo(Themes);
