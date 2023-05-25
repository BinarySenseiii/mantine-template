import {MantineProvider, type MantineThemeOverride} from '@mantine/core'
import React, {type ReactNode} from 'react'
import overRideFonts from './Fonts'
import colors from './Colors'

const myTheme: MantineThemeOverride = {
  ...overRideFonts,
  ...colors,
  colorScheme: 'light',
  primaryColor: 'brand',
  // primaryShade: 3,
}

const MantineThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  )
}
export default MantineThemeProvider
