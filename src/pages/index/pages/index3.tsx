import './index.less';

import React from 'react';
import PageLeft from '../components/left-text';
import RightModule from '../components/right-module';
import { pageItem } from '../type';

interface pageIndexProps {
  setPage: (page: pageItem) => void;
}

const modules = [
  {
    key: 'a',
    title: '取数指导_视频',
    src: pageItem.QuShuVideo,
    image: '#f00',
  },
  {
    key: 'b',
    title: '取数分步指引',
    src: pageItem.QuShuFenBuZhiYin,
    image: '#0f0',
  },
  {
    key: 'c',
    title: '取数指导手册下载',
    src: pageItem.QuShuShowCe,
    image: '#ff0',
  },
];

const PageIndex = ({ setPage }: pageIndexProps) => {
  return (
    <div className='page-wrapper'>
      <PageLeft
        pinyin={'Qu Shu Zhi Yin'}
        title={'取数指引'}
        next={true}
        setPage={() => {
          setPage(pageItem.QiYeInfo);
        }}
      />
      <div className='page-right'>
        <RightModule modules={modules} setPage={setPage} />
      </div>
    </div>
  );
};

export default PageIndex;
