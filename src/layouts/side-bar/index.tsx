import React, { useEffect, useState } from "react";
import closeIcon from './images/side-close.svg'
import './index.styl'
import { sideBarPrefix } from '@/env/config.styl';
import { filterDot } from '@/utils/utils'

interface menuProps {
  name: string,
  key: string,
  icon: string,
  path?: string,
  children: menuProps[],
}
interface DipSidebarInfo {
  menuList: menuProps[],
  curKey: string,
  menuClickCallback: (T: string, F: string) => void,
}
type DipSidebarProps = Partial<DipSidebarInfo>

const DipRef = React.createRef();
const SideBar = React.forwardRef((props: DipSidebarProps, ref) => {
  const prefix = filterDot(sideBarPrefix)
  const { menuList, curKey, menuClickCallback } = props
  const [menuKey, setMenuKey] = useState(null)
  const [isOpen, setIsOpen] = useState(true)
  return <div className={`${prefix} ${isOpen ? '' : 'close'}`}>
    <div className={`sidebar-content-wrap ${isOpen ? '' : 'hidden'}`}>
      <div className="sidebar-content">
        {
          menuList.map((item: menuProps, index) => (
            <div key={index}>
              <div className="sidebar-ul cell">
                <span className="icon">{item.icon}</span>{item.name}
              </div>
              {
                item.children && item.children.map((it, ind) => (
                  <div
                    className={`sidebar-ul-li cell ${(menuKey ? it.key == menuKey : curKey ? it.key == curKey : (index == 0 && ind == 0)) ? 'cur' : ''}`}
                    key={ind}
                    onClick={() => {
                      setMenuKey(it.key)
                      menuClickCallback && menuClickCallback(it.key, it.path)
                    }}
                  >{it.name}</div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
    <div className={`icon-side`} ref={DipRef} onClick={() => {
      setIsOpen(!isOpen)
    }}><img src={closeIcon} /></div>
  </div>
})
// SideBar.changeIsOpen = () => {
//   DipRef.current.click()
// }
export default SideBar