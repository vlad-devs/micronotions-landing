import { createStyles, MantineTheme } from '@mantine/core';
import { em } from './footer/footer.styles';

export const BREAKPOINT = '@media (max-width: 755px)';

export const darkBgColor = (theme: MantineTheme, darker: boolean) =>
  theme.colorScheme === 'dark'
    ? theme.colors.dark[darker ? 8 : 7]
    : darker
    ? theme.colors.gray[0]
    : theme.white;

export const useSharedStyles = createStyles((theme) => ({
  sectionPadding: {
    padding: '0rem 6rem',

    [`@media (max-width: ${em(640)})`]: {
      padding: '0rem 2rem',
    },
  },

  darkBgLighter: {
    backgroundColor: darkBgColor(theme, false),
  },

  darkBgColorDarker: {
    backgroundColor: darkBgColor(theme, true),
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,
    fontWeight: 600,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },
}));
