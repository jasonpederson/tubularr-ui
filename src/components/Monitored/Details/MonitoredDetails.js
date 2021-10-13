import React, { Component } from 'react';
import { connect } from 'react-redux';
import SummaryHeader from './SummaryHeader';
import DownloadedVideoList from './DownloadedVideoList';

import './MonitoredDetails.scss';

class MonitoredDetails extends Component {

  componentDidMount() {
    const { selectedSource } = this.props;

    // TODO Get the UUID from URL and set the selected source so we can just load in place
    if (!selectedSource.name) {
      this.props.history.push('/monitored')
    }
  }

  render() {
    const { selectedSource } = this.props;

      return (
      <div className='monitored-details-container'>
        <SummaryHeader selectedSource={ selectedSource }/>
        <DownloadedVideoList />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    selectedSource: state.sourceReducer.get('selectedSource')
  };
}

const mapDispatchToProps = dispatch => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MonitoredDetails);