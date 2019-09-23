import React from 'react'
import { HalfCardContainer, HalfCard, CardTitle, ListItemIcon, HalfCardList, HalfCardItem, FullCardList, FullCardItem, BoldText } from './Atoms.jsx'
import checkmark from '../../assets/icons/checkmark.png'
import speaker from '../../assets/icons/speaker.png'

const AudioServicesCards = (props) => {
  return(
    <HalfCardContainer>
      <HalfCard>
        <CardTitle>Audio Services I Provide</CardTitle>
        <HalfCardList>
          <HalfCardItem><ListItemIcon src={checkmark} />Composition</HalfCardItem>
          <HalfCardItem><ListItemIcon src={checkmark} />Sound Design</HalfCardItem>
          <HalfCardItem><ListItemIcon src={checkmark} />Studio Engineering</HalfCardItem>
          <HalfCardItem><ListItemIcon src={checkmark} />Live Engineering</HalfCardItem>
          <HalfCardItem><ListItemIcon src={checkmark} />Mixing</HalfCardItem>
          <HalfCardItem><ListItemIcon src={checkmark} />Mastering</HalfCardItem>
        </HalfCardList>
      </HalfCard>

      <HalfCard>
        <CardTitle>Notable Projects I've Worked On</CardTitle>
        <FullCardList>
          <FullCardItem><ListItemIcon src={speaker} /><div>Dino Delivery - <BoldText>Compostion & Sound Design</BoldText></div></FullCardItem>
          <FullCardItem><ListItemIcon src={speaker} /><div>Twin Sibling, Album Name - <BoldText>Studio Engineering, Mixing & Mastering</BoldText></div></FullCardItem>
          <FullCardItem><ListItemIcon src={speaker} /><div>Shelf Nunny, Album Name - <BoldText>Mastering</BoldText></div></FullCardItem>
          <FullCardItem><ListItemIcon src={speaker} /><div>Marcus Price, Live On Mixlr - <BoldText>Mastering</BoldText></div></FullCardItem>
          <FullCardItem><ListItemIcon src={speaker} /><div>Some Live Event, Seattle, WA - <BoldText>Live Engineering</BoldText></div></FullCardItem>
        </FullCardList>
      </HalfCard>
    </HalfCardContainer>
  )
}

export default AudioServicesCards
