import React, { PropTypes } from 'react';
import classNames from 'classnames';

import SVGRoot from '../SVGRoot';

export default function MenuIcon({ icon }) {
  let selectedIcon;
  switch (icon) {
    case 'vsComputer':
      selectedIcon = <circle cx="30" cy="30" r="10" />;
      break;

    case 'vsFriend':
      selectedIcon = [
        <circle key="circle1" cx="10" cy="30" r="10" />,
        <circle key="circle2" cx="50" cy="30" r="10" />,
      ];
      break;

    case 'levelBlind':
      selectedIcon = <line x1="30" y1="0" x2="30" y2="60" />;
      break;

    case 'levelNovice':
      selectedIcon = [
        <line key="line1" x1="20" y1="0" x2="20" y2="60" />,
        <line key="line2" x1="40" y1="0" x2="40" y2="60" />,
      ];
      break;

    case 'levelMaster':
      selectedIcon = [
        <line key="line1" x1="10" y1="0" x2="10" y2="60" />,
        <line key="line2" x1="30" y1="0" x2="30" y2="60" />,
        <line key="line3" x1="50" y1="0" x2="50" y2="60" />,
      ];
      break;

    case 'hideSettings':
      selectedIcon = [
        <line key="line1" x1="5" y1="5" x2="55" y2="55" />,
        <line key="line2" x1="5" y1="55" x2="55" y2="5" />,
      ];
      break;

    case 'newGame':
    default:
      selectedIcon = [
        <line key="line1" x1="30" y1="0" x2="30" y2="60" />,
        <line key="line2" x1="0" y1="30" x2="60" y2="30" />,
      ];
  }

  const cx = {
    'menu-icon': true,
    [`menu-icon-${icon}`]: true,
  };

  return (
    <div className={classNames(cx)}>
      <SVGRoot width={60} height={60}>
        {selectedIcon}
      </SVGRoot>
    </div>
  );
}

MenuIcon.propTypes = {
  icon: PropTypes.string,
};
