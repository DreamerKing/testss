import React from "react";
import './index.styl';
import { footerPrefix } from '@/env/config.styl';
import { filterDot } from '@/utils/utils'

const Footer: React.FC = () => {
  const prefix = filterDot(footerPrefix)
  return <div className={prefix}>
    版权©2022云栖工程院出品
  </div>
}
export default Footer