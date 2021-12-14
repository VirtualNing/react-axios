import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import './index.css'

export default class List extends Component {
  state = {
    users:[],
    isFirst: true,
    isLoading: false,
    err:''
  } //初始化 state
  componentDidMount(){
    this.token = PubSub.subscribe('api',(msg,data) =>{
      this.setState(data)
    })
  }

  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }
  render() {
    const {users,err,isLoading,isFirst} = this.state;
    return (
      <div className="row">
        {
          isFirst ? <h2>请输入关键字后点击搜索</h2> :
          isLoading ? <h2>loading</h2> :
          err ? <h2 style={{color:'pink'}}>{err}</h2> :
          users.map((obj) =>{
            return (
              <div key={obj.id} className="card">
                <a href={obj.html_url} target="_blank" rel="noreferrer">
                  <img alt=" " src={obj.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className="card-text">{obj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
