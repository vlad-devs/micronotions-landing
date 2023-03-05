import { Fragment } from 'react';
import { createStyles, CSSObject, MantineTheme } from '@mantine/core';

type Props = {
  width: CSSObject['width'];
  className?: string;
  getBgColor: (theme: MantineTheme) => string;
  src: string;
  videoSiblingElement?: React.ReactNode;
  VideoWrapper?: React.FunctionComponent;
};

const useStyles = createStyles((theme, { width, getBgColor }: Props) => ({
  background: {
    position: 'relative',
    backgroundColor: getBgColor(theme),
  },
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  video: {
    borderRadius: '0.5rem',
    maxWidth: '100%',
    width,
    height: '100%',
    transition: 'opacity 0.2s ease-out 0s',
    willChange: 'opacity',
  },
}));

export const VideoPresentation = (props: Props) => {
  const { classes, cx } = useStyles(props);
  const {
    src,
    className,
    videoSiblingElement,
    VideoWrapper = Fragment,
  } = props;

  return (
    <div className={classes.background}>
      <div className={cx(classes.root, className)}>
        <VideoWrapper>
          <video
            preload="metadata"
            autoPlay
            playsInline
            muted
            loop
            className={classes.video}
          >
            <source src={src} type="video/mp4" />
          </video>
        </VideoWrapper>
      </div>
      {videoSiblingElement}
    </div>
  );
};
