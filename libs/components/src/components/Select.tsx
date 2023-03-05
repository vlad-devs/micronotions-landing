import {
  MultiValue,
  OptionProps,
  SingleValue,
  SingleValueProps,
  default as ReactSelect,
} from 'react-select';

import { constants, types } from '@micro-notion/shared-data';
import {
  useStateCtx,
  useWidgetColorsGetter,
} from '@micro-notion/hooks-and-contexts';
import { ResponsiveRectLoader } from './loaders';

type Option = types.SelectOption;

const { WIDGET_LOADING_NAMESPACES, LoadingNamespace } = constants.global;
const WIDGET_LOADING_NAMESPACES_NO_SELECT = WIDGET_LOADING_NAMESPACES.filter(
  (namespace) => namespace !== LoadingNamespace.WIDGETS_SELECT_OPTIONS
);

type Props = Pick<
  Parameters<typeof ReactSelect>[0],
  'className' | 'classNamePrefix' | 'isSearchable'
> & {
  value: Option;
  options: Option[];
  defaultValue: Option;
  onChange: (currentOption: SingleValue<Option> | MultiValue<Option>) => void;
};

// Renders both the selected tag and the dropdown tag options
const TagRenderer = ({
  data: { color },
  children,
  innerProps,
  innerRef,
  type,
}: Partial<OptionProps<Option>> & SingleValueProps<Option>) => {
  const getWidgetColor = useWidgetColorsGetter();
  const isOptionElement = type === 'option';
  const position = isOptionElement ? 'relative' : 'absolute';

  return (
    <div
      {...innerProps}
      ref={innerRef}
      // Make the option tags' container full width and
      // add the highlight hover effect
      className={`
        w-fit h-fit
        ${position}
        ${
          isOptionElement
            ? `cursor-pointer w-full pl-1 ${constants.global.CSS_CLASSNAMES.WIDGET.BOX.HOVERABLE}`
            : 'ml-1'
        }
      `}
    >
      <span
        className="w-fit rounded-sm py-0 px-1"
        style={{
          backgroundColor: getWidgetColor(color).tagColor,
        }}
      >
        {children}
      </span>
    </div>
  );
};

export const isSingleOption = (
  option: SingleValue<Option> | MultiValue<Option>
): option is NonNullable<SingleValue<Option>> =>
  !!option && !Array.isArray(option);

export const Select = (props: Props) => {
  const { getIsLoading } = useStateCtx();

  return (
    <ResponsiveRectLoader
      className="w-full"
      isLoading={getIsLoading.excluding(...WIDGET_LOADING_NAMESPACES_NO_SELECT)}
    >
      {(className) => (
        <ReactSelect
          {...props}
          className={`${className} ${props.className}`}
          components={{ SingleValue: TagRenderer, Option: TagRenderer }}
        />
      )}
    </ResponsiveRectLoader>
  );
};
