import React, { Component } from 'react';
import TextInput from './TextInput';
import AddNewDetailsForm from './AddNewDetailsForm';
import ActionButton from './ActionButton';

import urlPatterns from './constants/urlPatterns';
import determineUrlType from '../../utils/determineUrlType';
import makeHumanReadable from '../../utils/makeHumanReadable';

import './AddNew.scss';

class AddNew extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: 'https://www.youtube.com/c/TomScottGo',
      urlValidated: false,
      type: '',
      sourceKey: ''
    }
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

  if (parsedUrl.type !== 'unknown')
    this.setState({
      type: parsedUrl.type,
      sourceKey: parsedUrl.value,
      urlValidated: true
    });
  }

  onSubmit = (result) => {
    console.log(JSON.stringify(result));
  }

  render() {
    return (
      <div className='add-new-container'>
        <div className='add-new-input-container'>
          <TextInput 
            value={this.state.url}
            autoFocusFlag={ true }
            onChange={ this.onChange }
          />
        </div>
        { !this.state.urlValidated &&
          <div className='verify-button-container'>
            <ActionButton className='verify-button' label={ 'Verify' } onClick={ this.onValidateUrl } />
          </div>
        }
        { this.state.urlValidated &&
          <div className='add-new-form-container'>
            <div>
              <h1>{ makeHumanReadable(this.state.type) } Details</h1>
            </div>
            <AddNewDetailsForm onSubmit={ this.onSubmit } sourceKey={ this.state.sourceKey }/>
          </div>
        }
      </div>
    );
  }
}

export default AddNew;