import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

export function Message({ message, show }) {
  const cx = {
    message: true,
    hide: !show,
  };

  return (
    <div className={classNames(cx)}>
      <p>{message || ''}</p>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string,
  show: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  message: state.message.message,
  show: state.message.show,
});

export default connect(mapStateToProps)(Message);
