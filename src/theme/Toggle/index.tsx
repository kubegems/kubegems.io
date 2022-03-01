import React, { useState, useRef, memo } from 'react';
import { useThemeConfig, ColorModeConfig } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import clsx from 'clsx';
import type { Props } from '@theme/Toggle'; 
import './styles.scss';
 
const ToggleComponent = memo(
  ({
    className,
    switchConfig,
    checked: defaultChecked,
    disabled,
    onChange,
  }: Props & {
    switchConfig: ColorModeConfig['switchConfig'];
    disabled: boolean;
  }): JSX.Element => {
    const { darkIcon, darkIconStyle, lightIcon, lightIconStyle } = switchConfig;
    const styles = {
      unchecked: lightIconStyle,
      checked: darkIconStyle,
    };
    const icons = {
      unchecked: lightIcon,
      checked: darkIcon,
    };
    const [checked, setChecked] = useState(defaultChecked);
    const [focused, setFocused] = useState(false);
    const inputRef = useRef(null);
    return (
      <div
        className={clsx('toggle', className, {
          'toggle--checked': checked,
          'toggle--focused': focused,
          'toggle--disabled': disabled,
        })}
        role='button'
        tabIndex={-1}
        onClick={() => inputRef.current?.click()}
      >
        <div
          className='toggle__icon toggle__icon--unchecked kubegems-icon icon-light'
          style={styles.unchecked}
        >
        </div>
        <div
          className='toggle__icon toggle__icon--checked kubegems-icon icon-dark'
          style={styles.checked}
        >
        </div>

        <input
          ref={inputRef}
          checked={checked}
          type='checkbox'
          className='toggle__screenreader-only'
          aria-label='Switch between dark and light mode'
          onChange={onChange}
          onClick={() => setChecked(!checked)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              inputRef.current?.click();
            }
          }}
        />
      </div>
    );
  },
);

ToggleComponent.displayName = 'ToggleComponent';

export default function Toggle(props: Props): JSX.Element {
  const { colorMode: { switchConfig }} = useThemeConfig();
  const isBrowser = useIsBrowser();

  return (
    <ToggleComponent
      switchConfig={switchConfig}
      disabled={!isBrowser}
      {...props}
    />
  );
}
