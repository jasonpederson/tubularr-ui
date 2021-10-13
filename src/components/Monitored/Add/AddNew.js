import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextInput from './TextInput';
import AddNewDetailsForm from './AddNewDetailsForm';
import ActionButton from './ActionButton';
import { sourceActions } from '../../../containers/source/index';
import IndicatorCard from '../../Shared/IndicatorCard';
import AddNewFailureActions from './AddNewFailureActions';
import AddNewSuccessActions from './AddNewSuccessActions'

import urlPatterns from './constants/urlPatterns';
import determineUrlType from '../../../utils/determineUrlType';
import makeHumanReadable from '../../../utils/makeHumanReadable';

import './AddNew.scss';

class AddNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: '',
      urlValidated: false,
      type: '',
      sourceKey: '',
      directory: ''
    }
  }

  resetState = () => {
    return this.setState({
      url: '',
      urlValidated: false,
      type: '',
      sourceKey: '',
      directory: ''
    });
  }

  componentDidMount() {
    this.resetState();
  }

  componentWillUnmount() {
    this.resetState();
  }

  onChange = (value, key) => {
    return this.setState({
      [key]: value,
      urlValidated: key === 'url' ? false : this.state.urlValidated
    });
  }

  onValidateUrl = () => {
    const { url } = this.state;
    const parsedUrl = determineUrlType(url, urlPatterns);

    if (parsedUrl.type !== 'unknown') {
      this.setState({
        type: parsedUrl.type,
        sourceKey: parsedUrl.value,
        directory: parsedUrl.value,
        urlValidated: true
      });
    }
  }

  onSubmit = (result) => {
    this.props.addNewChannelOrPlaylist(result);
  }

  onRetry = () => {
    this.props.addNewRetry();
  }

  onDone = () => {
    this.props.resetProcess();
    this.resetState();
    this.props.history.push('/monitored');
  }

  onAddAnother = () => {
    this.props.resetProcess();
    this.resetState();
  }

  render() {
    const { addSourceInProgress, addSourceCompleted, addSourceError } = this.props;
    return (
      <div className='add-new-container'>
        <div className='add-new-input-container'>
          <TextInput 
            value={this.state.url}
            autoFocusFlag={ true }
            onChange={ this.onChange }
            active={ !(addSourceInProgress || addSourceCompleted || addSourceError)  }
          />
        </div>
        { !this.state.urlValidated && !addSourceInProgress && !(addSourceCompleted || addSourceError) &&
          <div className='verify-button-container'>
            <ActionButton className='verify-button' label={ 'Verify' } onClick={ this.onValidateUrl } />
          </div>
        }
        { this.state.urlValidated && !addSourceInProgress && !(addSourceCompleted || addSourceError) &&
          <div className='add-new-form-container'>
            <div>
              <h1>{ makeHumanReadable(this.state.type) } Details</h1>
            </div>
            <AddNewDetailsForm onSubmit={ this.onSubmit } sourceKey={ this.state.sourceKey } directory={ this.state.directory } onChange={ this.onChange }/>
          </div>
        }
        { (addSourceCompleted || addSourceError) &&
          <div className='add-new-indicator-card-container'>
            <IndicatorCard 
              isError={ addSourceError } 
              message={ addSourceError ? 'Failure Adding New Channel or Playlist' : 'Successfully Added!'}
              actions={ addSourceError ?
                <AddNewFailureActions onRetry={ this.onRetry }/> 
                :
                <AddNewSuccessActions onDone={ this.onDone } onAddAnother={ this.onAddAnother } />
              }
            />
          </div>
        }
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    addSourceInProgress: state.sourceReducer.get('addSourceInProgress'),
    addSourceCompleted: state.sourceReducer.get('addSourceCompleted'),
    addSourceError: state.sourceReducer.get('addSourceError')
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addNewChannelOrPlaylist: (payload) => {
      dispatch(sourceActions.addSourceStarted(payload));
    },
    addNewRetry: () => {
      dispatch(sourceActions.addSourceRetry());
    },
    resetProcess: () => {
      dispatch(sourceActions.addSourceReset());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNew);
