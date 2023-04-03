import './index.less';

import React from 'react';
import PageLeft from '../components/left-text';
import PageRightImg from '../components/right-img';
import { pageItem } from '../type';

const imgData = [
  {
    title: '泛微OA审批流体检',
    borderColor: '#4372c3',
    textColor: '#4372c3',
    image: 'aquamarine',
    src: pageItem.JianQianXuZhi,
  },
  {
    title: 'SAP P2P体检',
    borderColor: '#ed7d31',
    textColor: '#ed7d31',
    image: 'aquamarine',
    src: '',
  },
];

interface pageIndexProps {
  setPage: (page: pageItem) => void;
}

const PageIndex = ({ setPage }: pageIndexProps) => {
  return (
    <div className='page-wrapper'>
      <PageLeft pinyin={'Liu Cheng Jian Kang Ti Jian'} title={'流程健康体检'} />
      <div className='page-right'>
        <div className='page-right-img'>
          <PageRightImg data={imgData} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default PageIndex;
