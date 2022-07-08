import React from "react";
import './index.styl';
import { crumbsPrefix } from '@/env/config.styl';
import { filterDot } from '@/utils/utils'

const Crumbs: React.FC = () => {
  const prefix = filterDot(crumbsPrefix)
  return <div className={prefix}>
    <span className="md">任务中心</span>
  </div>
}
export default Crumbs