'use client'
import React from 'react'
import Text from '../../app/doctor-login/components/Text'

function Nav() {
  return (
     <div className='flex items-center h-[72px] justify-between py-[20px] px-[2vw] bg-[#FFFFFF] shadow-lg fixed left-0 w-[100vw]'>
      <Text fonts={'Pretendard Variable'} fontWeight='700' TextSize='1.5rem' TextChildrem='AIOrtho' color='#0054A6' Line_height='24px'
      />
       <a></a>
    </div>
  )
}

export default Nav
