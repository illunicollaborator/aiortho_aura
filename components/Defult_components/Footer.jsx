'use client'

import React from 'react'

function Footer() {
  return (
    <div className="bg-[#f3f6fb]  w-[100vw] flex items-start lg:items-center justify-around flex-wrap lg:flex-nowrap pt-8 pb-8  lg:pb-14 gap-0">
      <div className=" flex items-start flex-col space-y-2">
           <h1 className='text-sm font-semibold text-[color:var(--aiortho-gray-500)] pb-0.5'>고객 문의센터</h1>
             <p className='text-xs font-normal text-[color:var(--aiortho-gray-500)]'>전화번호: 02-000-000</p>
            <p className='text-xs font-normal text-[color:var(--aiortho-gray-500)]'>운영시간: 평일 08:00 - 19:00 (주말, 공휴일 휴무)</p>
         </div>

          <div className="flex items-start flex-col space-y-2">
          <h1 className='text-sm font-semibold text-[color:var(--aiortho-gray-500)] pb-0.5'>서서비스 기본약관</h1>
          <h1 className='text-xs font-normal text-[color:var(--aiortho-gray-500)]'>서비스 이용약관</h1>
          <h1 className='text-xs font-normal text-[color:var(--aiortho-gray-500)]'>개인정보 처리방침</h1>
          </div>
          <div className='flex items-start flex-col space-y-2'>
            <p className='text-sm font-semibold text-[color:var(--aiortho-gray-500)] pb-0.5'>Copyright © AIOrtho. All Rights Reserved.</p>
            <p className='text-xs font-normal text-[color:var(--aiortho-gray-500)]'>사업자등록번호 120-00-00000 | 대표 홍길동</p>
            <p className='text-xs font-normal text-[color:var(--aiortho-gray-500)]'>서울시 서초구 효령로 30</p>
       </div>
       <div></div>
       <div></div>
    </div>
  )
}

export default Footer
