import * as React from 'react';

export default function Icon ({ iconList, name }) {
  return (
    <>
      { iconList[name] }
    </>
  )
};