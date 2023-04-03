import './index.less';
import React from 'react';
import { pageItem } from '../type';

export default ({ modules, setPage }: any) => {
  return (
    <div className='page-right-module'>
      {modules.map((item: any, i: number) => (
        <div
          key={item.key}
          className='page-right-module-item'
          style={{ backgroundColor: item.image }}
        >
          <div
            className='page-right-module-item-text'
            style={{
              gridColumn: i % 2 === 0 ? 'column-split/column-end' : 'column-start/column-split',
            }}
            onClick={() => {
              setPage(item.src);
            }}
          >
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};
