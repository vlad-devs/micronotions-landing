export type UnknownObject = Record<string, unknown>;

export type GenericFunctionalComponent = {
  (props: UnknownObject): JSX.Element | null;
  displayName?: string;
};
