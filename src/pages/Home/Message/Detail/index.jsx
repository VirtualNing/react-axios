import React from 'react'
import {useParams} from 'react-router-dom'

export default function Detail() {
    const {id} = useParams();//接收来自路由传递的参数
    const detailData = [
      {id:'01',ID:'javaScript',BlongTo:'Web',synopsis:'这是脚本语言'},
      {id:'02',ID:'Java',BlongTo:'End',synopsis:'这是面对对象语言'},
      {id:'03',ID:'SpringBoot',BlongTo:'End',synopsis:'这是封装的框架'},
    ]
    const p = detailData.find((obj) => {
      return obj.id === id
    })
    const {ID,BlongTo,synopsis} = p;
    return (
      <ul>
        <li>ID:{ID}</li>
        <li>属于:{BlongTo}</li>
        <li>简介:{synopsis}</li>
      </ul>
    )
}
