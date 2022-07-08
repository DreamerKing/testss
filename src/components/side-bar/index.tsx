import React from "react";
import {
  AppstoreOutlined, MailOutlined, SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

import "./index.styl";
import { sideBarPrefix } from "@/env/config.styl";
import { filterDot } from "@/utils/utils";

const SideBar: React.FC = () => {
  const prefix = filterDot(sideBarPrefix);
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const items: MenuProps["items"] = [
    getItem("工作台", "sub1", <MailOutlined />),

    getItem("政策管理", "sub2", <AppstoreOutlined />, [
      getItem("政策管理", "5"),
      getItem("上架审批", "6"),
    ]),

    getItem("用户管理", "sub4", <SettingOutlined />, [
      getItem("政府端", "9", null, [
        getItem("人员管理", "10"),
        getItem("角色管理", "11"),
        getItem("菜单管理", "12")
      ]),
    ]),
  ];
  return (
    <div className={prefix}>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};
export default SideBar;
