import React from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Layout from './hoc/Layout/Layout';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import Auth from './containers/Auth/Auth';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CssBaseline>
          <Layout>
            <Switch>
              <Route path="/auth" component={Auth} />
              {/* <Route path="/" exact component={BurgerBuilder} /> */}
              <Redirect to="/" />
            </Switch>
          </Layout>
        </CssBaseline>
      </div>
    );
  }
}

export default withRouter(App);
