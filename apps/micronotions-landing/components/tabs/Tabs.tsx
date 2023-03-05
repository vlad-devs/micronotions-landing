import React, { useState } from 'react';
import { Tabs as MatineTabs } from '@mantine/core';
import { Button } from 'libs/components/src/buttons';
import { texts } from '../../content/texts';

type Props = {
  tabs: {
    Demo: React.FC;
    controlValue: string;
    controlLabel: string;
    href?: string;
    icon?: JSX.Element;
    isActive?: boolean;
  }[];
};

export function Tabs({ tabs: tabsProps }: Props) {
  const tabs = tabsProps.filter((tab) => tab.isActive);
  const [selectedTab, setSelectedTab] = useState(tabs[0].controlValue);
  const currentTab = tabs.find((tab) => tab.controlValue === selectedTab);

  return (
    <MatineTabs
      onTabChange={setSelectedTab}
      value={selectedTab}
      color="white"
      variant="default"
      mt="xl"
      mb="xl"
      styles={(theme) => ({
        tab: {
          fontWeight: 500,
          fontSize: 14,

          [theme.fn.smallerThan('sm')]: {
            fontSize: 12,
          },

          '&[data-active]': {
            borderColor: theme.white,
            '&:hover': {
              borderColor: theme.colors.gray[5],
            },
          },
        },

        tabIcon: {
          marginRight: 6,
        },

        tabsList: {
          // width: 'fit-content',
          flexWrap: 'wrap',
          borderWidth: 1,
        },
      })}
    >
      <MatineTabs.List position="left">
        {tabs.map(({ controlValue, controlLabel, icon }, idx) => (
          <MatineTabs.Tab icon={icon} value={controlValue} key={idx}>
            {controlLabel}
          </MatineTabs.Tab>
        ))}

        <div className="ml-auto">
          <Button
            component="a"
            disabled={!currentTab?.href}
            href={currentTab?.href}
            className="button-sm mb-1 mr-1"
          >
            {!currentTab?.href ? texts.ctas.comingSoon : texts.ctas.getStarted}
          </Button>
        </div>
      </MatineTabs.List>

      {tabs.map(({ Demo, controlValue }, idx) => (
        <MatineTabs.Panel value={controlValue} key={idx}>
          <Demo />
        </MatineTabs.Panel>
      ))}
    </MatineTabs>
  );
}
