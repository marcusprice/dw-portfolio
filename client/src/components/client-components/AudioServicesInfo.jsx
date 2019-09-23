import React from 'react'
import { MarketingContainer, MarketingInfoContainer, MarketingTitle, MarketingQuote, Paragraph, MarketingImg } from './Atoms.jsx'
import audioEquipment from '../../img/audio-equipment.jpg'

const AudioServicesInfo = (props) => {
  return(
    <MarketingContainer>
      <MarketingImg img={audioEquipment} />

      <MarketingInfoContainer>
        <MarketingTitle>AUDIO SERVICES</MarketingTitle>
        <MarketingQuote>Morbi diam velit, aliquet blandit tortor.</MarketingQuote>
        <Paragraph>
          Vestibulum nec volutpat massa, quis euismod sapien. In gravida lorem quis ex pellentesque accumsan id non dolor. Quisque mattis ut ligula et viverra. In euismod elit pharetra mattis dignissim. Nam laoreet, magna sit amet cursus sagittis, massa urna sagittis mauris, eu suscipit nibh est vel libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras lorem urna, pretium a egestas vitae, blandit ut tellus. Etiam lacinia cursus mauris,  non porttitor magna. Fusce ut euismod metus.
        </Paragraph>
      </MarketingInfoContainer>

    </MarketingContainer>
  )
}

export default AudioServicesInfo
