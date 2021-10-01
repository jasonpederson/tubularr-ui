import React from 'react';

import './TextInput.scss';

export default function TextInput({ value, onChange, autoFocusFlag }) {
  return (
    <div className='text-input-container'>
        <input
          className='text-input'
          value={ value }
          placeholder='Channel or Playlist URL'
          autoFocus={ autoFocusFlag }
          onChange={ e => onChange(e.target.value) }
        />
    </div>
  );
}