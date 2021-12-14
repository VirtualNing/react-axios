import React, { Component } from 'react'
import axios from 'axios';
import PubSub from 'pubsub-js'

export default class Search extends Component {
  handleSearch = () =>{
    //获取用户输入
    const {value} = this.keyWordNode;
    // 发送请求前,通知 List 更新状态
    PubSub.publish('api',{isFirst:false,isLoading:true})
    // 发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
      res => {
        PubSub.publish('api',{isLoading:false,users:res.data.items})
      },
      err => {
        PubSub.publish('api',{isLoading:false,err:'请求失败404'})
      }
    )

  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={ c => this.keyWordNode = c} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    )
  }
}
