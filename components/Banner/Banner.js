import React from 'react'

export default function Banner () {
  const data = [
    {
      id: '1',
      title: 'Artists',
      description: 'Proven and fully screened Web3 artists; from NFT artists to  virtual and augmented reality designers.',
      textBtn: 'search artists'
    },
    {
      id: '2',
      title: 'Developers',
      description: 'Seasoned software engineers, minting coders, and architects with expertise in the Web3 industry.',
      textBtn: 'find a developer'
    },
    {
      id: '3',
      title: 'CM’s & mods',
      description: 'we can agree that Managing a community sucks! Find the best community managers and Discord mods in the industry.',
      textBtn: 'get community help'
    }
  ]

  const listbanner = data.map((item, index) => (
    <div className='category' key={item.id}>
      <div className='category__detail'>
        <h2 className='category__title'>{item.title}</h2>
        <p className='category__description'>{item.description}</p>
        <button className='category__button' type='button'>{item.textBtn}</button>
      </div>
      {data.length !== index + 1 && (
        <img src='assets/img/line1.jpg' className='category__img-line' alt='' />
      )}
    </div>
  ))
  return (
    <div>
      <div className='banner'>
        <div className='banner__text'>
          <h1 className='banner__fully'>Fully doxxed &amp;</h1>
          <h2 className='banner__kicka'>kicka$$</h2>
          <h3 className='banner__ninja'>NINJAS OF THE METAVERSE</h3>
        </div>
        <div><img src='/assets/img/ninja.jpg' alt='' /></div>
      </div>
      <div><p className='banner-artist'>artist <span className='banner-moondog'>moon dog</span></p></div>
      <div className='category'>
        {listbanner}
      </div>
    </div>
  )
}
