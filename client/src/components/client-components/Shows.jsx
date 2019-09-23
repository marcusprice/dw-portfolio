import React from 'react'
import { ContentSection } from './Atoms.jsx'
import ShowsInfo from './ShowsInfo.jsx'
import ShowsCards from './ShowsCards.jsx'

const Shows = (props) => {
  return(
    <ContentSection>
      <ShowsInfo />
      <ShowsCards />
    </ContentSection>
  )
}

export default Shows
