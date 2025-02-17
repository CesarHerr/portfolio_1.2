import '../styles/language.css'
import { IoLogoJavascript } from 'react-icons/io5'
import { DiRuby } from 'react-icons/di'
import { TbHtml } from 'react-icons/tb'
import { SiCss3 } from 'react-icons/si'

function Language() {
  return (
    <>
      <div className='slider'>
        <div className='slide-track'>
          <div className='slide'>
            <IoLogoJavascript />
            <p>JavaScript</p>
          </div>
          <div className='slide'>
            <DiRuby />
            <p>Ruby</p>
          </div>
          <div className='slide'>
            <TbHtml />
            <p>HTML</p>
          </div>
          <div className='slide'>
            <SiCss3 />
            <p>CSS</p>
          </div>
          <div className='slide'>
            <IoLogoJavascript />
            <p>JavaScript</p>
          </div>
          <div className='slide'>
            <DiRuby />
            <p>Ruby</p>
          </div>
          <div className='slide'>
            <TbHtml />
            <p>HTML</p>
          </div>
          <div className='slide'>
            <SiCss3 />
            <p>CSS</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Language
