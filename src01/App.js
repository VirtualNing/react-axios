import React ,{ Component } from 'react';
import axios from 'axios';

export default class App extends Component{
  getStudentData = () =>{
    axios({
      url:'http://localhost:3000/api1/students',
      method:'get'
    })
    .then(respanse =>{
      console.log(respanse.data);
    })
  }

  getCarData = () =>{
    axios({
      url:'http://localhost:3000/api2/cars',
      method:'get'
    })
    .then(respanse =>{
      console.log(respanse.data);
    })
  }
  render(){
    return (
      <div>
        <button onClick={this.getStudentData}>点击一下</button>
        <button onClick={this.getCarData}>汽车</button>
      </div>
    )
  }
}
