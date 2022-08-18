import React from 'react'

export default function Footer () {
  return (
    <div>
      <div className='footer'>
        <img src='/assets/img/logo.png' alt='' />
        <div className='footer__content'>
          <div><p className='footer__item-left'>The number 1 platform for finding fully doxxed and experienced web 3.0 designers, developers, community managers and mods</p></div>
          <div className='footer__item'>
            <p className='footer__item-title'>here to hire</p>
            <p className='footer__item-text'>hiring an artist hiring a developer hiring a CM / mod</p>
          </div>
          <div className='footer__item'>
            <p className='footer__item-title'>here to apply</p>
            <p className='footer__item-text'>apply as an artist apply as a developer apply as a Cm / mod</p>
          </div>
          <div className='footer__item'>
            <p className='footer__item-title'>other sh!t</p>
            <p className='footer__item-text'>about</p>
            <p className='footer__item-text'>faqs</p>
            <p className='footer__item-text'>contact</p>
          </div>
          <div className='footer__item footer__iteam-flow'>
            <p className='footer__item-title'>follow us</p>
            <div className='flow'>
              <img src='/assets/img/iconsend.png' alt='' className='flow__icon' />
              <img src='/assets/img/icontiw.png' alt='' className='flow__icon' />
              <img src='/assets/img/icon-M.png' alt='' className='flow__icon' />
              <img src='/assets/img/icon-youtube.png' alt='' className='flow__icon' />
            </div>
          </div>
        </div>
        <div className='copyright'><p className='copyright__text'>© 2022. Terms of service. privacy policy. cookie policy.</p></div>
      </div>
    </div>
  )
}
