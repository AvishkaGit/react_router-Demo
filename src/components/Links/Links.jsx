import React from 'react'
import Menuitem from '../MenuItem/Menuitem'


function Links() {
  return (
    <div className='links'>
        <Menuitem linktext="Home" linkurl="/" />      
        <Menuitem linktext="Blog" linkurl="/blog" />      
        <Menuitem linktext="Abouth us" linkurl="/abouth" />      
        <Menuitem linktext="Contact us" linkurl="/contact" />      
    </div>
  )
}

export default Links