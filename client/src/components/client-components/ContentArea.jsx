import React, { useEffect, useRef } from 'react'
import { ContentAreaContainer } from './Atoms.jsx'
import LandingMenu from './LandingMenu.jsx'
import Music from './Music.jsx'
import AudioServices from './AudioServices.jsx'
import About from './About.jsx'
import Support from './Support.jsx'
import Shows from './Shows.jsx'
import Contact from './Contact.jsx'

const ContentArea = (props) => {
  //to handle scroll-to-top
  const contentAreaRef = useRef(null)
  useEffect(() => {
    contentAreaRef.current.scrollTo(0, 0)
  }, [props.display])
  //determines what view/page to show
  const handleDisplay = () => {
    let output

    switch(props.display) {
      case 'landing menu':
        output = <LandingMenu changeDisplay={props.changeDisplay} />
        break
      case 'music':
        output = <Music />
        break
      case 'audio services':
        output = <AudioServices />
        break
      case 'about':
        output = <About />
        break
      case 'support':
        output = <Support />
        break
      case 'shows':
        output = <Shows />
        break
      case 'contact':
        output = <Contact />
        break
      default:
        break
    }

    return output
  }



  return(
    <ContentAreaContainer ref={contentAreaRef} onClick={() => {props.triggerNavMenu(false)}} navMenuExpanded={props.navMenuExpanded} >
      {handleDisplay()}
    </ContentAreaContainer>
  )
}

export default ContentArea
