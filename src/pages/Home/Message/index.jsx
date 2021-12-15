import React, { Component } from 'react'
import { Link,Outlet } from 'react-router-dom'

export default class Message extends Component {
  state = {
    messageArr: [
      {id:'01',title:'message01'},
      {id:'02',title:'message02'},
      {id:'03',title:'message03'}
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.messageArr.map((obj) =>{
              return (
                <li key={obj.id}>
                  <Link to={`/home/message/detail/${obj.id}`}>{obj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        <Outlet />
      </div>
    )
  }
}
