import React from 'react';
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UploadFile from './pages/uploadFile';
import IndexApp from './pages/index';

function RouterConfig() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/upload' element={<UploadFile />} />
        <Route path='/index' element={<IndexApp />} />
        {/*         以下为开发测试路由          */}
      </Routes>
    </>
  );
}

export default RouterConfig;
