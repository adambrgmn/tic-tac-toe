import React, { PropTypes } from 'react';

export default function ShowSettingsButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="settings-button-showSettings"
    >
      <div className="circle circle1" />
      <div className="circle circle2" />
      <div className="circle circle3" />
      <span className="settings-button-showSettings-text">Show settings</span>
    </button>
  );
}

ShowSettingsButton.propTypes = {
  onClick: PropTypes.func,
};
