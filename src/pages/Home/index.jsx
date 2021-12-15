import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news" children="News" />
          </li>
          <li>
            <MyNavLink to="/home/message" children="Message" />
          </li>
        </ul>
          <Outlet />
      </div>
    )
  }
}
