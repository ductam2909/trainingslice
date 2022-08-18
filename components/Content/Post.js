import React from 'react'

export default function Post () {
  return (
    <>
      <div className='post'>
        <div className='post__detail'>
          <img src='/assets/img/ninja8.png' alt='' className='post__detail-img' />
          <div className='post__detail-text'>
            <p className='post__detail-textupper'>are you a</p>
            <p className='post__detail-textlower'>minja? </p>
          </div>
        </div>
        <div className='post__list'>
          <div className='post__item'>
            <p className='post__item-title'>ya, an artist</p>
            <p className='post__item-description'>you’re an artist who has created masterpieces for NFT collections, VR / ar experiences, or other web 3.0 projects</p>
            <button className='post__item-btn'>apply now</button>
          </div>
          <img src='/assets/img/line2.jpg' alt='' className='post__list_img-line' />
          <div className='post__item'>
            <p className='post__item-title'>Developers</p>
            <p className='post__item-description'>you’ve gone down the 3.0 coding rabbit hole and wondering why, but it’s too late to turn back and enjoy the pain</p>
            <button className='post__item-btn'>sign me up</button>
          </div>
          <img src='/assets/img/line2.jpg' alt='' className='post__list_img-line' />
          <div className='post__item'>
            <p className='post__item-title'>yesirr, cm/mod</p>
            <p className='post__item-description'>you dig talking to crazy people hidden behind pfps and weird names and know just how to keep these sheeples in line</p>
            <button className='post__item-btn'>join now</button>
          </div>
        </div>
      </div>
    </>
  )
}
