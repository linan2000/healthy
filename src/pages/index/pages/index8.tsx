import './index.less';

import React from 'react';
import { Select, Form, Input, Col, Row } from 'antd';

import PageLeft from '../components/left-text';
import { pageItem } from '../type';
import Next from '../components/next';
import Company from '../icons/company';
import Email from '../icons/email';
import Error from '../icons/error';

interface pageIndexProps {
  setPage: (page: pageItem) => void;
}

const processMap = new Map<string, string>([
  ['moeny', '财务类'],
  ['proper', '人事管理类'],
  ['thing', '行政事务类'],
  ['task', '业务相关类'],
  ['cust', '客户管理类'],
]);

const industryMap = new Map<string, string>([
  ['a', '多元化集团'],
  ['b', '能源石化'],
  ['c', '物流运输'],
  ['d', '电子信息'],
  ['e', '农林牧渔'],
]);

const numberMap = new Map<string, string>([
  ['f', '<300人'],
  ['g', '300-1000人'],
  ['h', '1000-5000人'],
  ['i', '5000-10000人'],
  ['j', '10000-100000人'],
]);

const incomeMap = new Map<string, string>([
  ['k', '<10亿'],
  ['l', '10-50亿'],
  ['m', '50-100亿'],
  ['n', '100-500亿'],
  ['i', '500-1000亿'],
]);

const enum dataType {
  COMPANY_NAME = 'company_name', //公司名称
  PROCESS_KIND = 'process_kind', //流程类别
  COMPANY_INDUSTRY = 'company_industry', //公司所在行业
  PENSONNEL_SIZE = 'Personnel size', //公司人员规模
  INCOME_SIZE = 'income_size', //公司收入规模
  EMAIL = 'email', //邮箱
}

const dataTypeObj = {
  [dataType.COMPANY_NAME]: dataType.COMPANY_NAME,
  [dataType.PROCESS_KIND]: dataType.PROCESS_KIND,
  [dataType.COMPANY_INDUSTRY]: dataType.COMPANY_INDUSTRY,
  [dataType.PENSONNEL_SIZE]: dataType.PENSONNEL_SIZE,
  [dataType.INCOME_SIZE]: dataType.INCOME_SIZE,
  [dataType.EMAIL]: dataType.EMAIL,
};

