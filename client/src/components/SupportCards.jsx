import React from 'react'
import { FullCard, CardTitle, SupportingParagraph, SupportContainer, SupportItem } from './Atoms.jsx'
import patreon from '../img/Patreon_White.png'
import venmo from '../img/venmo_logo_blue.png'


const SupportCards = (props) => {
  return(
    <div>
      <FullCard>
        <CardTitle>Anything Helps!</CardTitle>
        <SupportingParagraph>
          Nulla et pulvinar quam. Curabitur sapien turpis, ultricies nec sapien et, pharetra laoreet tellus. Fusce a maximus dui. Phasellus consequat rutrum velit, nec eleifend neque viverra et. Proin elit magna, vulputate pretium justo vitae, scelerisque cursus erat. Aliquam leo metus, commodo in semper eu, egestas quis mauris:
        </SupportingParagraph>
        <SupportContainer>
          <SupportItem src={patreon}/>
          <SupportItem src={venmo}/>
        </SupportContainer>
      </FullCard>
    </div>
  )
}

export default SupportCards
