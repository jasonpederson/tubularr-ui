import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import VideoPage from '../Videos/VideoPage';
import AddNew from '../Monitored/Add/AddNew';
import MonitoredPage from '../Monitored/MonitoredPage/MonitoredPage';
import MonitoredDetailsPage from '../Monitored/Details/MonitoredDetailsPage';
import ActivityPage from '../Activity/ActivityPage';
import SettingsPage from '../Settings/SettingsPage';
import './PageContent.scss';

export default function PageContent() {
  return (
    <div className='page-content-container'>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/videos" component={ VideoPage } />
        <Route path="/monitored/add" component={ AddNew } />
        <Route path="/monitored/details/:uuid" component={ MonitoredDetailsPage } />
        <Route path="/monitored" component={ MonitoredPage } />
        <Route path="/activity" component={ ActivityPage } />
        <Route path="/settings" component={ SettingsPage } />
      </Switch>
    </div>
  );
}