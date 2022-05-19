import React from 'react'
import {
    PhoneIcon,ArrowSmRightIcon
}
 from '@heroicons/react/outline'

 import {
     ChipIcon, SupportIcon
 } from '@heroicons/react/solid'
 import supportImg from '../assets/support.jpg'

export const Support = () => {
  return (
    <div>
        <div>
            <img src={supportImg} alt="/" />
        </div>
        <div>
            <div>
                <h2>Support</h2>
                <h3>Finding the right team</h3>
                <p>Some Int</p>
            </div>
            <div>
                <div>
                    <div>
                        <PhoneIcon className='w-6'/>
                        <h3>Sales</h3>
                        <p>lol some int</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
