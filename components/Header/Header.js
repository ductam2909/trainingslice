import React, { useState } from 'react'

export default function Header () {
  const [isActive, setIsActive] = useState(false)

  const handleClick = event => {
    setIsActive(current => !current)
  }
  return (
    <div className='header'>
      <div className='toggle' onClick={handleClick}>
        <img src='/assets/img/iconuser.png' alt='' className='user' />
        <img src='/assets/img/btnmenu2.jpg' alt='' />
      </div>
      <img src='/assets/img/logo.png' alt='' className='logo' />
      <nav className={isActive ? 'show-example' : ''}>
        <ul className='mainmenu' onClick={handleClick}>
          <li>Artists</li>
          <li>Developers</li>
          <li>cms & mods</li>
          <li>about us</li>
          <li><button className='singin'>Sing in</button></li>
          <li><button className='singout'>Sing Out</button></li>
          <li className='login'>Login</li>
        </ul>
      </nav>
    </div>
  )
}
