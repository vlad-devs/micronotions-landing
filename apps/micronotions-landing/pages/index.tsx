import { PropsWithChildren, useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

import { types } from '@micro-notion/shared-data';

import { VideoPresentation } from 'libs/components/src/components/VideoPresentation';
import { ReactWindowUI } from 'libs/components/src/components/ReactWindowUI';

import { Hero } from '../components/hero';
import { Section } from '../components/section';
import { Waves } from '../components/waves';
import { texts } from '../content/texts';
import { darkBgColor, useSharedStyles } from '../components/shared.styles';
import { content } from '../content/content';
import { Faq } from '../components/faq';
import { VideoToggle } from '../components/VideoToggle';
import { em } from '../components/footer/footer.styles';

const { widgetsShowcase } = texts.sections;

const EmulatorCornerClipper = ({
  children,
}: PropsWithChildren<types.UnknownObject>) => (
  <div className="[border-radius:10%] overflow-hidden h-[45rem]">
    {children}
  </div>
);

const DesktopWindow = ({
  children,
}: PropsWithChildren<types.UnknownObject>) => (
  <ReactWindowUI className="overflow-hidden">{children}</ReactWindowUI>
);

export function Index() {
  const [isDesktopVideo, setIsDesktopVideo] = useState(true);
  const isMobileSize = useMediaQuery(`(max-width: ${em(640)})`);
  const { classes, cx } = useSharedStyles();

  useEffect(() => {
    setIsDesktopVideo(!isMobileSize);
  }, [isMobileSize]);

  return (
    <>
      <Hero />
      <VideoToggle state={isDesktopVideo} setState={setIsDesktopVideo} />
      <VideoPresentation
        width="100%"
        getBgColor={(theme) => darkBgColor(theme, true)}
        className={cx(classes.sectionPadding, 'relative z-10')}
        src={
          isDesktopVideo
            ? content.assets.presentationVideoDesktop
            : content.assets.presentationVideoMobile
        }
        videoSiblingElement={
          <Waves
            className={cx(
              'absolute bottom-0 w-full h-[15rem]',
              classes.darkBgLighter
            )}
            width={100}
            height={40}
            flip
          />
        }
        VideoWrapper={isDesktopVideo ? DesktopWindow : EmulatorCornerClipper}
      />

      <Section
        id={content.widgetPresentationId}
        className={classes.sectionPadding}
        title={widgetsShowcase.title}
        description={widgetsShowcase.description}
        presentation={<div className="mt-24"></div>}
      />

      <Section
        className="z-[1] relative"
        title={texts.sections.faq.title}
        description=""
        presentation={<Faq />}
      />

      <div
        id={content.emailCollectionId}
        className={cx(
          classes.darkBgColorDarker,
          'relative w-full h-96 z-0 mt-[-12rem]'
        )}
      >
        <div className="w-5/6 h-full m-auto">
          <div className="inline-block w-full relative h-full mt-[12rem]"></div>
        </div>
      </div>

      <Waves className="relative z-[-1]" width={100} height={40} flip />
    </>
  );
}

export default Index;
