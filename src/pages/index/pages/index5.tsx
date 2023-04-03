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
      <div className='page-text-wrapper'>
        <div className='page-text-wrapper-container'>
          <div className='page-text-wrapper-container-item'>
            <div className='page-text-wrapper-container-item-title'>第一步</div>
            <div className='page-text-wrapper-container-item-text'>
              *******************************
            </div>
          </div>
          <div className='page-text-wrapper-container-item'>
            <div className='page-text-wrapper-container-item-title'>第二步</div>
            <div className='page-text-wrapper-container-item-text'>
              *******************************************************************************************************
              *******************************************
            </div>
          </div>
          <div className='page-text-wrapper-container-item'>
            <div className='page-text-wrapper-container-item-title'>第三步</div>
            <div className='page-text-wrapper-container-item-text'>
              *******************************************************************************************************
              ******************************
            </div>
          </div>
        </div>
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
