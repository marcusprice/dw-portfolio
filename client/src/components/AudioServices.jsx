import React from 'react'
import { SectionTitle, SectionSubTitle, SectionInfoContainer, SectionParagraph, ContentSection, SectionImg, SectionUl, SectionLi, Checkmark } from './Atoms.jsx'
import audioEquipment from '../img/audio-equipment.jpeg'
import checkmark from '../assets/icons/checkmark.png'

const AudioServices = (props) => {
  return(
    <ContentSection>
      <SectionTitle>AUDIO SERVICES</SectionTitle>
      <SectionInfoContainer>
        <SectionParagraph>
          Vestibulum nec volutpat massa, quis euismod sapien. In gravida lorem quis ex pellentesque accumsan id non dolor. Quisque mattis ut ligula et viverra. In euismod elit pharetra mattis dignissim. Nam laoreet, magna sit amet cursus sagittis, massa urna sagittis mauris, eu suscipit nibh est vel libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras lorem urna, pretium a egestas vitae, blandit ut tellus. Etiam lacinia cursus mauris,  non porttitor magna. Fusce ut euismod metus. Etiam vel vestibulum mauris, et gravida sapien. Morbi diam velit, aliquet quis velit consequat, aliquet blandit tortor. Sed posuere pulvinar nibh, at fringilla elit faucibus vel. Nam non faucibus diam. Aenean mollis at ex in dignissim. Aenean elit odio, vulputate sed lectus vel, tristique malesuada dolor. Nam vel sapien quis diam aliquam ultrices.
        </SectionParagraph>
        <SectionImg src={audioEquipment} />
      </SectionInfoContainer>
      <SectionSubTitle>Audio services I provide...</SectionSubTitle>
      <SectionUl>
        <SectionLi><Checkmark src={checkmark} alt="checkmark"/>Composition</SectionLi>
        <SectionLi><Checkmark src={checkmark} alt="checkmark"/>Sound Design</SectionLi>
        <SectionLi><Checkmark src={checkmark} alt="checkmark"/>Engineering</SectionLi>
        <SectionLi><Checkmark src={checkmark} alt="checkmark" />Studio</SectionLi>
        <SectionLi><Checkmark src={checkmark} alt="checkmark" />Live</SectionLi>
        <SectionLi><Checkmark src={checkmark} alt="checkmark" />Mixing</SectionLi>
        <SectionLi><Checkmark src={checkmark} alt="checkmark" />Mastering</SectionLi>
      </SectionUl>
    </ContentSection>
  )
}

export default AudioServices
