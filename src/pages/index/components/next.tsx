import './index.less';
import React from 'react';
import { pageItem } from '../type';
interface pageIndexProps {
  onNextClick: () => void;
}
export default ({ onNextClick }: pageIndexProps) => {
  return (
    <div className='page-next' onClick={onNextClick}>
      <div className='page-next-wrapper'>已知晓，下一步&gt;&gt;&gt;</div>
    </div>
  );
};
