import React from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ConnectedSwitch = connect(state => ({
  location: state.router.location,
}))(Switch);

// build the router
const Router = props => (
  <ConnectedSwitch>
    {props.routes.map(route => <Route key={route.path} exact {...route} />)}
    <Route exact {...props.notFound} />
  </ConnectedSwitch>
);

Router.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  notFound: PropTypes.object.isRequired,
};

// export
export default Router;
