import { createStyles } from '@mantine/core';
import { em, getTitleStyles, rem } from './footer.styles';

export default createStyles((theme) => ({
  wrapper: {
    '& + &': {
      marginLeft: rem(60),
    },

    [`@media (max-width: ${em(1000)})`]: {
      '& + &': {
        marginLeft: rem(40),
      },
    },
  },

  link: {
    display: 'block',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  ...getTitleStyles(theme),
}));
