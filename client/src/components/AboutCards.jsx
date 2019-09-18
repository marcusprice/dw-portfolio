import React from 'react'
import { FullCard, HalfCardContainer, HalfCard, CardTitle, CardSubTitle, Paragraph, SupportingParagraph, FullCardList, ListItemIcon, SmallFullCardItem } from './Atoms.jsx'
import checkmark from '../assets/icons/checkmark.png'

const AboutCards = (props) => {
  return(
    <div>
      <FullCard>
        <CardTitle>Bio</CardTitle>
        <Paragraph>
          Mauris urna sapien, posuere id imperdiet nec, ultricies nec odio. Donec pulvinar orci quis urna commodo, in pulvinar eros eleifend. Duis hendrerit eros quis lacinia interdum. Maecenas nec porta mi. Vivamus iaculis pellentesque velit. Nulla venenatis ipsum vitae felis posuere, et rhoncus tellus semper. Praesent sagittis lobortis tortor, a vestibulum urna venenatis quis. Morbi eu quam scelerisque, viverra nisi ut, elementum dui. Morbi in dignissim orci, at iaculis nulla. Integer sagittis interdum nulla quis imperdiet. Mauris vel sollicitudin nulla. Morbi fringilla orci et sem dictum, a ultrices dolor porttitor. Donec faucibus quam et ex tincidunt, at posuere nunc laoreet. Donec mollis hendrerit cursus. Praesent condimentum euismod turpis, ac auctor sem posuere quis. Vivamus euismod erat orci, nec blandit risus semper a.
        </Paragraph>
        <Paragraph>
          Nullam egestas orci in ante dignissim, efficitur interdum leo convallis. Fusce purus purus, scelerisque in diam eget, lacinia congue est. Quisque cursus consectetur tortor sit amet fermentum. Vestibulum sem lorem, venenatis sit amet pretium sit amet, maximus mollis erat. Phasellus vel enim bibendum, sodales augue sit amet, ornare ex. Fusce eget condimentum urna. Nunc in gravida augue.
        </Paragraph>
        <Paragraph>
          Aliquam a nisi orci. Vestibulum mattis eleifend enim, quis pharetra tortor viverra a. Duis massa turpis, ultrices sed pulvinar a, aliquet ut ipsum. Donec non mauris at ipsum mattis rhoncus at non ligula. Nulla porttitor suscipit condimentum. Nullam eu gravida lorem. Suspendisse sed pellentesque risus. Morbi nec congue nunc, quis dignissim mauris. Nullam non enim a turpis congue pharetra. Morbi vestibulum lacus accumsan ligula bibendum viverra. Maecenas vulputate pharetra ipsum vitae fermentum. Nunc placerat vitae eros id accumsan.
        </Paragraph>
      </FullCard>

      <HalfCardContainer>
      <HalfCard>
        <CardTitle>Education</CardTitle>
        <CardSubTitle marginTop="8px">Digipen Institute of Technology</CardSubTitle>
        <SupportingParagraph>BA in Degree Name</SupportingParagraph>
        <FullCardList>
          <SmallFullCardItem><ListItemIcon src={checkmark}/>Donec congue leo at orci facilisis, nec pretium lacus dictum.</SmallFullCardItem>
          <SmallFullCardItem><ListItemIcon src={checkmark}/>Vestibulum sodales, nibh et suscipit tincidunt, nulla mi aliquet magna, vitae vulputate orci metus mollis est. </SmallFullCardItem>
          <SmallFullCardItem><ListItemIcon src={checkmark}/>Proin sagittis quam odio, sit amet semper libero posuere sit amet.</SmallFullCardItem>
        </FullCardList>
      </HalfCard>
      <HalfCard>
        <CardTitle>Work Experience</CardTitle>
        <CardSubTitle marginTop="8px">Digipen Institute of Technology</CardSubTitle>
        <SupportingParagraph>Job Title</SupportingParagraph>
        <SmallFullCardItem><ListItemIcon src={checkmark}/>Donec congue leo at orci facilisis, nec pretium lacus dictum.</SmallFullCardItem>
        <SmallFullCardItem><ListItemIcon src={checkmark}/>Vestibulum sodales, nibh et suscipit tincidunt, nulla mi aliquet magna, vitae vulputate orci metus mollis est. </SmallFullCardItem>
        <SmallFullCardItem><ListItemIcon src={checkmark}/>Proin sagittis quam odio, sit amet semper libero posuere sit amet.</SmallFullCardItem>
      </HalfCard>
      </HalfCardContainer>
    </div>
  )
}

export default AboutCards
