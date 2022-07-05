import React, { Component, Fragment } from 'react';
import { loginApi } from '@/services/user'
import './index.scss'
class Guide extends Component {
  render() {
    return (
      <div className="index" onClick={() => {
        loginApi().then(() => {
          alert(11123)
        })
      }}>点击</div>
    )
  }
}

export default Guide
