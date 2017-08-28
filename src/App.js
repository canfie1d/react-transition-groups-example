import React from 'react';
import { withRouter } from 'react-router';

import './App.styl';

import Layout from './Components/Layout';
import TransitionRoutes from './Components/TransitionRoutes';

const App = ({ location }) => {
  return (
    <div className="app">
      <div className="app__container">
        <Layout>
          <TransitionRoutes location={location} />
        </Layout>
      </div>
    </div>
  );
}

export default withRouter(App);
