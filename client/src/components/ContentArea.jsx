import React from 'react'
import { ContentAreaContainer } from './Atoms.jsx'
import LandingMenu from './LandingMenu.jsx'
import Music from './Music.jsx'
import AudioServices from './AudioServices.jsx'
import About from './About.jsx'
import PerfectScrollbar from 'react-perfect-scrollbar'

const ContentArea = (props) => {

  const handleDisplay = () => {
    let output

    switch(props.display) {
      case 'landing menu':
        output = <LandingMenu changeDisplay={props.changeDisplay} />
        break
      case 'music':
        output = <Music changeDisplay={props.changeDisplay} />
        break
      case 'audio services':
        output = <AudioServices />
        break
      case 'about':
        output = <About />
        break;
      default:
        break;
    }

    if(props.display === 'landing menu') {    //if the landing page is requested, don't include the scrollbar
      return output
    } else {
      return(                                 //if a content page is requested, include the scrollbar
        <PerfectScrollbar>
          {output}
        </PerfectScrollbar>
      )
    }
  }

  return(
    <ContentAreaContainer onClick={() => {props.triggerNavMenu(false)}} navMenuExpanded={props.navMenuExpanded} >
      {handleDisplay()}
    </ContentAreaContainer>
  )
}

export default ContentArea
