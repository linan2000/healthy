import './index.less';
import React from 'react';
import { pageItem } from '../type';

interface Props {
  data: any[];
  setPage: (page: pageItem) => void;
}

export default ({ data = [], setPage }: Props) => {
  return (
    <>
      {data.map((item: any) => (
        <div className='page-right-img-item' key={item.title}>
          <div className='page-right-img-item-image' style={{ backgroundColor: item.image }}>
            <div
              className='page-right-img-item-image-button'
              onClick={() => {
                if (item.src) {
                  setPage(item.src);
                }
              }}
            >
              <div
                className='page-right-img-item-image-button-text'
                style={{ color: item.textColor }}
              >
                {item.title}
              </div>
            </div>
          </div>
          <div
            className='page-right-img-item-footer'
            style={{ backgroundColor: item.borderColor }}
          ></div>
        </div>
      ))}
    </>
  );
};
