import React from 'react';
import { Container, Text, Group, Image } from '@mantine/core';

import useStyles, { rem, useLogoStyles } from './footer.styles';
import Link from 'next/link';
import { content } from '../../content/content';
import { LinksGroup } from './LinksGroup';
import { texts } from '../../content/texts';

interface FooterProps {
  withNavbar?: boolean;
}

const MicronotionsLogo = ({ size }: { size: string }) => {
  return (
    <Group spacing={10} noWrap>
      <Image
        src={content.assets.micronotionsLogo}
        alt={texts.logo.alt}
        width={size}
      />
      <Text>{texts.logo.title}</Text>
    </Group>
  );
};

const Logo = () => {
  const { classes, cx } = useLogoStyles();

  return (
    <Link
      href="/"
      className={cx(classes.logo, classes.title)}
      aria-label="Micronotions"
    >
      <MicronotionsLogo size={rem(30)} />
    </Link>
  );
};

export function Footer({ withNavbar }: FooterProps) {
  const { classes, cx } = useStyles();
  const groups = content.footerLinks.map((group, idx) => (
    <LinksGroup data={group.data} title={group.title} key={idx} />
  ));

  return (
    <footer
      className={cx(classes.wrapper, { [classes.withNavbar]: withNavbar })}
    >
      <Container size={1100}>
        <div className={classes.inner}>
          <div className={classes.logoSection}>
            <Logo />
            <Text className={classes.description} size="sm">
              {texts.sections.footer.copyright}
            </Text>
          </div>

          <div className={classes.groups}>{groups}</div>
        </div>
      </Container>
    </footer>
  );
}
