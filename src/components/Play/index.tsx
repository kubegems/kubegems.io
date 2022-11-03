/*
 * @Author: leon.chen imchensl@163.com
 * @Date: 2022-11-03 10:37:06
 * @LastEditors: leon.chen imchensl@163.com
 * @LastEditTime: 2022-11-03 18:21:33
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
              <img className={styles.play__video__close} src="/img/pages/close.png" onClick={() => { this.setState({ show: 0 }) }} />
              {/* <video className={styles.play__video__media} poster="/img/pages/video_cover.jpg" autoPlay crossOrigin="anonymous" controls src="https://kubegems.oss-cn-chengdu.aliyuncs.com/kubegems.mp4">
              </video> */}
              <iframe className={styles.play__video__media} frameBorder="0" title="video" src="https://player.bilibili.com/player.html?aid=689647355&bvid=BV1tm4y1c76p&cid=879512219&page=1&as_wide=1&high_quality=1&danmaku=0&t=2"></iframe>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Play