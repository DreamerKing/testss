import React, { ReactNode, useState } from "react";
import './index.styl';
import { headerPrefix } from '@/env/config.styl';
import { filterDot } from '@/utils/utils'
type HeaderInfo = {
  title: string | ReactNode;
  image: string;
  menuClickCallback: (T: string) => void,
  menuList: menuProps[],
  curKey: string,
  extral: ReactNode
}
interface menuProps {
  name: string,
  key: string
}
type HeaderProps = Partial<HeaderInfo>
const Header: React.FC<HeaderProps> = (props) => {
  const { title = '', image = '', menuList, curKey, extral, menuClickCallback } = props
  const [menuKey, setMenuKey] = useState(null)
  const prefix = filterDot(headerPrefix)
  return <div className={prefix}>
    <div className={`${prefix}-left`}>
      <img src={image} />
      <h2>{title}</h2>
    </div>
    <div className={`${prefix}-right`}>
      <div className={`menu-list`}>
        {
          menuList.map((item: menuProps, index) => (
            <span
              className={`menu-list-li ${(menuKey ? item.key == menuKey : curKey ? item.key == curKey : index == 0) ? 'cur' : ''}`}
              key={item.key}
              onClick={() => {
                setMenuKey(item.key)
                menuClickCallback && menuClickCallback(item.key)
              }}
            >
              {item.name}
            </span>
          ))
        }
      </div>
      <div className="extral">{extral}</div>
    </div>
  </div>
}
export default Header