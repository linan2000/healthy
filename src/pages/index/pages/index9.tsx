import './index.less';

import React from 'react';
import { Button, Row, Col } from 'antd';
import classnames from 'classnames';

import { pageItem } from '../type';
import Back from '../components/back';
import Error from '../icons/error';
import Success from '../icons/success';

interface pageIndexProps {
  setPage: (page: pageItem) => void;
}

const enum flagType {
  'SUCCESS' = 'success',
  'ERROR' = 'error',
  'NULL' = 'null',
}

const PageIndex = ({ setPage }: pageIndexProps) => {
  const [uploadFlag, setFlag] = React.useState<flagType>(flagType.NULL);
  const [textTitle, setTitle] = React.useState('上传说明');
  const handleClick = () => {
    setFlag(flagType.SUCCESS);
  };

  const wranRender = React.useMemo(() => {
    if (uploadFlag === flagType.ERROR) {
      return (
        <div className='page-data-upload-item-wran'>
          <div className='page-data-upload-item-wran-icon'>
            <Error />
          </div>
          <div className='page-data-upload-item-wran-text'>数据上传失败，请重新操作</div>
        </div>
      );
    } else if (uploadFlag === flagType.SUCCESS) {
      setTitle('请耐心等待邮件回复');
      return (
        <div className='page-data-upload-item-wran'>
          <div className='page-data-upload-item-wran-icon'>
            <Success />
          </div>
          <div className='page-data-upload-item-wran-text'>数据上传成功</div>
        </div>
      );
    } else {
      return <></>;
    }
  }, [uploadFlag]);
  return (
    <div className='page-wrapper'>
      <div className='page-data'>
        <div className='page-data-upload'>
          <Row>
            <Col className='page-data-upload-item' span={8}>
              <div className='page-data-upload-item-div'></div>
            </Col>
            <Col className='page-data-upload-item' span={4}>
              <Button className='page-data-upload-item-button' onClick={handleClick}>
                数据上传
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className='page-data-upload-item' span={8} style={{ height: '20px' }}>
              {wranRender}
            </Col>
          </Row>
        </div>
        <div
          className={classnames('page-data-text', {
            'upload-success': uploadFlag === flagType.SUCCESS,
          })}
        >
          <div className='page-data-text-title'>{textTitle}</div>
          <div className='page-data-text-body'>
            <p>
              我生于一片大雪之中，自小，便是为了活下去而战斗。人有七情六欲，当十三种情绪加到一起的时候，我就明白了我的枪意。俗名中注定的白龙，是我小时命中的声音，为寻白龙，我涉及黑山白水，历经百劫千难，为的就是在我每次人生中找到他。我苦渡春秋轮回，在我三岁那年，我就开始练枪，枪一上手就人枪合一爱不释手；九岁，我悟出夺命十三枪，于九天之上，斩杀了花果山的妖猴；二十岁，我熟读天下枪谱，纵横江湖，再无敌手。他们都说，我是个喜欢在背后杀人的江湖杀手，我不在乎，每个人都有自己擅长的技艺，有人运筹帷幄决胜在千里之外，有人一夫当关，万夫莫开，有人百步穿杨千里之外取人首级，而我便是享受这份狩猎的味道。
            </p>
            <p>
              夺命十三枪，始于浩荡天恩、逐百鬼夜行、天下无双，风无声、心如止水、光无影、七剑无痕、海纳百川、浑然一浊。我去问佛，问跟韩信是否有缘，佛说：你跟韩信无缘，我说求缘，佛说：那你便要等上千年，这一千年里，你可见韩信，而韩信却不知有你，你可愿等啊？我答：国服韩信，请战！！！第一枪：长相思兮长相依，多相思兮无穷极，相思；第二枪：相思一夜情多少，地角天涯未是长，断肠；眼见为虚，心听则实，第三枪：盲龙；乾坤一宿天下有，月如钩，难别求，第四枪：风流；书香百味有多少，天下何人配白衣，第五枪：无双；枪子游龙万兵守，命入黄泉不回头，第六枪：白龙；有过痛苦，方知众生痛苦，有过牵挂，了无牵挂，若是修佛先修心，一枪风雪一枪冰，第七枪：忘川；翻云起雾藏杀意，横扫千军几万里，第八枪：鲲鹏；纵使韩信断了枪，也徒留我一人伤，第九枪：百鬼夜行；天地无情恨多少，夜里孤生泣不常，缘魂不愿为天意，长枪出，君王泣，第十枪：寻仇；上见君王不低头，三军将士常叩首，第十一枪：败将封侯；你说此生不负良人，千里共婵娟，怎奈人去楼空似云烟，白发青丝一瞬间，今世轮回为少年，爱过之后知情浓，家人走，法不留，第十二枪：抬头；百万将士在摇旗，将军韩信战无敌，第十三枪：我命由我，不由天！
            </p>
          </div>
        </div>
      </div>
      {/* <Back
        onNextClick={() => {
          setPage(pageItem.QuShuZhiYin);
        }}
      /> */}
    </div>
  );
};

export default PageIndex;
