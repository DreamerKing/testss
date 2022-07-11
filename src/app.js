import React, { Component } from 'react'
import loadable from '@loadable/component'
import Auth from '@/utils/authorized'
import Framework from '@/layouts/framework'
import PageRoutes from '@/routes/routes'
import { getRouteList } from '@/utils/utils'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const Login = loadable(() => import('./pages/login'));

export default class App extends Component {
  render() {
    return (
      <Auth>
        <Router>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route element={<Framework />}>
              {getRouteList(PageRoutes).map((item, index) => (
                <Route key={index} path={item.path} element={item.component} />
              ))}
              <Route path="*" element={<div className="FBV FBAC FBJC" style={{ fontSize: 100 }}>404</div>} />
            </Route>
          </Routes>
        </Router>
      </Auth>
    )
  }
}
