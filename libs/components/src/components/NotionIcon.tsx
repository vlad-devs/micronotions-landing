import { Image } from '@mantine/core';
import { constants, types } from '@micro-notion/shared-data';
import { useStateCtx } from '@micro-notion/hooks-and-contexts';

type Props = {
  iconName: string;
  color: types.notion.NotionPalette;

  size?: number;
};

export const NotionIcon = ({ iconName, color, size }: Props) => {
  const { themeSetting } = useStateCtx();

  return (
    <Image
      src={constants.getNotionIconUrl(iconName, color, themeSetting)}
      alt={`${iconName} icon`}
      h="fit-content"
      width={size}
    />
  );
};
