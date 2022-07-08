import React, { Component } from 'react'
import Auth from '@/utils/authorized'
import Framework from '@/layouts/framework'
import PageRoutes from '@/routes/routes'
import { getRouteList } from '@/utils/utils'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
} from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <Auth>
        <Framework>
          <Router>
            <Routes>
              {getRouteList(PageRoutes).map((item, index) => (
                <Route key={index} path={item.path} element={item.component} />
              ))}
              <Route path="*" element={<div className="FBV FBAC FBJC" style={{ fontSize: 100 }}>404</div>} />
            </Routes>
          </Router>
        </Framework>
      </Auth>
    )
  }
}
