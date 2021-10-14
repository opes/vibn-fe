import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserProfile from '../displays/UserProfile';
import Signin from '../displays/Signin';
import UserList from '../displays/UserList';
import UserDetail from '../displays/UserDetail';
import Conversations from '../displays/Conversations';
import LoggedIn from '../displays/LoggedIn';
import About from '../displays/About';
import CreateConvo from '../displays/CreateConvo';
import ConvoDetail from '../displays/ConvoDetail';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/user/:id/:access_token/:refresh_token" component={LoggedIn} />
          <Route path="/user/:id/dash">
            <UserProfile />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/users/:id">
            <UserDetail />
          </Route>
          <Route exact path="/user/:id/conversations">
            <Conversations />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/user/create/convo/:id">
            <CreateConvo />
          </Route>
          <Route exact path="/user/convo/detail/:id">
            <ConvoDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
