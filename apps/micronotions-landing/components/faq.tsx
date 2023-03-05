import {
  Container,
  Accordion,
  createStyles,
  MantineTheme,
} from '@mantine/core';
import { texts } from '../content/texts';
import { darkBgColor } from './shared.styles';

const faqColor = (theme: MantineTheme) => darkBgColor(theme, false);

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl,
    width: '100%',
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `1rem solid ${faqColor(theme)}`,
    backgroundColor: faqColor(theme),
    '&[data-active]': {
      backgroundColor: faqColor(theme),
      border: `1rem solid ${faqColor(theme)}`,
    },
  },

  question: {
    fontWeight: 500,
    color: theme.white,
  },
}));

export function Faq() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper}>
      <Accordion variant="separated">
        {texts.sections.faq.questions.map(({ question, answer, label }) => (
          <Accordion.Item className={classes.item} value={label} key={label}>
            <Accordion.Control className={classes.question}>
              {question}
            </Accordion.Control>
            <Accordion.Panel>{answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
