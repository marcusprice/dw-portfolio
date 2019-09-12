import React from 'react'
import { DualCardContainer, DualSectionCard, SectionSubTitle, SectionUl, SectionLi, Checkmark, LongUl, LongLi, Bold } from './Atoms.jsx'
import checkmark from '../assets/icons/checkmark.png'
import speaker from '../assets/icons/speaker.png'

const AudioServicesCards = (props) => {
  return(
    <DualCardContainer>
      <DualSectionCard>
        <SectionSubTitle>Audio Services I Provide</SectionSubTitle>
        <SectionUl>
          <SectionLi><Checkmark src={checkmark} alt="checkmark"/>Composition</SectionLi>
          <SectionLi><Checkmark src={checkmark} alt="checkmark"/>Sound Design</SectionLi>
          <SectionLi><Checkmark src={checkmark} alt="checkmark" />Studio Engineering</SectionLi>
          <SectionLi><Checkmark src={checkmark} alt="checkmark" />Live Engineering</SectionLi>
          <SectionLi><Checkmark src={checkmark} alt="checkmark" />Mixing</SectionLi>
          <SectionLi><Checkmark src={checkmark} alt="checkmark" />Mastering</SectionLi>
        </SectionUl>
      </DualSectionCard>

      <DualSectionCard>
        <SectionSubTitle>Notable Projects I've Worked On</SectionSubTitle>
        <LongUl>
          <LongLi><Checkmark src={speaker} alt="checkmark"/>Dino Delivery - <Bold>&nbsp;Compostion & Sound Design</Bold></LongLi>
          <LongLi><Checkmark src={speaker} alt="checkmark"/>Twin Sibling, Album Name - <Bold>&nbsp;Studio Engineering, Mixing & Mastering</Bold></LongLi>
          <LongLi><Checkmark src={speaker} alt="checkmark"/>Shelf Nunny, Album Name - <Bold>&nbsp;Mastering</Bold></LongLi>
          <LongLi><Checkmark src={speaker} alt="checkmark"/>Marcus Price, Live On Mixlr - <Bold>&nbsp;Mastering</Bold></LongLi>
          <LongLi><Checkmark src={speaker} alt="checkmark"/>Some Live Event, Seattle, WA - <Bold>&nbsp;Live Engineering</Bold></LongLi>
        </LongUl>
      </DualSectionCard>
    </DualCardContainer>
  )
}

export default AudioServicesCards
