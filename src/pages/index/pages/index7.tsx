import './index.less';

import React from 'react';
import PageLeft from '../components/left-text';
import { pageItem } from '../type';

const beijingdiaoyan = 'rgb(83, 04, 255)';

interface pageIndexProps {
  setPage: (page: pageItem) => void;
}

const PageIndex = ({ setPage }: pageIndexProps) => {
  return (
    <div className='page-wrapper'>
      <PageLeft
        pinyin={'Qi Ye Xin Xi Bei Jing Diao Yan'}
        title={'企业信息背景调研'}
        next={true}
        setPage={() => {
          setPage(pageItem.InputInfo);
        }}
      />
      <div className='page-right'>
        <div className='page-right-img'>
          <div className='page-right-img-image'>
            <div
              className='page-right-img-image-wrapper'
              style={{ backgroundColor: beijingdiaoyan }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageIndex;
