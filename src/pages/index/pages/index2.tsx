import './index.less';

import React from 'react';
import PageLeft from '../components/left-text';
import { pageItem } from '../type';

const jianqianxuzhiImg = 'rgb(83, 211, 156)';

interface pageIndexProps {
  setPage: (page: pageItem) => void;
}

const PageIndex = ({ setPage }: pageIndexProps) => {
  return (
    <div className='page-wrapper'>
      <PageLeft
        pinyin={'Jian Qian Xu Zhi'}
        title={'检前须知'}
        next={true}
        setPage={() => {
          setPage(pageItem.QuShuZhiYin);
        }}
      />
      <div className='page-right'>
        <div className='page-right-img'>
          <div className='page-right-img-image'>
            <div
              className='page-right-img-image-wrapper'
              style={{ backgroundColor: jianqianxuzhiImg }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageIndex;
