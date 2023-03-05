import { createStyles, Title, Text } from '@mantine/core';
import { em } from './footer/footer.styles';
import { darkBgColor, useSharedStyles } from './shared.styles';

type Props = {
  title: string;
  className?: string;
  id?: string;
  description: string;
  presentation: React.ReactNode;
};

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    fontSize: 32,
    fontWeight: 900,
    marginTop: '4rem',

    [`@media (max-width: ${em(640)})`]: {
      marginTop: '2rem',
    },
  },
  section: {
    '&:nth-of-type(even)': {
      backgroundColor: darkBgColor(theme, true),
    },

    '&:nth-of-type(odd)': {
      backgroundColor: darkBgColor(theme, false),
    },
  },

  text: {
    fontSize: 18,
    marginTop: theme.spacing.sm,
    width: '66.66%',
    textAlign: 'center',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: '100%',
    },
  },
}));

export const Section = ({
  title,
  description,
  presentation,
  className,
  id,
}: Props) => {
  const { classes, cx } = useStyles();
  const { classes: sharedClasses } = useSharedStyles();

  return (
    <section
      id={id}
      className={cx(
        'flex flex-col justify-between py-24',
        classes.section,
        className
      )}
    >
      <div className="flex flex-col items-center">
        <Title className={cx(classes.text, classes.title)}>{title}</Title>
        <Text className={cx(sharedClasses.description, classes.text)}>
          {description}
        </Text>
      </div>

      {presentation}
    </section>
  );
};
