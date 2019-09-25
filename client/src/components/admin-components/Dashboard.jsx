import React from 'react'
import { ContentAreaContainer, ContentSection, FullCard, CardTitle, MarketingContainer, MarketingInfoContainer, MarketingTitle, MarketingQuote, Paragraph, MarketingImg } from './Atoms.jsx'
import admin from '../../img/admin.jpg'

const Dashboard = (props) => {
  return(
    <ContentAreaContainer onClick={() => {props.triggerNavMenu(false)}} navMenuExpanded={props.navMenuExpanded}>
      <ContentSection>
        <MarketingContainer>
          <MarketingInfoContainer>
            <MarketingTitle>ADMIN AREA</MarketingTitle>
            <MarketingQuote>Manage your content here.</MarketingQuote>
          </MarketingInfoContainer>
          <MarketingImg img={admin}/>
        </MarketingContainer>
        <FullCard>
          <CardTitle>New Show</CardTitle>
        </FullCard>
      </ContentSection>
    </ContentAreaContainer>
  )
}

export default Dashboard
