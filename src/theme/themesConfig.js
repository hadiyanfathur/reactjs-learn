import lightColor from './lightColor';
import darkColor from './darkColor';

const themesConfig = {
    light: {
        palette: {
            type: 'light',
            primary: {
                main: '#B1D9F8',
                text: 'rgb(18, 18, 18)',
            },
            secondary: {
                main: '#55185D',
                text: '#rgb(18, 18, 18)',
            },
            background: {
                default: '#E0F2FE',
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
    },
};

export default themesConfig;
