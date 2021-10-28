import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuickStats from './QuickStats';
import Queue from './Queue';
import RecentlyDownloaded from './RecentlyDownloaded';
import RecentlyMonitored from './RecentlyMonitored';
import { dashboardActions } from '../../containers/dashboard/index';
import { queueActions } from '../../containers/queue/index';
import findSourceItem from '../../containers/sources/utils/findSourceItem';

import './Dashboard.scss';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hoveredItemUuid: undefined
    }
  }

  componentDidMount() {
    this.props.getDashboardQuickStats();
    this.props.getRecentlyMonitored();
    this.props.getDownloadQueue();
    this.props.getRecentlyDownloaded()
  }

  onMonitoredItemCardSelected = (uuid) => {
    this.props.history.push(`/monitored/details/${uuid}`);
  }

  onMouseEnter = (itemUuid) => {
    return this.setState({
      hoveredItemUuid: itemUuid
    });
  }

  onMouseExit = () => {
    return this.setState({
      hoveredItemUuid: undefined
    });
  }

  render() {
    const { dashboardQuickStats, recentlyMonitored, downloadQueue, recentlyDownloaded } = this.props;
    const { hoveredItemUuid } = this.state;

    return (
      <div className='dashboard-container'>
        <QuickStats 
          totalMonitoredChannels={ dashboardQuickStats.monitoredChannels }
          totalMonitoredPlaylists={ dashboardQuickStats.monitoredPlaylists }
          downloadedItems={ dashboardQuickStats.downloadedItems }
          queuedItems={ dashboardQuickStats.queuedItems }
        />
        <div className='queue-and-downloaded-container'>
          <Queue queueList={ downloadQueue } />
          <RecentlyDownloaded downloadList={ recentlyDownloaded } />
        </div>  
        <RecentlyMonitored 
          onClick={ this.onMonitoredItemCardSelected }
          onMouseEnterHanlder={ this.onMouseEnter} 
          onMouseExitHandler={ this.onMouseExit }
          hoveredItemUuid={ hoveredItemUuid }
          sources={ recentlyMonitored }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dashboardQuickStats: state.dashboardReducer.get('dashboardQuickStats'),
    recentlyMonitored: state.dashboardReducer.get('recentlyMonitored'),
    downloadQueue: state.queueReducer.get('downloadQueue'),
    recentlyDownloaded: state.queueReducer.get('recentlyDownloaded'),
    // HACK: TO REMOVE ONCE DETAILS PAGE CAN GET INFO FOR SINGLE SOURCE
    sources: state.sourceReducer.get('sources')
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getDashboardQuickStats: () => {
      dispatch(dashboardActions.getDashboardQuickStats())
    },
    getRecentlyMonitored: () => {
      dispatch(dashboardActions.getRecentlyMonitored())
    },
    getDownloadQueue: () => {
      dispatch(queueActions.getDownloadQueue())
    },
    getRecentlyDownloaded: () => {
      dispatch(queueActions.getRecentlyDownloaded())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);