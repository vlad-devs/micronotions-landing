import React from 'react';
import { Button as MantineButton } from '@mantine/core';
import { types } from '@micro-notion/shared-data';

type Props = React.PropsWithoutRef<React.ComponentProps<'button'>> &
  React.PropsWithChildren<types.UnknownObject>;

const Button = ({ children, className, ...btnProps }: Props) => {
  return (
    <MantineButton
      {...btnProps}
      className={` button ${btnProps.disabled ? '' : 'notion-button'} ${
        className ? className : ''
      }`}
    >
      {children}
    </MantineButton>
  );
};

export { Button };
