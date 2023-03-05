import React from 'react';
import Link from 'next/link';
import { Text, Image } from '@mantine/core';
import useStyles from './LinksGroup.styles';

export interface LinksGroupProps {
  title: string;
  data: {
    type: 'link' | 'next' | 'icon';
    link: string;
    label: string;
    iconSrc?: string;
  }[];
}

export function LinksGroup({ data, title }: LinksGroupProps) {
  const { classes } = useStyles();
  const links = data.map((link, index) => {
    const props = { href: link.link };
    return (
      <Text
        className={classes.link}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        component={(link.type === 'next' ? Link : 'a') as any}
        {...props}
        key={index}
      >
        {link.type === 'icon' ? (
          <Image width={28} height={28} src={link.iconSrc} alt={link.label} />
        ) : (
          link.label
        )}
      </Text>
    );
  });

  return (
    <div className={classes.wrapper}>
      {title && <Text className={classes.title}>{title}</Text>}
      {links}
    </div>
  );
}
