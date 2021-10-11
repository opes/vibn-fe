import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserProfile from '../displays/UserProfile';
import Signin from '../displays/Signin';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/user/dash/:access_token/:refresh_token" component={UserProfile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
