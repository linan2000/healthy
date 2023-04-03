import './index.less';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigation = useNavigate();
  return (
    <div className='index-nav-container'>
      <div className='index-nav-content'>
        <div
          className='index-nav-content-title'
          title='返回首页'
          onClick={() => {
            navigation('/');
          }}
        >
          望繁信科技
        </div>
        <div className='index-nav-content-items'>
          <div className='index-nav-content-items-item'>
            <span>免费体检</span>
            <div className='index-nav-content-items-item-border active'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
