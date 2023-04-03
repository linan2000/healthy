import './index.less';
import React from 'react';
import GoBackSvg from '../icons/goback';
interface pageIndexProps {
  onNextClick: () => void;
}
export default ({ onNextClick }: pageIndexProps) => {
  return (
    <div className='page-back' onClick={onNextClick}>
      <div className='page-back-img'>
        <GoBackSvg />
      </div>
      <div className='page-back-text'>已完成，返回前页</div>
    </div>
  );
};
