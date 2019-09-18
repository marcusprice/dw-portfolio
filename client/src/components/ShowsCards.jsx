import React from 'react'
import { FullCard, CardTitle, CardSubTitle, ShowFlier, SupportingParagraph } from './Atoms.jsx'
import showPoster1 from '../img/showposter1.jpg'
import showPoster2 from '../img/showposter2.jpg'
import showPoster3 from '../img/showposter3.jpg'

const ShowsCards = (props) => {
  return(
    <div>
      <FullCard>
        <CardTitle>Upcoming Shows</CardTitle>
        <CardSubTitle marginTop="8px">Floral Tattoo/ Bad Time Friend / Tarsier Eyes / Sour Girl</CardSubTitle>
        <ShowFlier src={showPoster1}/>
        <SupportingParagraph>
          Nulla et pulvinar quam. Curabitur sapien turpis, ultricies nec sapien et, pharetra laoreet tellus. Fusce a maximus dui. Phasellus consequat rutrum velit, nec eleifend neque viverra et. Proin elit magna, vulputate pretium justo vitae, scelerisque cursus erat. Aliquam leo metus, commodo in semper eu, egestas quis mauris.
        </SupportingParagraph>

        <CardSubTitle marginTop="32px">Tarsier Eyes/ F.T.P. / Zach Zinn / Bombthreat 23</CardSubTitle>
        <ShowFlier src={showPoster2}/>
        <SupportingParagraph>
          Nulla et pulvinar quam. Curabitur sapien turpis, ultricies nec sapien et, pharetra laoreet tellus. Fusce a maximus dui. Phasellus consequat rutrum velit, nec eleifend neque viverra et. Proin elit magna, vulputate pretium justo vitae, scelerisque cursus erat. Aliquam leo metus, commodo in semper eu, egestas quis mauris.
        </SupportingParagraph>
      </FullCard>

      <FullCard>
        <CardTitle>Past Shows</CardTitle>
        <CardSubTitle marginTop="8px">Nacion de Humo/ Goodnight Wounds / Qry / Tarsier Eyes</CardSubTitle>
        <ShowFlier src={showPoster3}/>
        <SupportingParagraph>
          Nulla et pulvinar quam. Curabitur sapien turpis, ultricies nec sapien et, pharetra laoreet tellus. Fusce a maximus dui. Phasellus consequat rutrum velit, nec eleifend neque viverra et. Proin elit magna, vulputate pretium justo vitae, scelerisque cursus erat. Aliquam leo metus, commodo in semper eu, egestas quis mauris.
        </SupportingParagraph>
      </FullCard>
    </div>
  )
}

export default ShowsCards
