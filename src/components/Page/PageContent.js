import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import AddNew from '../Monitored/Add/AddNew';
import Monitored from '../Monitored/Index/Monitored';
import MonitoredDetails from '../Monitored/Details/MonitoredDetails';
import Queue from '../Queue/Queue';
import Settings from '../Settings/Settings';
import './PageContent.scss';

export default function PageContent() {
  return (
    <div className='page-content-container'>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" component={ Dashboard } />
        <Route path="/monitored/add" component={ AddNew } />
        <Route path="/monitored/details/:uuid" component={ MonitoredDetails } />
        <Route path="/monitored/" component={ Monitored } />
        <Route path="/queue" component={ Queue } />
        <Route path="/settings" component={ Settings } />
      </Switch>
    </div>
  );
}