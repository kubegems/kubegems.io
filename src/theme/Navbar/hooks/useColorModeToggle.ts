import { useCallback } from 'react';
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common';

function useColorModeToggle () {
  const { colorMode: { disableSwitch }} = useThemeConfig();
  const { colorMode, setColorMode } = useColorMode();
  const toggle = useCallback(
    (e) => (e.target.checked ? setColorMode("dark") : setColorMode("light")),
    [setColorMode],
  );
  return { colorMode, toggle, disabled: disableSwitch };
}

export default useColorModeToggle
