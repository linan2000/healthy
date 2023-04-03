import './index.less';

import React from 'react';
import { pageItem } from '../type';
import Back from '../components/back';
import Download from '../icons/download';

interface pageIndexProps {
  setPage: (page: pageItem) => void;
}

const PageIndex = ({ setPage }: pageIndexProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className='page-download'>
        <div className='page-download-wrapper' onClick={() => {}}>
          <div className='page-download-wrapper-svg'>
            <Download />
          </div>
          <div className='page-download-wrapper-text'>取数指导手册下载</div>
        </div>
      </div>
      <Back
        onNextClick={() => {
          setPage(pageItem.QuShuZhiYin);
        }}
      />
    </>
  );
};

export default PageIndex;
