import { MantineTheme } from '@mantine/styles/lib/theme/types/MantineTheme';
import { constants, types } from '@micro-notion/shared-data';
import { useThemeColors } from './useThemeColors';

export const useMantineThemeSync = (): Partial<MantineTheme> => {
  const themeSetting = types.ThemeSetting.DARK;
  const { backgroundColor, foregroundColor, notionColors } = useThemeColors();

  return {
    colorScheme: themeSetting,

    other: {
      notionColors,
    },
    components: {
      Skeleton: {
        styles: {
          visible: {
            overflow: 'hidden',
            '&::before': {
              background: foregroundColor,
            },
            '&::after': {
              background: backgroundColor,
            },
          },
        },
      },
      TextInput: {
        classNames: {
          input: constants.global.CSS_CLASSNAMES.WIDGET.BOX.ALL,
        },
      },
    },
  };
};
