import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useContext } from 'react'

function Header() {
  const {userDetail, setUserDetail}=useContext(UserDetailContext);

  return (
    <div className='p-3 px-5 flex items-center fixed w-full bg-black justify-between shadow-md'>
      <a href={'/'}>
        <div className='flex gap-3 items-center'>
            <Image src={'/logo.svg'} width={30} height={30}/>
            <h2 className='font-bold text-xl text-white'>QuickCut Studio</h2>
        </div>
      </a>
        <div className='flex gap-3 items-center'>
            <Button>Dashboard</Button>
            <UserButton/>
        </div>
    </div>
  )
}

export default Header