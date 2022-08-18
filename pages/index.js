import Banner from '../components/Banner/Banner'
import Post from '../components/Content/Post'
import Procedure from '../components/Content/Procedure'
import Process from '../components/Content/Process'
import Slide from '../components/Content/Slide'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export default function Home () {
  return (
    <>
      <div className='container'>
        <Header />
        <div className='content'>
          <Banner />
          <Process />
          <Slide />
          <Procedure />
        </div>
      </div>
      <Post />
      <Footer />
    </>

  )
}
