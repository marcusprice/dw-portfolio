import React from 'react'
import { MarketingContainer, MarketingInfoContainer, MarketingTitle, MarketingQuote, MarketingImg } from './Atoms.jsx'
import dustin from '../img/dustin.jpg'

const AudioServicesInfo = (props) => {
  return(
    <MarketingContainer>
      <MarketingInfoContainer>
        <MarketingTitle>ABOUT</MarketingTitle>
        <MarketingQuote>Morbi diam velit, aliquet blandit tortor.</MarketingQuote>
      </MarketingInfoContainer>

      <MarketingImg img={dustin} />
    </MarketingContainer>
  )
}

export default AudioServicesInfo
