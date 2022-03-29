import React, { useState, useRef, memo } from 'react';
import { useThemeConfig  } from '@docusaurus/theme-common';
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
    disabled: boolean;
  }): JSX.Element => {
    const styles = {
    };
    const icons = {
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
        >
        </div>
        <div
          className='toggle__icon toggle__icon--checked kubegems-icon icon-dark'
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
  const isBrowser = useIsBrowser();

  return (
    <ToggleComponent
      disabled={!isBrowser}
      {...props}
    />
  );
}
