import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Slide () {
  const [count, setCount] = useState(0)
  const changetextnext = () => {
    setCount(count + 1)
    if (count === 2) setCount(0)
  }
  const changetextpre = () => {
    setCount(count - 1)
    if (count === 0) setCount(2)
  }
  const Next = (props) => {
    return (
      <button
        className='btnnext'
        onClick={() => {
          props.onClick()
          changetextnext()
        }}
      >
        <img src='/assets/img/btn-next.jpg' alt='' />
      </button>
    )
  }
  const Prev = (props) => {
    return (
      <button
        className='btnpre'
        onClick={() => {
          props.onClick()
          changetextpre()
        }}
      >
        <img src='/assets/img/btn-pre.jpg' alt='' />
      </button>
    )
  }
  const dataArtist = [
    {
      id: '1',
      imgItemLeft: '/assets/img/content4a1.png',
      imgItemRight1: '/assets/img/art2.png',
      imgItemRight2: '/assets/img/art3.png',
      imgUser: '/assets/img/Thumb.png',
      nameUser: 'Mike Page'
    },
    {
      id: '2',
      imgItemLeft: '/assets/img/art4.png',
      imgItemRight1: '/assets/img/art5.png',
      imgItemRight2: '/assets/img/art7.png',
      imgUser: '/assets/img/Thumb2.png',
      nameUser: 'Jane Foster'
    },
    {
      id: '3',
      imgItemLeft: '/assets/img/art8.png',
      imgItemRight1: '/assets/img/art9.png',
      imgItemRight2: '/assets/img/art10.png',
      imgUser: '/assets/img/Thumb3.png',
      nameUser: 'Brendon Fraser'
    }
  ]
  const dataDeveloper = [
    {
      id: '1',
      imgDeveloper: '/assets/img/img1.png',
      detailDeveloper: 'ethel holmes / nodejs, java, reactjs'
    },
    {
      id: '2',
      imgDeveloper: '/assets/img/img2.png',
      detailDeveloper: 'darren shaw / reactjs, mongodb'
    },
    {
      id: '3',
      imgDeveloper: '/assets/img/img3.png',
      detailDeveloper: 'andrew toms / metaplex, candy machine, rea...'
    }
  ]

  const dataManager = [
    {
      id: '1',
      imgManager: '/assets/img/img4.png',
      detailManager: 'andrew / community manager'
    },
    {
      id: '2',
      imgManager: '/assets/img/img5.png',
      detailManager: 'rock captain / mod'
    },
    {
      id: '3',
      imgManager: '/assets/img/img6.png',
      detailManager: 'hank42 / community manager, mod'
    }
  ]
  const descriptionlistartist = ['i have been an illustrator for over 15 years, but only recently been designing NFT’s. ', 'i have been an illustrator for over 15 years, but only recently been designing NFT’s. previously design manager at apple but now i am designing for th...', 'i have been an illustrator for over 15 years, but only recently been designing NFT’s. ']
  const descriptiondevelop = ['my skills range from developing more simple user interfaces to full scale back-end solutions for world renowned clients globally. I have worked for...', 'My Skills website is the national directory of vocational education and training (VET) organisations and courses.', 'Explore an industry you are interested in, or browse through them all to see which one might suit you.']
  const descriptionmanager = ['when it comes to keeping a community in order I have the perfect skills. i have worked with many top projects and no how to handle both hype and normal p...', 'you take the steps to setup a project with all your requirements', 'you interview them and invite them into your ranks for world demonation']
  const listartists = dataArtist.map((item) => (
    <div key={item.id}>
      <div className='slide__artists__iteam'>
        <div className='slide__artists__iteam-left'>
          <img src={item.imgItemLeft} alt='' />
        </div>
        <div className='slide__artists__iteam-right'>
          <img src={item.imgItemRight1} alt='' />
          <img src={item.imgItemRight2} alt='' />
        </div>
      </div>
      <div className='user'>
        <img src={item.imgUser} alt='' />
        <p>{item.nameUser}</p>
      </div>
    </div>
  ))

  const listdeveloper = dataDeveloper.map((item) => (
    <div key={item.id}>
      <div className='slide__develop__iteam'>
        <img className='develop__iteam_img' src={item.imgDeveloper} alt='' />
        <p className='develop__iteam_detail'>{item.detailDeveloper}</p>
      </div>
    </div>
  ))

  const listmanager = dataManager.map((item) => (
    <div key={item.id}>
      <div className='slide__develop__iteam'>
        <img className='develop__iteam_img' src={item.imgManager} alt='' />
        <p className='develop__iteam_detail'>{item.detailManager}</p>
      </div>
    </div>
  ))

  return (
    <>
      <div className='slide__artists'>
        <p className='text_description-artists'>{descriptionlistartist[count]}</p>
        <p className='p-feature p-feature__text'>Featured developers</p>
        <Slider
          nextArrow={<Next type='next' />}
          prevArrow={<Prev type='prev' />}
          dots
          slidesToShow={1}
          slidesToScroll={1}
          variableWidth
        >
          {listartists}
        </Slider>
      </div>
      <div className='slide__develop'>
        <p className='text_description-develop'>{descriptiondevelop[count]}</p>
        <p className='p-feature'>Featured developers</p>
        <Slider
          nextArrow={<Next type='next' />}
          prevArrow={<Prev type='prev' />}
          dots
          slidesToShow={1}
          slidesToScroll={1}
          variableWidth
        >
          {listdeveloper}
        </Slider>
      </div>

      <div className='slide__manager'>
        <p className='text_description-manager'>{descriptionmanager[count]}</p>
        <p className='p-feature'>featured community managers and mods</p>
        <Slider
          nextArrow={<Next type='next' />}
          prevArrow={<Prev type='prev' />}
          dots
          slidesToShow={1}
          slidesToScroll={1}
          variableWidth
        >
          {listmanager}
        </Slider>
      </div>
    </>
  )
}
