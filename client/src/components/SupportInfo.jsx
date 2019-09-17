import React from 'react'
import { MarketingContainer, MarketingInfoContainer, MarketingTitle, MarketingQuote, Paragraph, MarketingImg } from './Atoms.jsx'
import money from '../img/money.jpeg'

const SupportInfo = (props) => {
  return(
    <MarketingContainer>
      <MarketingInfoContainer>
        <MarketingTitle>SUPPORT</MarketingTitle>
        <MarketingQuote>Morbi diam velit, aliquet blandit tortor.</MarketingQuote>
        <Paragraph>
          Curabitur auctor massa eleifend enim interdum sagittis. Donec sed felis sagittis neque tempor imperdiet malesuada quis odio. Proin luctus sem non egestas luctus. Etiam efficitur tempus lacinia. In sollicitudin, elit sit amet faucibus elementum, urna lectus congue tortor, eget maximus ante neque non justo
        </Paragraph>
      </MarketingInfoContainer>

      <MarketingImg img={money} />
    </MarketingContainer>
  )
}

export default SupportInfo
