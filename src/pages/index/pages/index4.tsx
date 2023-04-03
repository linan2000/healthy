import './index.less';

import React from 'react';
import PageLeft from '../components/left-text';
import RightModule from '../components/right-module';
import { pageItem } from '../type';
import Back from '../components/back';

interface pageIndexProps {
  setPage: (page: pageItem) => void;
}

const PageIndex = ({ setPage }: pageIndexProps) => {
  return (
    <div className='page-wrapper'>
      <div className='page-video-wrapper'>
        <div className='page-video-wrapper-body'>
          <video controls className='page-video-wrapper-body-video'>
            <source src={require('../video/v.mp4')} type='video/mp4' />
          </video>
        </div>
        <div className='page-video-wrapper-foot' style={{ backgroundColor: '#0f0' }}></div>
      </div>
      <Back
        onNextClick={() => {
          setPage(pageItem.QuShuZhiYin);
        }}
      />
    </div>
  );
};

export default PageIndex;
