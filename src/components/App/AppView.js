import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as ReactRedux from 'react-redux';

const AppView = props => <ReactRedux.Provider store={props.store}>{props.children}</ReactRedux.Provider>;
AppView.propTypes = {
  store: PropTypes.object,
  children: PropTypes.node,
};
AppView.defaultProps = {
  store: {},
  children: null,
};
// export
export default AppView;
