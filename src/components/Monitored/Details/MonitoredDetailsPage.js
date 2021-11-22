import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { sourceActions } from '../../../containers/sources/index';
import SummaryHeader from './SummaryHeader';
import DownloadedVideoList from './DownloadedVideoList';

import './MonitoredDetailsPage.scss';

class MonitoredDetailsPage extends Component {
  componentDidMount() {
    const { selectedSource } = this.props;
    const { uuid } = this.props.match.params;

    if ((selectedSource && !selectedSource.uuid) || (selectedSource && selectedSource.uuid !== uuid) ) {
      this.props.getSourceDetails(uuid);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.uuid !== prevProps.match.params.uuid) {
      this.props.getSourceDetails(uuid);
    }
  }

  render() {
    const { selectedSource } = this.props;

      return (
        <>
          { selectedSource && selectedSource.uuid &&
            <div className='monitored-details-container'>
              <SummaryHeader selectedSource={ selectedSource }/>
              <DownloadedVideoList />
            </div>
          }
        </>
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
    getSourceDetails: (payload) => {
      dispatch(sourceActions.getSingleSource(payload))
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MonitoredDetailsPage));