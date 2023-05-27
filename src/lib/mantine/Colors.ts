import {
  type DefaultMantineColor,
  type MantineThemeOther,
  type Tuple,
} from '@mantine/core';

type ExtendedCustomColors = 'brand' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

const colors: MantineThemeOther = {
  colors: {
    brand: [
      '#e7e8ff',
      '#babcfa',
      '#8e90f1',
      '#7678ED',
      '#6164ea',
      '#1d1eca',
      '#15179e',
      '#0e1072',
      '#060947',
      '#02021d',
    ],
  },
};

export default colors;
