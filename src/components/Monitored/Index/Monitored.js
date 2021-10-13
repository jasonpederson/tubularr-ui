import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarLoader from "react-spinners/BarLoader";
import { sourceActions } from '../../../containers/source/index';
import MonitoredItemCard from './MonitoredItemCard';
import IndicatorCard from '../../Shared/IndicatorCard';

import findSourceItem from '../../../containers/source/utils/findSourceItem';

import './Monitored.scss';
import colorCodes from '../../../constants/colorCodes';

class Monitored extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hoveredItemUuid: undefined
    }
  }
  componentDidMount() {
    this.props.getMonitoredItems();
  }

  onMonitoredItemCardSelected = (uuid) => {
    const { sources } = this.props;

    const selectedSource = findSourceItem(sources, uuid);

    if (selectedSource) {
      this.props.setSelectedSource(selectedSource);
      this.props.history.push(`/monitored/details/${selectedSource.uuid}`);
    }
  }

  onMouseEnter = ( itemUuid ) => {
    return this.setState({
      hoveredItemUuid: itemUuid
    });
  }

  onMouseExit = (  ) => {
    return this.setState({
      hoveredItemUuid: undefined
    });
  }

  render() {
    const { hoveredItemUuid } = this.state;
    const { getSourcesInProgress, sources, getSourcesError } = this.props;

    return (
      <div className='monitored-container'>
        { getSourcesError &&
          <div className='monitored-indicator-card-container'>
            <IndicatorCard isError={ true } message={ 'Failed To Get Monitored Items' } />
          </div>
        }
        { getSourcesInProgress ?
          <div className='monitored-loading-indicator-container'>
            <BarLoader color={ colorCodes.highlight} loading={ getSourcesInProgress } size={20} />
          </div>
          :
          <>
            { sources.length > 0 &&
              <div className='monitored-items-container'>
              { sources.map((item) => {
                return (
                  <MonitoredItemCard 
                    key={ item.uuid }
                    item={item}
                    onClick={ this.onMonitoredItemCardSelected }
                    onMouseEnterHanlder={ this.onMouseEnter} 
                    onMouseExitHandler={ this.onMouseExit }
                    hoveredItemUuid={ hoveredItemUuid }
                  />
                )})
              }
              </div> 
            }
          </>
        }
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    getSourcesInProgress: state.sourceReducer.get('getSourcesInProgress'),
    sources: state.sourceReducer.get('sources'),
    getSourcesError: state.sourceReducer.get('getSourcesError')
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getMonitoredItems: () => {
      dispatch(sourceActions.getSourcesStarted())
    },
    setSelectedSource: (payload) => {
      dispatch(sourceActions.setSelectedSource(payload))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Monitored);
