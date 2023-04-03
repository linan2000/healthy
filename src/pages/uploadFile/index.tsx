import React, { useState } from 'react';
import { Button, Modal, Select, Space, Carousel } from 'antd';
import styles from './style.module.less';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import { CloudUploadOutlined } from '@ant-design/icons';
import UpLoad from './components';

const UpLoadFileile: React.FC = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div className={styles.containerB}>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div className={styles.titleBox}>问卷调查</div>

      <UpLoad show={isModalOpen} setShow={setIsModalOpen}></UpLoad>
      <div className={styles.middle}>
        <div className={styles.questionnaire}></div>
        <Select
          defaultValue='流程类别'
          onChange={handleChange}
          options={[
            {
              value: '财务类审批流程（差旅报销、资金支付、发票开具、收入确认等）',
              label: '财务类审批流程（差旅报销、资金支付、发票开具、收入确认等）',
            },
            {
              value: '人事管理类审批流程（岗位变动、招聘、培训、工资发放、入离职等）',
              label: '人事管理类审批流程（岗位变动、招聘、培训、工资发放、入离职等）',
            },
            {
              value: '行政事务类审批流程（办公用品申请、车辆申请、用章申请等）',
              label: '行政事务类审批流程（办公用品申请、车辆申请、用章申请等）',
            },
            {
              value: '业务相关类审批流程（订单审批、采购审批、合同审批等）',
              label: '业务相关类审批流程（订单审批、采购审批、合同审批等）',
            },
            {
              value: '客户管理流程（客户投诉、商机处理等）',
              label: '客户管理流程（客户投诉、商机处理等）',
            },
          ]}
        />
        <Select
          defaultValue='公司所在行业'
          options={[
            { value: '多元化集团', label: '多元化集团' },
            { value: '能源石化', label: '能源石化' },
            { value: '物流运输', label: '物流运输' },
            { value: '电子信息', label: '电子信息' },
            { value: '农林牧渔', label: '农林牧渔' },
            { value: '银行保险', label: '银行保险' },
            { value: '互联网', label: '互联网' },
            { value: '零售百货', label: '零售百货' },
            { value: '日用生化（快速消费品）', label: '日用生化（快速消费品）' },
            { value: '医疗器械与制药', label: '医疗器械与制药' },
            { value: '冶金矿业', label: '冶金矿业' },
            { value: '政府及非盈利机构', label: '政府及非盈利机构' },
            { value: '电力通信', label: '电力通信' },
            { value: '餐饮酒店旅游', label: '餐饮酒店旅游' },
            { value: '商务服务', label: '商务服务' },
          ]}
        />
        <Select
          defaultValue='公司人员规模'
          options={[
            { value: '<300人', label: '<300人' },
            { value: '300-1000人', label: '300-1000人' },
            { value: '1000-5000人', label: '1000-5000人' },
            { value: '5000-10000人', label: '5000-10000人' },
            { value: '1万-10万人', label: '1万-10万人' },
            { value: '10万人以上', label: '10万人以上' },
          ]}
        />
        <Select
          defaultValue='公司收入规模'
          options={[
            { value: '<10亿', label: '<10亿' },
            { value: '10-50亿', label: '10-50亿' },
            { value: '50-100亿', label: '50-100亿' },
            { value: '100-500亿', label: '100-500亿' },
            { value: '500-1000亿', label: '500-1000亿' },
            { value: '1000亿以上', label: '1000亿以上' },
          ]}
        />
      </div>
      <Button
        type='primary'
        className={styles.c1}
        onClick={showModal}
        style={{ marginRight: '2rem' }}
      >
        上传文件
      </Button>
      <Link to={'/'}>
        <Button type='primary' onClick={showModal}>
          返回首页
        </Button>
      </Link>
    </div>
  );
};

export default UpLoadFileile;
