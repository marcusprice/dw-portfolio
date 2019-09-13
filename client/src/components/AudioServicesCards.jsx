import React from 'react'
import { DualCardContainer, DualSectionCard, SectionSubTitle, Checkmark, SectionUl, SectionLi, LongUl, LongLi, Bold } from './Atoms.jsx'
import checkmark from '../assets/icons/checkmark.png'
import speaker from '../assets/icons/speaker.png'

const AudioServicesCards = (props) => {
  return(
    <DualCardContainer>
      <DualSectionCard>
        <SectionSubTitle>Audio Services I Provide</SectionSubTitle>
        <SectionUl>
          <SectionLi bullet={checkmark}><Checkmark src={checkmark} />Composition</SectionLi>
          <SectionLi bullet={checkmark}><Checkmark src={checkmark} />Sound Design</SectionLi>
          <SectionLi bullet={checkmark}><Checkmark src={checkmark} />Studio Engineering</SectionLi>
          <SectionLi bullet={checkmark}><Checkmark src={checkmark} />Live Engineering</SectionLi>
          <SectionLi bullet={checkmark}><Checkmark src={checkmark} />Mixing</SectionLi>
          <SectionLi bullet={checkmark}><Checkmark src={checkmark} />Mastering</SectionLi>
        </SectionUl>
      </DualSectionCard>

      <DualSectionCard>
        <SectionSubTitle>Notable Projects I've Worked On</SectionSubTitle>
        <LongUl>
          <LongLi><Checkmark src={speaker} /><div>Dino Delivery - <Bold>Compostion & Sound Design</Bold></div></LongLi>
          <LongLi><Checkmark src={speaker} /><div>Twin Sibling, Album Name - <Bold>Studio Engineering, Mixing & Mastering</Bold></div></LongLi>
          <LongLi><Checkmark src={speaker} /><div>Shelf Nunny, Album Name - <Bold>Mastering</Bold></div></LongLi>
          <LongLi><Checkmark src={speaker} /><div>Marcus Price, Live On Mixlr - <Bold>Mastering</Bold></div></LongLi>
          <LongLi><Checkmark src={speaker} /><div>Some Live Event, Seattle, WA - <Bold>Live Engineering</Bold></div></LongLi>
        </LongUl>
      </DualSectionCard>
    </DualCardContainer>
  )
}

export default AudioServicesCards
