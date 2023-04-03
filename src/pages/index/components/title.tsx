import './index.less';
import React from 'react';

const Title = ({ title }: any) => {
  return (
    <div className='index-title-container'>
      <div className='index-title-prediv'></div>
      <div className='index-title-text'>{title}</div>
    </div>
  );
};

export default Title;
