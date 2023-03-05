import { types, utils } from '@micro-notion/shared-data';
import colors from '../colors';

const notionDark = colors['notion-dark'];
const notionLight = colors.notion;

const textProps = {
  text: 'text',
  textSecondary: 'text-secondary',
  textTitle: 'text-title',
} as const;
const textDark = utils.mapObject((key) => notionDark[key], textProps);
const textLight = utils.mapObject((key) => notionLight[key], textProps);

export const useThemeColors = () => {
  const themeSetting = types.ThemeSetting.DARK;
  const isDark = themeSetting === types.ThemeSetting.DARK;

  return {
    backgroundColor: isDark ? notionDark.highlight : notionLight.highlight,
    foregroundColor: isDark ? notionDark.sidebar : notionLight.shadow,
    text: isDark ? textDark : textLight,
    palette: isDark ? notionDark.palette : notionLight.palette,
    iconPalette: isDark
      ? notionDark['icon-palette']
      : notionLight['icon-palette'],
    notionColors: isDark ? notionDark : notionLight,
  };
};
