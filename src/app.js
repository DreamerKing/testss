import React, { Component } from 'react'
import loadable from '@loadable/component'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from 'react-router-dom'
import Auth from '@/utils/authorized'
import Framework from '@/layouts/framework'
const Guide = loadable(() => import('./pages/guide'))

export default class App extends Component {
  render() {
    return (
      <Auth>
        <Framework>
          <Router>
            <Routes>
              <Route path="/" element={<Guide />} />
              <Route path="*" element={<div className="FBV FBAC FBJC" style={{ fontSize: 100 }}>404</div>} />
            </Routes>
          </Router>
        </Framework>
      </Auth>
    )
  }
}
