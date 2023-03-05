import { defaultMantineEmotionCache } from '@mantine/core';
import { utils } from '@micro-notion/shared-data';
import Document, { DocumentContext } from 'next/document';
import React from 'react';

let renders = 0;

export default class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    const styles = [initialProps.styles];

    // This does not work with SSR, but should be fine with SSG to include the styles only when generating the static pages
    if (!renders) {
      styles.push(
        <style
          key="mantine-styles"
          dangerouslySetInnerHTML={{
            __html: utils
              .objectEntries(defaultMantineEmotionCache.registered)
              .reduce(
                (acc, [className, styles]) => `${acc}.${className}{${styles}}`,
                ''
              ),
          }}
        />
      );
    }
    renders += 1;

    return {
      ...initialProps,
      styles,
    };
  }
}
