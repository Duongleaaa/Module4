import './HeaderHw7'
import './FooterHw7'
import './MainHw7'
import './MenuHw7'
import HeaderHw7 from './HeaderHw7'
import MenuHw7 from './MenuHw7'
import FooterHw7 from './FooterHw7'
import MainHw7 from './MainHw7'
import '../hw7.css'
export default function Hw7() {
  return (
    <>
    <h2>bài 7</h2>
    <div className='cpnContainer'>
      <div className='header'>
    <HeaderHw7></HeaderHw7>

      </div>
      <div className='menu'>
    <MenuHw7></MenuHw7>
      </div>
      <div className='main'>

    <MainHw7></MainHw7>
      </div>
      <div className='footer'>

    <FooterHw7></FooterHw7>
      </div>
    </div>
    </>
  )
}