const PageIndex = ({ setPage }: pageIndexProps) => {
  const [data, setData] = React.useState<any>({});
  const [nextFlag, setFlag] = React.useState<boolean>(true);
  const handleProcessChange = (e: any) => {
    fillData(dataType.PROCESS_KIND, e);
  };
  const handleIndustryChange = (e: any) => {
    fillData(dataType.COMPANY_INDUSTRY, e);
  };
  const handleNumberChange = (e: any) => {
    fillData(dataType.PENSONNEL_SIZE, e);
  };
  const handleIncomeChange = (e: any) => {
    fillData(dataType.INCOME_SIZE, e);
  };

  const completeSelect = () => {
    let nextFlag = true;
    for (let k in dataTypeObj) {
      if (!(k in data)) {
        nextFlag = false;
      }
    }
    if (!nextFlag) {
      setFlag(false);
      return;
    }
    setFlag(true);
    setPage(pageItem.UploadData);
  };

  const fillData = (type: dataType, value: any) => {
    if (!type || !value) {
      return false;
    }
    setData({ ...data, [type]: value });
  };
  return (
    <div className='page-wrapper'>
      <div className='page-data'>
        <div className='page-data-select'>
          <Row>
            <Col span={4} className='page-data-select-item'>
              <Input
                placeholder='公司名称'
                suffix={
                  <span style={{ fontSize: '14px' }}>
                    <Company />
                  </span>
                }
                onChange={(e) => {
                  fillData(dataType.COMPANY_NAME, e.target.value);
                }}
              ></Input>
            </Col>
            <Col span={5} className='page-data-select-item'>
              <Select
                style={{ flex: '1' }}
                onChange={handleProcessChange}
                placeholder='流程类别'
                options={Array.from(processMap.keys()).map((key) => {
                  return {
                    value: key,
                    label: processMap.get(key),
                  };
                })}
              />
            </Col>
            <Col span={5} className='page-data-select-item'>
              <Select
                style={{ flex: '1' }}
                onChange={handleIndustryChange}
                placeholder='公司所在行业'
                options={Array.from(industryMap.keys()).map((key) => {
                  return {
                    value: key,
                    label: industryMap.get(key),
                  };
                })}
              />
            </Col>
            <Col span={5} className='page-data-select-item'>
              <Select
                style={{ flex: '1' }}
                onChange={handleNumberChange}
                placeholder='公司人员规模'
                options={Array.from(numberMap.keys()).map((key) => {
                  return {
                    value: key,
                    label: numberMap.get(key),
                  };
                })}
              />
            </Col>
            <Col span={5} className='page-data-select-item'>
              <Select
                style={{ flex: '1' }}
                onChange={handleIncomeChange}
                placeholder='公司收入规模'
                options={Array.from(incomeMap.keys()).map((key) => {
                  return {
                    value: key,
                    label: incomeMap.get(key),
                  };
                })}
              />
            </Col>
          </Row>
          <Row>
            <Col span={4} className='page-data-select-item'>
              <Input
                placeholder='联系邮箱'
                suffix={
                  <span style={{ fontSize: '14px' }}>
                    <Email />
                  </span>
                }
                onChange={(e) => {
                  fillData(dataType.EMAIL, e.target.value);
                }}
              ></Input>
            </Col>
            <Col span={20} className='page-data-select-item'>
              {!nextFlag && (
                <div className='page-data-select-item-wran'>
                  <div className='page-data-select-item-wran-icon'>
                    <Error />
                  </div>
                  <div className='page-data-select-item-wran-text'>信息填写不完整，请重新输入</div>
                </div>
              )}
            </Col>
          </Row>
        </div>
        <div className='page-data-text'>
          <div className='page-data-text-title'>填表说明</div>
          <div className='page-data-text-body'>
            <p>
              我生于一片大雪之中，自小，便是为了活下去而战斗。人有七情六欲，当十三种情绪加到一起的时候，我就明白了我的枪意。俗名中注定的白龙，是我小时命中的声音，为寻白龙，我涉及黑山白水，历经百劫千难，为的就是在我每次人生中找到他。我苦渡春秋轮回，在我三岁那年，我就开始练枪，枪一上手就人枪合一爱不释手；九岁，我悟出夺命十三枪，于九天之上，斩杀了花果山的妖猴；二十岁，我熟读天下枪谱，纵横江湖，再无敌手。他们都说，我是个喜欢在背后杀人的江湖杀手，我不在乎，每个人都有自己擅长的技艺，有人运筹帷幄决胜在千里之外，有人一夫当关，万夫莫开，有人百步穿杨千里之外取人首级，而我便是享受这份狩猎的味道。
            </p>
            <p>
              夺命十三枪，始于浩荡天恩、逐百鬼夜行、天下无双，风无声、心如止水、光无影、七剑无痕、海纳百川、浑然一浊。我去问佛，问跟韩信是否有缘，佛说：你跟韩信无缘，我说求缘，佛说：那你便要等上千年，这一千年里，你可见韩信，而韩信却不知有你，你可愿等啊？我答：国服韩信，请战！！！第一枪：长相思兮长相依，多相思兮无穷极，相思；第二枪：相思一夜情多少，地角天涯未是长，断肠；眼见为虚，心听则实，第三枪：盲龙；乾坤一宿天下有，月如钩，难别求，第四枪：风流；书香百味有多少，天下何人配白衣，第五枪：无双；枪子游龙万兵守，命入黄泉不回头，第六枪：白龙；有过痛苦，方知众生痛苦，有过牵挂，了无牵挂，若是修佛先修心，一枪风雪一枪冰，第七枪：忘川；翻云起雾藏杀意，横扫千军几万里，第八枪：鲲鹏；纵使韩信断了枪，也徒留我一人伤，第九枪：百鬼夜行；天地无情恨多少，夜里孤生泣不常，缘魂不愿为天意，长枪出，君王泣，第十枪：寻仇；上见君王不低头，三军将士常叩首，第十一枪：败将封侯；你说此生不负良人，千里共婵娟，怎奈人去楼空似云烟，白发青丝一瞬间，今世轮回为少年，爱过之后知情浓，家人走，法不留，第十二枪：抬头；百万将士在摇旗，将军韩信战无敌，第十三枪：我命由我，不由天！
            </p>
          </div>
        </div>
        <Next onNextClick={completeSelect}></Next>
      </div>
    </div>
  );
};

export default PageIndex;
