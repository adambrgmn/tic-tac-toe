import React, { PropTypes } from 'react';
import classNames from 'classnames';

import { menuButtonSizes } from '../../constants';
import MenuIcon from '../MenuIcon';

export default function MenuButton({ text, icon, size, customClassName, onMenuButtonClick }) {
  const cx = {
    'menu-button': true,
    [`menu-button-${size}`]: true,
  };

  return (
    <button
      className={classNames(cx, customClassName)}
      onClick={onMenuButtonClick}
    >
      <MenuIcon icon={icon} />
      <div className="menu-button-text">{text}</div>
    </button>
  );
}

MenuButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  /* eslint-disable consistent-return */
  size: (props, propName, componentName) => {
    const buttonSizes = Object.keys(menuButtonSizes);
    const match = buttonSizes.reduce((prev, curr) => {
      if (curr === props[propName]) return true;
      return prev;
    }, false);

    if (!match) {
      return new Error(
        `Invalid prop '${propName}' supplied to ${componentName}. Validation failed.
        ${propName} must be one of ${buttonSizes.join(', ')}.`
      );
    }
  },
  /* eslint-enable consistent-return */
  customClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  onMenuButtonClick: PropTypes.func,
};
