import React from 'react'

import { FaLinkedinIn } from 'react-icons/fa'
import { SiMessenger } from 'react-icons/si'
import { BsTwitter } from 'react-icons/bs'
import { SiTwoo } from 'react-icons/si'


function Footer() {
  return (
    <div className='flex flex-row justify-between m-8'>
        <h6 className='font-semibold'>Copyright © 2023 Mercy Faith Nyambura Kariuki . All Rights Reseved.</h6>
        <div className='flex flex-row justify-between gap-5'>
            <FaLinkedinIn/>
            <SiMessenger/>
            <BsTwitter/>
            <SiTwoo/>
        </div>
    </div>
  )
}

export default Footer