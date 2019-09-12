import React from 'react'
import { SectionTitle, SectionSubTitle,
  SectionQuote, SectionInfoContainer,
  SectionParagraph, ContentSection,
  ImgContainer, SectionImg, SectionCard,
  SectionUl, LongUl, LongLi, SectionLi, Checkmark,
  Bold } from './Atoms.jsx'
import audioEquipment from '../img/audio-equipment.jpeg'
import checkmark from '../assets/icons/checkmark.png'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const AudioServices = (props) => {
  return(
    <PerfectScrollbar>
      <ContentSection>
        <SectionTitle>AUDIO SERVICES</SectionTitle>
        <SectionQuote>Morbi diam velit, aliquet quis velit consequat, aliquet blandit tortor.</SectionQuote>
        <SectionInfoContainer>
          <SectionParagraph>
            Vestibulum nec volutpat massa, quis euismod sapien. In gravida lorem quis ex pellentesque accumsan id non dolor. Quisque mattis ut ligula et viverra. In euismod elit pharetra mattis dignissim. Nam laoreet, magna sit amet cursus sagittis, massa urna sagittis mauris, eu suscipit nibh est vel libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras lorem urna, pretium a egestas vitae, blandit ut tellus. Etiam lacinia cursus mauris,  non porttitor magna. Fusce ut euismod metus.
          </SectionParagraph>
          <ImgContainer>
            <SectionImg src={audioEquipment} />
          </ImgContainer>
        </SectionInfoContainer>
        <SectionCard>
          <SectionSubTitle>Audio Services I Provide</SectionSubTitle>
          <SectionUl>
            <SectionLi><Checkmark src={checkmark} alt="checkmark"/>Composition</SectionLi>
            <SectionLi><Checkmark src={checkmark} alt="checkmark"/>Sound Design</SectionLi>
            <SectionLi><Checkmark src={checkmark} alt="checkmark" />Studio Engineering</SectionLi>
            <SectionLi><Checkmark src={checkmark} alt="checkmark" />Live Engineering</SectionLi>
            <SectionLi><Checkmark src={checkmark} alt="checkmark" />Mixing</SectionLi>
            <SectionLi><Checkmark src={checkmark} alt="checkmark" />Mastering</SectionLi>
          </SectionUl>
        </SectionCard>
        <SectionCard>
          <SectionSubTitle>Notable Projects I've Worked On</SectionSubTitle>
          <LongUl>
            <LongLi><Checkmark src={checkmark} alt="checkmark"/>Dino Delivery - <Bold>&nbsp;Compostion & Sound Design</Bold></LongLi>
            <LongLi><Checkmark src={checkmark} alt="checkmark"/>Twin Sibling, Album Name - <Bold>&nbsp;Studio Engineering, Mixing & Mastering</Bold></LongLi>
            <LongLi><Checkmark src={checkmark} alt="checkmark"/>Shelf Nunny, Album Name - <Bold>&nbsp;Mastering</Bold></LongLi>
            <LongLi><Checkmark src={checkmark} alt="checkmark"/>Marcus Price, Live On Mixlr - <Bold>&nbsp;Mastering</Bold></LongLi>
            <LongLi><Checkmark src={checkmark} alt="checkmark"/>Some Live Event, Seattle, WA - <Bold>&nbsp;Live Engineering</Bold></LongLi>
          </LongUl>
        </SectionCard>
      </ContentSection>
    </PerfectScrollbar>
  )
}

export default AudioServices
