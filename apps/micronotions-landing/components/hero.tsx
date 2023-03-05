import { useState, useEffect } from 'react';
import {
  createStyles,
  Container,
  Text,
  Group,
  Button,
  ButtonProps,
  useMantineTheme,
} from '@mantine/core';
import { NotionColors } from '@micro-notion/hooks-and-contexts';
import { useRive } from '@rive-app/react-canvas';
import { TypeAnimation } from 'react-type-animation';
import { content } from '../content/content';
import { texts } from '../content/texts';
import { BREAKPOINT, darkBgColor, useSharedStyles } from './shared.styles';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    maxWidth: '55rem',
    position: 'relative',
    paddingTop: '20%',
    paddingBottom: '5%',

    [BREAKPOINT]: {
      paddingBottom: '2%',
      paddingTop: '10%',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    display: 'inline-block',
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    minHeight: '13rem',
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    'span::after': {
      textFillColor: '#fff',
      opacity: 0.4,
      fontWeight: 500,
    },

    [BREAKPOINT]: {
      fontSize: 42,
      minHeight: '10rem',
      lineHeight: 1.2,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  outlineControl: {
    borderImageSlice: 1,
    borderImageSource: theme.fn.linearGradient(
      45,
      theme.other.notionColors.blue.btn,
      'cyan'
    ),
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
  logoAnimation: {
    width: 200,
    height: 200,
    marginTop: -200,
    marginLeft: -50,
    [BREAKPOINT]: {
      marginTop: -80,
    },
  },
}));

type HeroBtnProps = {
  text: string;
  elementId: string;
  variant: ButtonProps['variant'];
};

const HeroButton = ({ text, elementId, variant }: HeroBtnProps) => {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const { other } = theme;
  const notionColors = other.notionColors as NotionColors;

  return (
    <Button
      size="xl"
      component="a"
      href={`#${elementId}`}
      onClick={(event) => {
        const element = document.querySelector(`#${elementId}`);
        if (!element || typeof element.scrollIntoView !== 'function') {
          return;
        }

        event.preventDefault();
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}
      className={cx(
        classes.control,
        variant === 'outline' ? classes.outlineControl : ''
      )}
      variant={variant}
      gradient={{ from: notionColors.blue.btn, to: '#92E4EB' }}
    >
      <Text
        component="span"
        variant={variant === 'outline' ? 'gradient' : 'text'}
        color={darkBgColor(theme, true)}
        gradient={{ from: notionColors.blue.btn, to: '#92E4EB' }}
        inherit
      >
        {text}
      </Text>
    </Button>
  );
};

export function Hero() {
  const [staticHeroText, setStaticHeroText] = useState(
    texts.sections.hero.firstTextAnimationSequence
  );
  const { rive, RiveComponent } = useRive({
    src: content.assets.logoAnimation,
    autoplay: true,
  });

  const { classes } = useStyles();
  const { classes: sharedClasses } = useSharedStyles();

  useEffect(() => {
    setStaticHeroText('');
  }, []);

  return (
    <div className={classes.wrapper}>
      <Container className={classes.inner}>
        <div className={classes.logoAnimation}>
          <RiveComponent
            onMouseEnter={() => rive?.play(rive?.animationNames[0])}
          />
        </div>
        <h1 className={classes.title}>
          {texts.sections.hero.textPrefix}{' '}
          <Text component="span" color="#92E4EB" inherit>
            {staticHeroText}
            <TypeAnimation
              sequence={texts.sections.hero.typeAnimationSequences}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </Text>{' '}
          {texts.sections.hero.textSuffix}
        </h1>

        <Text className={sharedClasses.description}>
          {texts.sections.hero.description}
        </Text>

        <Group className={classes.controls}>
          <HeroButton
            text={texts.ctas.getStarted}
            elementId={content.widgetPresentationId}
            variant="gradient"
          />
          <HeroButton
            text={texts.ctas.signUp}
            elementId={content.emailCollectionId}
            variant="outline"
          />
        </Group>
      </Container>
    </div>
  );
}
