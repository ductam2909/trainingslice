import React from 'react'

export default function Procedure () {
  return (
    <>
      <div className='reason'>
        <div className='reason__item'>
          <p className='reason__title'>because web 3.0 is</p>
          <p className='reason__title'>shady</p>
          <p className='reason__title'>AF!</p>
        </div>
        <div className='reason__img'>
          <img src='/assets/img/ninja5.png' alt='' className='reason__img-left' />
          <img src='/assets/img/ninja6.png' alt='' className='reason__img-right' />
        </div>
        <p className='reason__text'>we hear story after story of resources hiding behind pfp’s and usernames, not showing their faces on video calls, providing average deliverables, and even worse.. scams, fraud, perverts and more! we will shake out baddies before you even get to them.</p>
      </div>
      <div className='procedure'>
        <p className='procedure__text-question'>HOW WE SOLVE THIS...</p>
        <div className='procedure__text'>
          <div className='procedure__review'>
            <p className='procedure__number'>1</p>
            <p className='procedure__title'>ninja skills review</p>
            <p className='procedure__description'>after a minja has submitted their resume, portfolios and linkedin url, we handpick only the minjas who we think are the most well trained and metaverse ready to proceed to stage 2</p>
          </div>
          <div className='procedure__review procedure__review-center'>
            <p className='procedure__number'>2</p>
            <p className='procedure__title'>hard skills check</p>
            <p className='procedure__description'>all the chosen ones then undergo a screening call (soft skills and language proficiency check), before we do a deep dive into their portfolio and references to make sure they are good enough to be a real life minja</p>
          </div>
          <div className='procedure__review procedure__review-right'>
            <p className='procedure__number'>3</p>
            <p className='procedure__title'>the final reckoning!</p>
            <p className='procedure__description'>once they pass stage 2 we then use the greatest weapon of all, our intuition! we accept only those who we think are most passionate about web 3.0 and the metaverse, with work ethics of a true warrior</p>
          </div>
        </div>
        <>
          <img src='/assets/img/ninja7.png' alt='' className='procedure__img-ninja' />
          <img src='/assets/img/line3.jpg' alt='' className='line3' />
        </>
        <div className='procedure__detail'>
          <p className='procedure__detail-text'>ok, you’ve heard enough and ready to hire some proper kicka$$ experts to build your project</p>
          <button className='procedure__detail-btn'>post a job</button>
        </div>
      </div>
    </>
  )
}
