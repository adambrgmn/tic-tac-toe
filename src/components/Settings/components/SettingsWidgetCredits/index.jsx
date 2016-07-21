import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export function SettingsWidgetCredits({ show }) {
  if (show) {
    return (
      <div className="settings-section settings-section-credits">
        <h3>About:</h3>
        <p>This is a small and very simple game build as part of a challenge from <a href="https://frecodecamp.com/">FreeCodeCamp</a>.</p>
        <p>It built by me, <a href="http://fransvilhelm.com/">Adam Bergman</a>. Hope you enjoy it!</p>
      </div>
    );
  }
  return null;
}

SettingsWidgetCredits.propTypes = {
  show: PropTypes.bool,
};

const mapStateToProps = state => ({
  show: state.screen === 'menu' || state.screen === 'game',
});

export default connect(mapStateToProps)(SettingsWidgetCredits);
