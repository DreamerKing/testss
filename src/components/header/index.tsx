import React from "react";
import './index.styl';
import { headerPrefix } from '@/env/config.styl';
import { filterDot } from '@/utils/utils'

const Header: React.FC = () => {
  const prefix = filterDot(headerPrefix)
  return <div className={prefix}>
    <div className={`${prefix}-left`}>
      <img src="" />
      <h2>运营平台</h2>
    </div>
    <div className={`${prefix}-right`}>

    </div>
  </div>
}
export default Header