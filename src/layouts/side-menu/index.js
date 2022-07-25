import { Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setMenuKey } from '@/slices/system';
import menus from '@/consts/menus';

export default function SideMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onClick = ({ key, keyPath }) => {
    navigate(key);
    dispatch(setMenuKey({ key, keyPath }));
  }

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['permission']}
      defaultOpenKeys={['permission', 'resource']}
      mode="inline"
      items={menus}
    />
  )
}