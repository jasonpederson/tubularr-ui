import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import ActionButton from './ActionButton';

import subtitleLanguages from './constants/subtitleLanguages';
import videoOptions from './constants/videoOptions';

import './AddNewDetailsForm.scss';

export default function AddNewDetailsForm({ sourceKey, onSubmit }) {
  const { register, handleSubmit } = useForm();
  const [ useSubtitles, setUseSubtitles ] = useState(false);

  return (
    <div className='add-new-details-form-container'>
    <form>
      <div className='form-row'>
        <input {...register('title')} placeholder='Title' />
        <input {...register('sourceKey')} placeholder='Source Key' value={ sourceKey } />
      </div>
      <div className='form-row'>
        <label className='form-input-label'>
          <span className='form-input-label-text'>Save Directory Name</span>
          <input {...register('directory')} value={ sourceKey }/>
        </label>
        <label className='form-input-label'>
          <span className='form-input-label-text'>File Name Format</span>
          <input {...register('nameFormat')} value='{yyyy_mm_dd}_{source}_{title}_{key}_{format}.{ext}' />
        </label>
      </div>
      <div className='form-row space'>
        { videoOptions.map((videoOption) => {
            return (
              <label key={ videoOption.label } className='form-input-label'>
                <span className='form-input-label-text'>{ videoOption.label }</span>
                <select {...register(videoOption.key)}>
                  <option value=''>Select...</option>
                  { videoOption.options.map((option) => {
                    return (
                      <option key={ option } value={ option }>{ option }</option>
                    )})
                  }
                </select>
              </label>
            )
          })
        }
      </div>
      <div className='form-row'>
        <label className='form-checkbox-container'>
          <span className='form-checkbox-container-label'>Prefer 60 Fps</span>
          <input className='form-checkbox' type="checkbox" {...register('prefer60fps')} name="prefer60fps"/>
        </label>
        <label className='form-checkbox-container'>
          <span className='form-checkbox-container-label'>Prefer HDR</span>
          <input className='form-checkbox' type="checkbox" {...register('preferHdr')} name="preferHdr"/>
        </label>
        <label className='form-checkbox-container'>
          <span className='form-checkbox-container-label'>Download Thumbnails</span>
          <input className='form-checkbox' type="checkbox" {...register('downloadThumbnails')} name="downloadThumbnails"/>
        </label>
        <label className='form-checkbox-container'>
          <span className='form-checkbox-container-label'>Download NFO</span>
          <input className='form-checkbox' type="checkbox" {...register('downloadNfo')} name="downloadNfo"/>
        </label>
      </div>
      <div className='form-row space'>
        <label className='form-input-label'>
          <span className='form-input-label-text'>Index Schedule</span>
          <select {...register('indexSchedule')}>
            <option value=''>Select...</option>
            <option value='6'>6 Hours</option>
            <option value='12'>12 Hours</option>
            <option value='24'>24 Hours</option>
          </select>
        </label>
        <label className='form-input-label'>
          <span className='form-input-label-text'>Delete Schedule</span>
          <input {...register('deleteSchedule')} placeholder='In Days [ 0 = Never]' />
        </label>
        <label className='form-input-label'>
          <span className='form-input-label-text'>Fallback Strategy</span>
          <select {...register('indexSchedule')}>
            <option value=''>Select...</option>
            <option value='fail'>Fail, Do Not Attempt Download</option>
            <option value='next-best'>Get Next Best Resolution</option>
            <option value='hd-or-better'>Get Next Best, But At Least HD</option>
          </select>
        </label>
        <label className='form-input-label'>
          <span className='form-input-label-text'>Download Subtitles</span>
          <select {...register('downloadSubtitles')}>
            <option value=''>Select...</option>
            <option value='yes' onClick={ () => { setUseSubtitles(true) }}>Yes</option>
            <option value='no'onClick={ () => { setUseSubtitles(false) }}>No</option>
          </select>
        </label>
        { useSubtitles &&
          <label className='form-input-label'>
          <span className='form-input-label-text'>Subtitle Language</span>
          <select {...register('subtitleLanguage')}>
            <option value=''>Select Language...</option>
              { subtitleLanguages.map((languageItem) => {
                return (
                  <option key={ languageItem.subtag } value={ languageItem.subtag }>{ languageItem.title }</option>
                )})
              }
          </select>
          </label>
        }
      </div>
    </form>
    <ActionButton label={ 'Add' } onClick={ handleSubmit(onSubmit) } />
    </div>
  );
}


/*

        <label className='form-input-label'>
          <span className='form-input-label-text'>Video Codec</span>
          <select {...register('sourceVideoCodec')}>
            <option value=''>Select...</option>
              { videoCodecs.map((codec) => {
                return (
                  <option key={ codec } value={ codec }>{ codec }</option>
                )})
              }
          </select>
        </label>
        <label className='form-input-label'>
          <span className='form-input-label-text'>Audio Codec</span>
          <select {...register('sourceAudioCodec')}>
            <option value=''>Select...</option>
              { audioCodecs.map((codec) => {
                return (
                  <option key={ codec } value={ codec }>{ codec }</option>
                )})
              }
          </select>
        </label>
        */