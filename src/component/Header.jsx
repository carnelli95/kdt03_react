import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
   <header className='bg-yellow-600 text-white shadow-md'>
        <nav className='container h-16 mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold text-blue-50'>KDT03</div>
            <ul className='flex space-x-4'>
                <li >
                  <Link to="/"
                      className='hover:font-bold hover:bg-blue-50 p-2 rounded-sm hover:text-blue-200'>
                      홈
                  </Link>
                </li>
                <li >
                  <Link to="/Lotto"
                      className='hover:font-bold hover:bg-blue-50 p-2 rounded-sm hover:text-blue-200'>
                      로또
                  </Link>
                </li>
                <li>
                  <Link to="/BoxOffice"
                      className='hover:font-bold hover:bg-blue-50 p-2 rounded-sm hover:text-blue-200'>
                      박스오피스
                  </Link>
                </li>
                 <li>
                  <Link to="/Gallery"
                      className='hover:font-bold hover:bg-blue-50 p-2 rounded-sm hover:text-blue-200'>
                      관광사진
                  </Link>
                </li>
                 <li>
                  <Link to="/Festival"
                      className='hover:font-bold hover:bg-blue-50 p-2 rounded-sm hover:text-blue-200'>
                      부산축제
                  </Link>
                </li>
                 <li>
                  <Link to="/ChargerInfo"
                      className='hover:font-bold hover:bg-blue-50 p-2 rounded-sm hover:text-blue-200'>
                      전기자동차
                  </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
