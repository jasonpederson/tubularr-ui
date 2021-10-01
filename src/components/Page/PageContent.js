import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import AddNew from '../Add/AddNew';
import Queue from '../Queue/Queue';
import Settings from '../Settings/Settings';
import './PageContent.scss';

export default function PageContent() {
  return (
    <div className='page-content-container'>
      <Switch>
        <Route path="/dashboard" component={ Dashboard } />
        <Route path="/monitored/add" component={ AddNew } />
        <Route path="/queue" component={ Queue } />
        <Route path="/settings" component={ Settings } />
      </Switch>
    </div>
  );
}