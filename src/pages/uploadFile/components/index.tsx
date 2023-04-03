import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import styles from './style.module.less';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import { CloudUploadOutlined } from '@ant-design/icons';

interface propstype {
  show: boolean;
  setShow: (flag: boolean) => void;
}

const UpLoad: React.FC<propstype> = (props) => {
  const { show, setShow } = props;
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setShow(false);
  };

  const handleCancel = () => {
    setShow(false);
  };

  return (
    <div className={styles.content}>
      <Modal
        title='上传CSV文件'
        open={show}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText={'取消'}
        width={'144rem'}
      >
        <div className={styles.container} style={{ padding: '4rem 4rem' }}>
          <div className={styles.container1}>
            <div className={styles.templateList}>
              {/* {
                                fileList.map((item, index) =>
                                    <div className={styles.templateItem} key={index}>
                                        <div className={styles.templatesLeft}>
                                            <div className={styles.icons}>&#xe62d;</div>
                                            <div className={styles.templateName}>
                                                <div>{item.name}</div>
                                                <div>{getFileSize(item.size)}</div>
                                            </div>
                                        </div>
                                        <div className={styles.templatesRight}>
                                            <div className={styles.lineCenter}>
                                                <div className={styles.line}>
                                                    <div style={{ width: `${item.progress}%` }} className={styles.progressBar} />
                                                </div>
                                                <div>已上传{item.progress}%</div>
                                            </div>
                                            <div className={styles.closeIcon} onClick={() => deleteUploadFile(index)}>&#xe602;</div>
                                        </div>
                                    </div>)
                            } */}
            </div>
            <div className={styles.uploadContainer}>
              <input
                type='file'
                className={styles.hideInput}
                id='a1'
                // onClick={(e) => e.target.value = null}
                multiple={true}
                // onChange={uploadFile}
                accept={
                  'text/csv,application/zip,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                }
              />
              <label className={styles.uploadBtn} htmlFor={'a1'}>
                <CloudUploadOutlined /> 上传文件
              </label>
              <div className={styles.uploadText}>支持CSV上传</div>
            </div>
          </div>
          <div className={styles.text1}>说明</div>
          <div className={styles.text2}>1.</div>
        </div>
      </Modal>
    </div>
  );
};

export default UpLoad;
