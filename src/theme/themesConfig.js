import lightColor from './lightColor';
import darkColor from './darkColor';

const themesConfig = {
    light: {
        palette: {
            type: 'light',
            primary: {
                main: '#3226B6',
                text: '#ffffff',
            },
            secondary: {
                main: '#aab626',
                text: '#ffffff',
            },
            background: {
                default: '#fafafa',
                paper: '#ffffff',
            },
            text: {
                primary: 'rgb(18, 18, 18)',
                secondary: 'rgb(85, 24, 93)',
                disabled: 'rgb(97, 97, 97)',
            },
            color: {
                ...lightColor,
            },
        },
        typography: {
            fontSize: 20,
        },
        shape: {
            borderRadius: 8,
        },
    },
    dark: {
        palette: {
            type: 'dark',
            primary: {
                main: '#FFD524',
                text: '#000',
            },
            secondary: {
                main: '#55185D',
                text: '#fff',
            },
            background: {
                default: '#15202b',
                paper: '#1B2836',
            },
            text: {
                primary: '#fff',
                secondary: '#fff',
                disabled: 'rgb(157, 157, 157)',
            },
            color: {
                ...darkColor,
            },
        },
        typography: {
            fontSize: 20,
        },
        shape: {
            borderRadius: 8,
        },
    },
};

export default themesConfig;
