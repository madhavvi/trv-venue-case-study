import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import LandingDashboard from './LandingDashboard/LandingDashboard';
import Admin from './Admin/Admin'

class Home extends Component {
  render() {
    return (
      <div className="trivago-venue">
        <Router>
          <React.Fragment>
            <Helmet>
              <title>Home - Trivago</title>
            </Helmet>
            <Header />
            <div className="main">
              <Route exact path="/" component={LandingDashboard} />
              <Route path="/admin" component={Admin} /> 
            </div>
            {/* <Footer /> */}
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default Home;
