import './index.less';
import React from 'react';
import Next from './next';

export default ({ pinyin, title, next, setPage }: any) => {
  return (
    <div className='page-left'>
      <div className='page-left-wrapper'>
        <div className='page-left-wrapper-header'>
          <div className='page-left-wrapper-header-pinyin'>{pinyin}</div>
          <div className='page-left-wrapper-header-title'>{title}</div>
        </div>
        <div className='page-left-wrapper-body'>
          <div className='page-left-wrapper-body-desc'>
            ************************************************************************************
            ************************************************************************************
          </div>
          {next && <Next onNextClick={setPage} />}
        </div>
      </div>
    </div>
  );
};
