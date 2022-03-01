import { useCallback } from 'react';
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common';

function useColorModeToggle () {
  const { colorMode: { disableSwitch }} = useThemeConfig();
  const { isDarkTheme, setLightTheme, setDarkTheme } = useColorMode();
  const toggle = useCallback(
    (e) => (e.target.checked ? setDarkTheme() : setLightTheme()),
    [setLightTheme, setDarkTheme],
  );
  return { isDarkTheme, toggle, disabled: disableSwitch };
}

export default useColorModeToggle
