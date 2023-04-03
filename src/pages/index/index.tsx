import './index.less';
import React from 'react';
import Nav from './components/nav';
import Title from './components/title';
import PageIndex from './pages';
import PageIndex2 from './pages/index2';
import PageIndex3 from './pages/index3';
import PageIndex4 from './pages/index4';
import PageIndex5 from './pages/index5';
import PageIndex6 from './pages/index6';
import PageIndex7 from './pages/index7';
import PageIndex8 from './pages/index8';
import PageIndex9 from './pages/index9';

import { pageItem } from './type';

const IndexApp = () => {
  const [page, setPage] = React.useState<pageItem>(pageItem.index); //当前页面

  const pageMap = new Map([
    [pageItem.index, <PageIndex setPage={setPage} />],
    [pageItem.JianQianXuZhi, <PageIndex2 setPage={setPage} />],
    [pageItem.QuShuZhiYin, <PageIndex3 setPage={setPage} />],
    [pageItem.QuShuVideo, <PageIndex4 setPage={setPage} />],
    [pageItem.QuShuFenBuZhiYin, <PageIndex5 setPage={setPage} />],
    [pageItem.QuShuShowCe, <PageIndex6 setPage={setPage} />],
    [pageItem.QiYeInfo, <PageIndex7 setPage={setPage} />],
    [pageItem.InputInfo, <PageIndex8 setPage={setPage} />],
    [pageItem.UploadData, <PageIndex9 setPage={setPage} />],
  ]);

  const titleMap = new Map<string, string>([
    [pageItem.index, '流程挖掘免费体验活动'],
    [pageItem.JianQianXuZhi, '泛微OA审批流体检'],
    [pageItem.QuShuZhiYin, '泛微OA审批流体检'],
    [pageItem.QuShuVideo, '泛微OA审批流取数指导'],
    [pageItem.QuShuFenBuZhiYin, '泛微OA审批流取数分步指引'],
    [pageItem.QuShuShowCe, '泛微OA审批流取数指导手册下载'],
    [pageItem.QiYeInfo, '泛微OA审批流体检'],
    [pageItem.InputInfo, '泛微OA审批流体检'],
    [pageItem.UploadData, '泛微OA审批流体检'],
  ]);

  return (
    <div className='index-container'>
      <Nav />
      <div className='index-title'>
        <div className='index-title-div'></div>
        <Title title={titleMap.get(page)} />
      </div>
      <div className='index-wrapper'>{pageMap.get(page)}</div>
    </div>
  );
};

export default IndexApp;
