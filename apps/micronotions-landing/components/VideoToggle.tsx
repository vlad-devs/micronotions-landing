import { Dispatch, SetStateAction } from 'react';
import { Group, SegmentedControl, Center, createStyles } from '@mantine/core';
import { IconDeviceMobile, IconDeviceDesktop } from '@tabler/icons-react';
import { darkBgColor } from './shared.styles';

type Props = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

const useStyles = createStyles((theme) => ({
  controls: {
    backgroundColor: darkBgColor(theme, true),
    padding: theme.spacing.xl,
    justifyContent: 'center',
    [theme.fn.smallerThan('sm')]: {
      marginTop: 0,
    },
  },

  controlLabel: {
    marginLeft: theme.spacing.xs,
  },
}));

export const VideoToggle = ({ state, setState }: Props) => {
  const { classes } = useStyles();

  return (
    <Group className={classes.controls}>
      <SegmentedControl
        value={state ? 'desktop' : 'mobile'}
        onChange={(value) => setState(value === 'desktop')}
        data={[
          {
            value: 'desktop',
            label: (
              <Center>
                <IconDeviceDesktop size="1.5rem" stroke={1.5} />
              </Center>
            ),
          },
          {
            value: 'mobile',
            label: (
              <Center>
                <IconDeviceMobile size="1.5rem" stroke={1.5} />
              </Center>
            ),
          },
        ]}
      />
    </Group>
  );
};
