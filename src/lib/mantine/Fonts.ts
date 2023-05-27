import { type MantineThemeOverride } from '@mantine/core';
import { Inter, Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
});
const inter = Inter({ subsets: ['latin'], weight: ['400', '500'] });

const overRideFonts: MantineThemeOverride = {
  fontFamily: inter.style.fontFamily,
  headings: {
    fontFamily: poppins.style.fontFamily,
  },
};

export default overRideFonts;
