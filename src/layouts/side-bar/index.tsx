import React, { useState } from "react";
import closeIcon from "./images/side-close.svg";
import "./index.styl";
import { sideBarPrefix } from "@/env/config.styl";
import { filterDot } from "@/utils/utils";
import { CaretUpOutlined } from "@ant-design/icons";
import lodash from "lodash";

interface menuProps {
  name: string;
  key: string;
  icon: string;
  path?: string;
  children: menuProps[];
}
interface DipSidebarInfo {
  mainMenuVisible: boolean;
  toggleMainMenu: () => void;
  menuList: menuProps[];
  curKey: string;
  menuClickCallback: (T: string, F: string) => void;
}
type DipSidebarProps = Partial<DipSidebarInfo>;

const DipRef = React.createRef();
const SideBar = React.forwardRef((props: DipSidebarProps, ref) => {
  const prefix = filterDot(sideBarPrefix);
  const {
    menuList,
    curKey,
    menuClickCallback,
    mainMenuVisible,
    toggleMainMenu,
  } = props;
  const [menuKey, setMenuKey] = useState(null);
  // const [isOpen, setIsOpen] = useState(true);
  const [menu, setMenu] = useState(menuList);
  const childRender = (item, index, level) => {
    return (
      <>
        {item.children &&
          item.children.map((it, ind) => (
            <React.Fragment key={ind}>
              <div
                className={`sidebar-ul-li ${it.isExpend ? "" : "off"} cell ${
                  (
                    menuKey
                      ? it.key == menuKey
                      : curKey
                        ? it.key == curKey
                        : index == 0 && ind == 0
                  )
                    ? "cur"
                    : ""
                }`}
                key={ind}
                style={{ paddingLeft: 23 * (level + 1) }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (it.children) {
                    it["isExpend"] =
                      it["isExpend"] === undefined ? true : !it["isExpend"];
                    const _menu = lodash.cloneDeep(menu);
                    setMenu(_menu);
                  } else {
                    setMenuKey(it.key);
                    menuClickCallback &&
                      menuClickCallback(it.key, it.path || "");
                  }
                }}
              >
                <div className={`cell pl0`}>
                  <span>{it.name}</span>
                  {it.children && <CaretUpOutlined className="tag" />}
                </div>
                {it.children && (
                  <div
                    className="sidebar-ul-li-ul"
                    style={{ marginLeft: -23 * (level + 1) }}
                  >
                    {childRender(it, ind, level + 1)}
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
      </>
    );
  };
  return (
    <div className={`${prefix} ${mainMenuVisible ? "" : "close"}`}>
      <div
        className={`sidebar-content-wrap ${mainMenuVisible ? "" : "hidden"}`}
      >
        <div className="sidebar-content">
          {menu.map((item: menuProps, index) => (
            <div key={index}>
              <div className="sidebar-ul cell">
                <span className="icon">{item.icon}</span>
                {item.name}
              </div>
              {childRender(item, index, 1)}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`icon-side`}
        ref={DipRef}
        onClick={() => {
          toggleMainMenu();
        }}
      >
        <img src={closeIcon} />
      </div>
    </div>
  );
});

export default SideBar;
