import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Outlet,Link } from 'react-router-dom'

export default function News() {
      const n = '冰冰';
      const navigate = useNavigate();
      const handleClick = () =>{
        navigate('/home/news/detail?id=20',{state:{name:'快乐似神仙'}})
      }
      return (
        <div>
          <ul>
            <li>
              <Link to={`/home/news/detail?id=10&name=${n}`}>一号</Link>
            </li>
            <li>
              <Link to={{ pathname: '/home/news/detail?id=20' }} state={{name:'给我一个div'}}>二号</Link>
              <button onClick={handleClick}>点击测试</button>
            </li>
            <li>
              <Link to="/home/news/detail?id=30">三号</Link>
            </li>
            <li>
              <Link to="/home/news/detail?id=40">四号</Link>
            </li>
          </ul>
          <hr></hr>
          <Outlet />
        </div>
      )
}
