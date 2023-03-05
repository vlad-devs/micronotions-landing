import { createStyles } from '@mantine/core';
import { darkBgColor } from '../shared.styles';

interface WavesStylesParams {
  height: number;
  width: number;
  flip?: boolean;
  alt?: boolean;
}

export default createStyles(
  (theme, { width, height, flip, alt }: WavesStylesParams) => ({
    root: {
      backgroundColor: darkBgColor(theme, alt),
    },

    waves: {
      fill: darkBgColor(theme, !alt),
      width: `${width}%`,
      height,
      transform: flip ? 'scaleX(-1)' : undefined,
      filter: alt ? undefined : 'drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.03))',

      [theme.fn.smallerThan('sm')]: {
        height: 18,
      },
    },
  })
);
