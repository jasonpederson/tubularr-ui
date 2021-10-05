import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextInput from './TextInput';
import AddNewDetailsForm from './AddNewDetailsForm';
import ActionButton from './ActionButton';
import { addNewActions } from '../../containers/addNew/index';
import IndicatorCard from '../Shared/IndicatorCard';
import AddNewFailureActions from './AddNewFailureActions';
import AddNewSuccessActions from './AddNewSuccessActions'

import urlPatterns from './constants/urlPatterns';
import determineUrlType from '../../utils/determineUrlType';
import makeHumanReadable from '../../utils/makeHumanReadable';

import './AddNew.scss';

class AddNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: '',
      urlValidated: false,
      type: '',
      sourceKey: ''
    }
  }

  resetState = () => {
    return this.setState({
      url: '',
      urlValidated: false,
      type: '',
      sourceKey: ''
    });
  }

  componentDidMount() {
    this.resetState();
  }

  componentWillUnmount() {
    this.resetState();
  }

  onChange = (value) => {
    return this.setState({
      url: value,
      urlValidated: false
    });
  }

  onValidateUrl = () => {
    const { url } = this.state;
    const parsedUrl = determineUrlType(url, urlPatterns);

    if (parsedUrl.type !== 'unknown') {
      this.setState({
        type: parsedUrl.type,
        sourceKey: parsedUrl.value,
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
    const { addNewInProgress, addNewCompleted, addNewError } = this.props;
    return (
      <div className='add-new-container'>
        <div className='add-new-input-container'>
          <TextInput 
            value={this.state.url}
            autoFocusFlag={ true }
            onChange={ this.onChange }
            active={ !(addNewInProgress || addNewCompleted || addNewError)  }
          />
        </div>
        { !this.state.urlValidated && !addNewInProgress && !(addNewCompleted || addNewError) &&
          <div className='verify-button-container'>
            <ActionButton className='verify-button' label={ 'Verify' } onClick={ this.onValidateUrl } />
          </div>
        }
        { this.state.urlValidated && !addNewInProgress && !(addNewCompleted || addNewError) &&
          <div className='add-new-form-container'>
            <div>
              <h1>{ makeHumanReadable(this.state.type) } Details</h1>
            </div>
            <AddNewDetailsForm onSubmit={ this.onSubmit } sourceKey={ this.state.sourceKey }/>
          </div>
        }
        { (addNewCompleted || addNewError) &&
          <div className='add-new-indicator-card-container'>
            <IndicatorCard 
              isError={ addNewError } 
              message={ addNewError ? 'Failure Adding New Channel or Playlist' : 'Successfully Added!'}
              actions={ addNewError ?
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
    addNewInProgress: state.addNewReducer.get('addNewInProgress'),
    addNewCompleted: state.addNewReducer.get('addNewCompleted'),
    addNewError: state.addNewReducer.get('addNewError')
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addNewChannelOrPlaylist: (payload) => {
      dispatch(addNewActions.addNewStarted(payload));
    },
    addNewRetry: () => {
      dispatch(addNewActions.addNewRetry());
    },
    resetProcess: () => {
      dispatch(addNewActions.addNewReset());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNew);
