import React from 'react'
import { MarketingContainer, SectionInfoContainer, SectionTitle, SectionQuote, SectionParagraph, MarketingImgContainer, MarketingImg } from './Atoms.jsx'
import audioEquipment from '../img/audio-equipment.jpg'

const AudioServicesInfo = (props) => {
  return(
    <MarketingContainer>
      <SectionInfoContainer>
        <SectionTitle>AUDIO SERVICES</SectionTitle>
        <SectionQuote>Morbi diam velit, aliquet blandit tortor.</SectionQuote>
        <SectionParagraph>
          Vestibulum nec volutpat massa, quis euismod sapien. In gravida lorem quis ex pellentesque accumsan id non dolor. Quisque mattis ut ligula et viverra. In euismod elit pharetra mattis dignissim. Nam laoreet, magna sit amet cursus sagittis, massa urna sagittis mauris, eu suscipit nibh est vel libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras lorem urna, pretium a egestas vitae, blandit ut tellus. Etiam lacinia cursus mauris,  non porttitor magna. Fusce ut euismod metus.
        </SectionParagraph>
      </SectionInfoContainer>
      <MarketingImgContainer img={audioEquipment}>
      </MarketingImgContainer>
    </MarketingContainer>
  )
}

export default AudioServicesInfo
