import React from 'react'

export default function Process () {
  return (
    <div className='process'>
      <div className='process__text'>
        <h2 className='process__find'>FIND YOUR PROJECTS</h2>
        <h3 className='process__chosen'>CHOSEN ONES</h3>
      </div>
      <div className='process__item-top'>
        <img src='/assets/img/ninja1.png' className='process__item-top__img' alt='' />
        <p className='process__item-top__text'>you have no f%$king idea how to find good people in this psychotic web 3.0 space</p>
      </div>
      <div className='process__item-right'>
        <img src='/assets/img/ninja3.png' alt='' className='process__item-right__img' />
        <p className='process__item-right__text'>so you browse pre-qualified and screened ninjas of the metaverse</p>
      </div>
      <div className='process__itemleft'>
        <img src='/assets/img/ninja4.png' alt='' />
        <p className='process__itemleft__text'>you take the steps to setup a project with all your requirements</p>
      </div>
      <i className='fa-solid fa-ellipsis-vertical clssdot' />
      <div className='process__item-bottom'>
        <p className='process__item-bottom__text'>you interview them and invite them into your ranks for world demonation</p>
        <h2 className='process__item-bottom__title'>LFG</h2>
        <img src='/assets/img/ninja2.png' className='process__item-bottom__img' alt='' />
      </div>
    </div>
  )
}
