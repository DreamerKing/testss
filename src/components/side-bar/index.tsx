import React from "react";
import './index.styl'
import { sideBarPrefix } from '@/env/config.styl';
import { filterDot } from '@/utils/utils'
const SideBar: React.FC = () => {
  const prefix = filterDot(sideBarPrefix)
  return <div className={prefix}>

  </div>
}
export default SideBar