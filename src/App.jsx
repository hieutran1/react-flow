// @flow

import * as React from 'react';
import './assets/sass/main.scss';
import AppBar from 'material-ui/AppBar';
import Main from './Main';
import Map from './Map';

import {
  Link,
  Route
} from 'react-router-dom'

type Props = {};

type State = {
  items: Array<string>
};


class App extends React.Component<Props, State> {

  render() {
    return (
      <div className="App">
        <AppBar title="My App" />
        <Link to="/">Main</Link>
        <Link to="/map">Map</Link>


        <Route exact path="/" component={Main} />
        <Route path="/map" component={Map} />

      </div>
    );
  }
}

export default App;
