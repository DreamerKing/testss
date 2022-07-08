import React, { ReactNode } from "react";
import './index.styl';
import { headerPrefix } from '@/env/config.styl';
import { filterDot } from '@/utils/utils'
type HeaderProps = {
  title: string | ReactNode;
  image: string;
}
const Header: React.FC<HeaderProps> = (props) => {
  const { title = '', image = '' } = props
  const prefix = filterDot(headerPrefix)
  return <div className={prefix}>
    <div className={`${prefix}-left`}>
      <img src={image} />
      <h2>{title}</h2>
    </div>
    <div className={`${prefix}-right`}>
      
    </div>
  </div>
}
export default Header