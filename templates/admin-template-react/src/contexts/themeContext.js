import { createContext, useCallback, useContext, useEffect, useState } from "react";

export const defaultTitle = 'Smart HTML Elements | Admin & Dashboard Template With Bootstrap';

const colorSchemePrefix = 'main';

export const colorSchemes = {
    default: colorSchemePrefix,
    blue: `${colorSchemePrefix}_blue`,
    green: `${colorSchemePrefix}_green`,
    orange: `${colorSchemePrefix}_orange`,
    pink: `${colorSchemePrefix}_pink`,
    purple: `${colorSchemePrefix}_purple`,
    red: `${colorSchemePrefix}_red`,
    turquoise: `${colorSchemePrefix}_turquoise`,
};

export const themes = {
    dark: 'dark',
    light: 'light'
};

const initialTheme = {
    colorScheme: colorSchemes.default,
    theme: themes.light
};

export const ThemeContext = createContext(initialTheme);

export const ThemeProvider = ({ theme, children }) => {

    const getComputedStyleVars = (variable) =>
        getComputedStyle(document.body).getPropertyValue('--' + variable).trim();

    const [customColors, setCustomColors] = useState();

    const [themeObj, setThemeObj] = useState(theme || initialTheme);

    const updateTheme = useCallback(() => {

        const themeLink = document.getElementById('main-css');

        if (themeLink) {
            themeLink.remove();
        }

        const link = document.createElement("link");

        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = `assets/css/${themeObj.theme}/${themeObj.colorScheme}.css`;

        document.body.appendChild(link);

        link.onload = function () {

            const customColors = [
                getComputedStyleVars('primary'),
                getComputedStyleVars('info'),
                getComputedStyleVars('warning'),
                getComputedStyleVars('success'),
                getComputedStyleVars('danger'),
                getComputedStyleVars('secondary')
            ]
                .filter(Boolean);

            if (customColors.length > 0) {
                setCustomColors(customColors);
            }

        };

    }, [themeObj]);

    useEffect(() => {

        if (themeObj.theme === 'dark') {

            document.body.setAttribute('theme', 'dark');

            Array.from(document.querySelectorAll('smart-chart')).forEach(chart => chart.theme = 'dark');

        } else {

            document.body.setAttribute('theme', 'light');
            Array.from(document.querySelectorAll('smart-chart')).forEach(chart => chart.theme = 'light');

        }

        updateTheme();
        
    }, [themeObj, updateTheme]);

    const setColorScheme = color => {
        
        localStorage.setItem('colorScheme', color);
        setThemeObj(themeObj => ({ ...themeObj, colorScheme: color }));

    }

    const setTheme = theme => {

        localStorage.setItem('theme', theme);
        setThemeObj(themeObj => ({ ...themeObj, theme: theme }));
        
    }

    return (
        <ThemeContext.Provider value={{
            themeObj,
            setColorScheme,
            setTheme,
            customColors
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext);