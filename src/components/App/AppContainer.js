import { connect } from 'react-redux';

// VIEWS
import App from './AppView';

// map our redux store state to props of our component
const mapStateToProps = () => ({});

// map a redux action to props of our component
const mapDispatchToProps = () => ({});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export { ConnectedApp as App };
