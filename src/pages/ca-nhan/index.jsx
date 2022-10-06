import React, { useState } from 'react'
import MyCourse from './khoa-hoc'
import Project from './du-an'
import Payment from './lich-su-thanh-toan'
import Coin from './coin'
import {Navigate, useNavigate} from 'react-router-dom'

export default function Profile() {
  const [login,setLogin]=useState(false)
  const navigate = useNavigate()
  return (

    <div className="tab1"  >
      {
        !login && <Navigate to="/"/>
      }
    <Navigate to="/"/>
    <label>
      <p>Họ và tên<span>*</span></p>
      <input type="text" placeholder="Nguyễn Văn A" />
    </label>
    <label>
      <p>Số điện thoại<span>*</span></p>
      <input type="text" placeholder="0949******" />
    </label>
    <label>
      <p>Email<span>*</span></p>
      <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
    </label>
    <label>
      <p>Facebook<span>*</span></p>
      <input type="text" placeholder="Facebook url" />
    </label>
    <label>
      <p>Skype<span>*</span></p>
      <input type="text" placeholder="Skype url" />
    </label>
    <div className="btn main rect">LƯU LẠI</div>
  </div>
  )
}
