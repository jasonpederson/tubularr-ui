import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarLoader from 'react-spinners/BarLoader';
import VideoCard from '../Shared/VideoCard';
import { videoActions } from '../../containers/videos/index';
import colorCodes from '../../constants/colorCodes';

import './VideoList.scss';

class VideoList extends Component {
  componentDidMount() {
    this.props.getVideos();
  }
  
  render() {
    const { videos, getVideosInProgress, getVideosError } = this.props;
    return (
      <div className='video-list-container'>
        { getVideosError &&
          <div className='video-list-indicator-card-container'>
            <IndicatorCard isError={ true } message={ 'Failed To Get Videos' } />
          </div>
        }
        { getVideosInProgress ?
          <div className='video-list-loading-indicator-container'>
            <BarLoader color={ colorCodes.highlight} loading={ getVideosInProgress } size={20} />
          </div>
          :
          <>
            { videos.length > 0 &&
              <div className='video-list-items-container'>
              { videos.map((video) => {
                return (
                  <VideoCard 
                    item={ video }
                    onClick={ () => {}}
                    onMouseEnterHanlder={ () => {}}
                    onMouseExitHandler={ () => {}}
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
    videos: state.videoReducer.get('videos'),
    getVideosInProgress: state.videoReducer.get('getVideosInProgress'),
    getVideosError: state.videoReducer.get('getVideosError')
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getVideos: () => {
      dispatch(videoActions.getVideos())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);