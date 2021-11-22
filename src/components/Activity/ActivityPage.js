import React, { Component } from 'react';
import { connect } from 'react-redux';
import QueueSelector from './ActivitySelector';
import { queueActions } from '../../containers/queue/index';

import './ActivityPage.scss';
import DownloadQueue from './DownloadQueue';

class ActivityPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 'downloadQueue'
    }
  }

  componentDidMount() {
    this.props.getDownloadQueue();
    this.props.getRecentlyDownloaded();
  }

  onSelectTab = (selectedTab) => {
    return this.setState({
      activeTab: selectedTab
    });
  }
  
  render() {
    const { downloadQueue } = this.props;
    const { activeTab } = this.state;
    return (
      <div className='queue-container'>
        <QueueSelector 
          activeTab={ this.state.activeTab }
          onSelectTab={ this.onSelectTab }
        />
        { activeTab === 'downloadQueue' ?
          <DownloadQueue downloadQueue={ downloadQueue } />
          :
          <></>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    downloadQueue: state.queueReducer.get('downloadQueue'),
    recentlyDownloaded: state.queueReducer.get('recentlyDownloaded'),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getDownloadQueue: () => {
      dispatch(queueActions.getDownloadQueue())
    },
    getRecentlyDownloaded: () => {
      dispatch(queueActions.getRecentlyDownloaded())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityPage);