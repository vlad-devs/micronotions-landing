const EPSILON = 0.5;
export const areFloatsEqual = (a: number, b: number) => {
  return Math.abs(a - b) < EPSILON;
};

export const fixTwoDecimals = (value: number) => {
  return Math.round(value * 1e2) / 1e2;
};
