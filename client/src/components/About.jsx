import React from 'react'
import { SectionTitle, SectionSubTitle, SectionInfoContainer, SectionParagraph, ContentSection, ImgContainer, SectionImg } from './Atoms.jsx'
import dustin from '../img/dustin.jpg'

const AudioServices = (props) => {
  return(
    <ContentSection>
      <SectionTitle>ABOUT</SectionTitle>
      <SectionInfoContainer>
        <SectionParagraph>
          Vestibulum nec volutpat massa, quis euismod sapien. In gravida lorem quis ex pellentesque accumsan id non dolor. Quisque mattis ut ligula et viverra. In euismod elit pharetra mattis dignissim. Nam laoreet, magna sit amet cursus sagittis, massa urna sagittis mauris, eu suscipit nibh est vel libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras lorem urna, pretium a egestas vitae, blandit ut tellus. Etiam lacinia cursus mauris,  non porttitor magna. Fusce ut euismod metus. Etiam vel vestibulum mauris, et gravida sapien. Morbi diam velit, aliquet quis velit consequat, aliquet blandit tortor. Sed posuere pulvinar nibh, at fringilla elit faucibus vel. Nam non faucibus diam. Aenean mollis at ex in dignissim. Aenean elit odio, vulputate sed lectus vel, tristique malesuada dolor. Nam vel sapien quis diam aliquam ultrices.
        </SectionParagraph>
        <ImgContainer>
          <SectionImg src={dustin} />
        </ImgContainer>
      </SectionInfoContainer>
      <SectionSubTitle>Bio</SectionSubTitle>

    </ContentSection>
  )
}

export default AudioServices
