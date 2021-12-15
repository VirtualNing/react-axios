import React from 'react'
import {useSearchParams,useLocation} from 'react-router-dom'

export default function Details() {
  //拿到搜索参数
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const name = searchParams.get('name');
    const res = useLocation().state;
    return (
      <ul>
        <li>{id}{res != null ? res.name : name}</li>
      </ul>
    )
}
