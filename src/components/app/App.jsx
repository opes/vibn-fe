import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserProfile from '../displays/UserProfile';
import Signin from '../displays/Signin';
import UserList from '../displays/UserList';
import UserDetail from '../displays/UserDetail';
import Conversations from '../displays/Conversations';
import LoggedIn from '../displays/LoggedIn';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/user/:id/:access_token/:refresh_token" component={LoggedIn} />
          <Route exact path="/user/:id/dash" component={UserProfile} />
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/users/:id">
            <UserDetail />
          </Route>
          <Route exact path="/conversations">
            <Conversations />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
