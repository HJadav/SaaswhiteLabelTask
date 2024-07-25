import { THEME } from '@env';
import defaultTheme from '../themes/default'
import whiteLabelTheme from '../themes/whiteLabel'


console.log('sdfsddddss',THEME);

const themes = {
  default: defaultTheme,
  whiteLabel: whiteLabelTheme,
};

const config = {
  theme: themes[THEME] || themes.default,
};

export default config;
