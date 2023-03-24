/*
 * @Author: leon.chen imchensl@163.com
 * @Date: 2022-11-03 10:37:06
 * @LastEditors: leon.chen imchensl@163.com
 * @LastEditTime: 2023-03-24 16:30:38
 * @FilePath: /kubegems.io/src/components/Play/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import styles from './index.module.scss';

class Play extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    show: 0
  }

  handleShow() {
    this.setState({ show: 1 })
  }

  render() {
    return (
      <div id="play">
        {this.state.show ? (
          <div>
            <div className={styles.play}>
            </div>
            <div className={styles.play__video}>
              <img className={styles.play__video__close} src="/img/page/close.png" onClick={() => { this.setState({ show: 0 }) }} />
              {<video className={styles.play__video__media} poster="/img/page/videofm.jpg" crossOrigin="anonymous" controls src="https://s3.harix.iamidata.com/video/KubeGems.mp4">
              </video>}
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Play