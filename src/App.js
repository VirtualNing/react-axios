import React, { Component } from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from './pages/Home'
import About from  './pages/About'
import Extra from './pages/Extra'
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';
import News from './pages/Home/News';
import Message from './pages/Home/Message';
import Detail from './pages/Home/Message/Detail';
import Details from './pages/Home/News/Detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
                {/* <NavLink className='list-group-item' to='/about'>About</NavLink>
                <NavLink className='list-group-item' to='/home'>Home</NavLink> */}
                <MyNavLink to="/about" children="About" />
                <MyNavLink to="/home" children="Home" />
                <MyNavLink to="/extra/a/b" children="Extra" />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Routes>
                  <Route path="/home" element={<Home />} >
                    <Route path="/home/news" element={<News />}>
                      <Route path="/home/news/detail" element={<Details />} />
                    </Route>
                    <Route path="/home/message" element={<Message />}>
                      <Route path="/home/message/detail/:id" element={<Detail />} />
                    </Route>
                  </Route>
                  <Route path="/about" element={<About />} />
                  <Route path="/extra/a/b" element={<Extra />} />
                  <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
