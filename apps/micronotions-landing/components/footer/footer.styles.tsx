import { createStyles, MantineTheme } from '@mantine/core';
import { darkBgColor } from '../shared.styles';

const NAVBAR_WIDTH = 260;
const NAVBAR_BREAKPOINT = 760;
const MDX_PAGE_BREAKPOINT = 1080;

export const rem = (px: number) => `${px / 16}rem`;
export const em = (px: number) => `${px / 16}em`;

const FOOTER_HEIGHT = rem(250);
const FOOTER_HEIGHT_TABLET = rem(250);
const FOOTER_HEIGHT_MOBILE = rem(250);

export const getTitleStyles = (theme: MantineTheme) => ({
  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
});

export const useLogoStyles = createStyles((theme) => ({
  logo: {
    ...theme.fn.focusStyles(),
    textDecoration: 'none',
    userSelect: 'none',
    verticalAlign: 'middle',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  ...getTitleStyles(theme),
}));

export default createStyles((theme) => ({
  wrapper: {
    paddingTop: rem(250),
    paddingBottom: rem(100),
    backgroundColor: darkBgColor(theme, false),
    bottom: 0,
    left: 0,
    right: 0,
    height: FOOTER_HEIGHT,

    [`@media (max-width: ${em(800)})`]: {
      height: FOOTER_HEIGHT_TABLET,
    },

    [`@media (max-width: ${em(640)})`]: {
      height: FOOTER_HEIGHT_MOBILE,
    },
  },

  withNavbar: {
    paddingLeft: `calc(${rem(NAVBAR_WIDTH)} + ${theme.spacing.md} * 2)`,
    paddingRight: `calc(${theme.spacing.md} * 2)`,

    [`@media (max-width: ${em(MDX_PAGE_BREAKPOINT)})`]: {
      paddingLeft: `calc(${rem(NAVBAR_WIDTH)} + ${theme.spacing.md})`,
      paddingRight: theme.spacing.md,
    },

    [`@media (max-width: ${em(NAVBAR_BREAKPOINT)})`]: {
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },
  },

  inner: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    display: 'flex',
    justifyContent: 'space-between',

    [`@media (max-width: ${em(640)})`]: {
      paddingBottom: theme.spacing.md,
    },
    [`@media (max-width: ${em(540)})`]: {
      flexDirection: 'column',
    },
  },

  logoSection: {
    maxWidth: rem(300),

    [`@media (max-width: ${em(1000)})`]: {
      marginBottom: theme.spacing.xl,
    },

    [`@media (max-width: ${em(640)})`]: {
      marginBottom: 0,
    },
  },

  description: {
    marginTop: theme.spacing.xs,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
  },

  title: {
    marginBottom: theme.spacing.sm,
    lineHeight: 1,
  },

  afterFooter: {
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    paddingTop: theme.spacing.md,
  },

  afterFooterNote: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[6],

    '& a': {
      ...theme.fn.focusStyles(),
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
    },
  },

  groups: {
    display: 'flex',
    justifyContent: 'space-between',

    [`@media (max-width: ${em(640)})`]: {
      marginTop: theme.spacing.xs,
    },
  },

  social: {
    display: 'flex',

    [`@media (max-width: ${em(640)})`]: {
      display: 'block',
    },
  },
}));
