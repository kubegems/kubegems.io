import { useThemeConfig } from '@docusaurus/theme-common';

const DEFAULT_POSITION = 'right';

function useNavbarItems () {
  const { navbar: { items } } = useThemeConfig();
  const leftItems = items.filter(item => (item.position ?? DEFAULT_POSITION) === 'left');
  const rightItems = items.filter(item => (item.position ?? DEFAULT_POSITION) === 'right');

  return {
    items: items,
    leftItems,
    rightItems,
  }
}

export default useNavbarItems
