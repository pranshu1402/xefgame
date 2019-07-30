import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Layout from './hoc/Layout/Layout';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import LandingPage from './containers/LandingPage/LandingPage';
import Matches from './containers/Matches/Matches';
import Participate from './components/Participate/Participate';
import Profile from './containers/Profile/Profile';

class App extends React.Component {
  render() {
    return (
        <CssBaseline>
          <Layout {...this.props}>            
            <Switch>
              <Route path="/auth" component={Auth}/>
              <Route path="/matches" component={Matches}/>
              <Route path="/participate" component={Participate}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/" exact component={LandingPage} />
              <Redirect to="/" />
            </Switch>
          </Layout>
        </CssBaseline>
    );
  }
}

export default withRouter(App);
