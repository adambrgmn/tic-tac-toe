import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

export function MenuButtonGroup({ level, active, open, children }) {
  const cx = {
    'button-group': true,
    [`button-group-level-${level}`]: true,
    active,
    open,
  };

  return (
    <div className={classNames(cx)}>
      {children}
    </div>
  );
}

MenuButtonGroup.propTypes = {
  level: PropTypes.number,
  active: PropTypes.bool,
  open: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.level <= state.menu,
  open: ownProps.level < state.menu,
});

export default connect(mapStateToProps, null)(MenuButtonGroup);
