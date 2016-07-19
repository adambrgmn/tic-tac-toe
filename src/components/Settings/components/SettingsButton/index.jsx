import React, { PropTypes } from 'react';
import classNames from 'classnames';

import MenuIcon from '../../../MenuIcon';

export default function SettingsButton({ onClick, type, text, icon, active, customClassName }) {
  const cx = {
    'settings-button': true,
    [`settings-button-type-${type}`]: true,
    [`settings-button-${icon}`]: type === 'icon',
    active,
  };

  const menuIcon = type === 'icon' ? <MenuIcon icon={icon} /> : null;

  return (
    <button onClick={onClick} className={classNames(cx, customClassName)}>
      {menuIcon}
      <span className="settings-button-text">{text}</span>
    </button>
  );
}

SettingsButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  active: PropTypes.bool,
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
