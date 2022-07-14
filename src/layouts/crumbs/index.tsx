import React from "react";
import { useNavigate, useLocation } from 'react-router-dom'
import PageRoutes from '@/routes/routes'
import { filterDot, getRouteList } from '@/utils/utils'
import { RightOutlined, MenuFoldOutlined, MenuUnfoldOutlined  } from '@ant-design/icons';
import './index.styl';
import { crumbsPrefix } from '@/env/config.styl';

const Crumbs = (props) => {
  const {
    mainMenuVisible,
    toggleMainMenu
  } = props
  const navigate = useNavigate()
  const location = useLocation()
  const prefix = filterDot(crumbsPrefix)
  const routeList = getRouteList(PageRoutes)
  const routes = []
  const levels = location.pathname.slice(1, location.pathname.length).split('/')
  levels.map((item, index) => {
    routes.push({ path: `${index !== 0 ? routes[index - 1].path : ''}/${item}` })
    const curRoute = routeList.filter(item => routes[index]['path'] === item.path)
    routes[index]['name'] = curRoute[0]?.name || ''
  })
  const iconStyle = {
    fontSize: '20px'
  }
  return <div className={prefix}>
    <div onClick={toggleMainMenu}>
      { mainMenuVisible ?  <MenuFoldOutlined style={iconStyle} />: <MenuUnfoldOutlined style={iconStyle} /> }
    </div>
    {routes.map((item, ind) => (
      <React.Fragment key={ind}>
        <span className="md">{ind !== 0 && <RightOutlined />}</span>
        <span className={`md ${ind !== routes.length - 1 ? 'pointer' : ''}`} onClick={() => {
          if (ind !== routes.length - 1) {
            navigate(item.path)
          }
        }}>{item.name}</span>
      </React.Fragment>
    ))}
  </div>
}
export default Crumbs