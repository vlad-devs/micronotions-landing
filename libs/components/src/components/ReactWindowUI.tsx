import { PropsWithChildren } from 'react';
import { createStyles, CSSObject, MantineTheme } from '@mantine/core';
import { NotionColors } from '@micro-notion/hooks-and-contexts';

type Props = {
  className?: string;
  topbarTitle?: string; //	title of the topbar
  topbarTitleColor?: string; // color of topbar title
  barHeight?: string; //	height of the topbar
  divider?: string; //	css border values of topbar border-bottom
  padding?: CSSObject['padding']; //	css padding of content widow
  topbarColor?: string; //	color of topbar
  background?: string; //	color of main content window
  border?: string; //	css border values of outer border
  grayscale?: boolean; //	sets ui button to greyscale instead of red, yellow, green
  boxShadow?: CSSObject['boxShadow']; //	customize box shadow styles

  resize?: boolean; //	enable/disable resize
  minHeight?: string; //	min height of content window
  minWidth?: string; //	min width of content window
  maxHeight?: string; //	max height of content window
  maxWidth?: string; //	max width of content window
  height?: string; //	height of content window
};

const notionColors = (theme: MantineTheme) =>
  theme.other['notionColors'] as NotionColors;

const useStyles = createStyles(
  (
    theme,
    {
      padding,
      resize,
      minHeight,
      minWidth,
      maxHeight,
      maxWidth,
      height,
      boxShadow,
      grayscale,
      barHeight,
      divider,
      topbarColor,
      topbarTitleColor,
      topbarTitle,
      border,
      background,
    }: Props
  ) => ({
    browser: {
      border: border || `0.05rem solid ${notionColors(theme).highlight}`,
      background: background || notionColors(theme).bg,
      padding: padding || '0',
      resize: resize ? 'both' : 'none',
      minHeight: minHeight || '11rem',
      minWidth: minWidth || '11rem',
      maxHeight: maxHeight || '',
      maxWidth: maxWidth || '100%',
      height: height || '',
      boxShadow: boxShadow ? boxShadow : '0 20px 68px rgba(0, 0, 0, 0.55)',

      borderRadius: '0.5rem',
      position: 'relative',
      overflow: 'auto',
      zIndex: 2,

      '&:after': {
        top: '0.8rem',
        left: '0.8rem',
        content: '""',
        position: 'absolute',
        width: '6px',
        height: '6px',
        zIndex: 2,
        borderRadius: '50%',
        background: grayscale ? '#8D8D92' : '#f85955',
        boxShadow: grayscale
          ? '0 00.2rem #8D8D92,  1.1rem  0 0 0 0.2rem #8D8D92, 2.2rem 0 0 0.2rem #8D8D92'
          : '0 0 0 0.2rem #f85955,  1.2rem 0 0 0.2rem #fbbe3f, 2.3rem 0 0 0.2rem #45cc4b',
      },

      '&:before': {
        height: barHeight || '2rem',
        lineHeight: barHeight || '2rem',
        borderBottom: divider || `0.05rem solid ${notionColors(theme).bg}`,
        background: topbarColor || notionColors(theme).bg,
        color: topbarTitleColor || '#444',
        content: `"${topbarTitle || ''}"`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1,
        borderTopLeftRadius: '0.4rem',
        borderTopRightRadius: '0.4rem',
        backgroundClip: 'padding-box',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, "Apple Color Emoji"',
        textAlign: 'center',
      },

      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        padding: '2.25rem .5rem .5rem',
      },
    },
  })
);

export const ReactWindowUI = (props: PropsWithChildren<Props>) => {
  const { classes, cx } = useStyles(props);

  return (
    <div className={cx(classes.browser, props.className)}>{props.children}</div>
  );
};
