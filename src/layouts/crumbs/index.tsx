import React from "react";
import PageRoutes from '@/routes/routes'
import './index.styl';
import { crumbsPrefix } from '@/env/config.styl';
import { filterDot, getRouteList } from '@/utils/utils'

const Crumbs = () => {
  const prefix = filterDot(crumbsPrefix)
  const routeList = getRouteList(PageRoutes)
  let curRoute = routeList.filter(item => item.path === location.pathname)
  return <div className={prefix}>
    <span className="md">{curRoute[0]?.name}</span>
  </div>
}
export default Crumbs