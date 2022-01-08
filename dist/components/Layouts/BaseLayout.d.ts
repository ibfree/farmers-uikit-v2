declare const GridLayout: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export default GridLayout;
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
