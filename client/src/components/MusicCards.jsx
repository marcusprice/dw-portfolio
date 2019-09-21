import React from 'react'
import { FullCard, CardTitle, CardSubTitle, MindBeams, TarsierEyes, Alien, Stalebirth, SupportingParagraph } from './Atoms.jsx'
import alien from '../assets/icons/alien.png'

const MusicCards = (props) => {
  return(
    <div>
      <FullCard>
        <CardTitle>Active Projects</CardTitle>
        <CardSubTitle marginTop="8px">Mind Beams</CardSubTitle>
        <SupportingParagraph>
          Mauris urna sapien, posuere id imperdiet nec, ultricies nec odio. Donec pulvinar orci quis urna commodo, in pulvinar eros eleifend. Duis hendrerit eros quis lacinia interdum. Maecenas nec porta mi. Vivamus iaculis pellentesque velit. Nulla venenatis ipsum vitae felis posuere, et rhoncus tellus semper. Praesent sagittis lobortis tortor, a vestibulum urna venenatis quis. Morbi eu quam scelerisque, viverra nisi ut, elementum dui. Morbi in dignissim orci, at iaculis nulla. Integer sagittis interdum nulla quis imperdiet. Mauris vel sollicitudin nulla. Morbi fringilla orci et sem dictum, a ultrices dolor porttitor. Donec faucibus quam et ex tincidunt, at posuere nunc laoreet. Donec mollis hendrerit cursus. Praesent condimentum euismod turpis, ac auctor sem posuere quis. Vivamus euismod erat orci, nec blandit risus semper a.
        </SupportingParagraph>
          <MindBeams  src="https://bandcamp.com/EmbeddedPlayer/album=872877311/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://mindbeams.bandcamp.com/album/crone">Crone by Mind Beams</a></MindBeams>
        <CardSubTitle marginTop="16px">Tarsier Eyes</CardSubTitle>
        <SupportingParagraph>
          Aliquam a nisi orci. Vestibulum mattis eleifend enim, quis pharetra tortor viverra a. Duis massa turpis, ultrices sed pulvinar a, aliquet ut ipsum. Donec non mauris at ipsum mattis rhoncus at non ligula. Nulla porttitor suscipit condimentum. Nullam eu gravida lorem. Suspendisse sed pellentesque risus. Morbi nec congue nunc, quis dignissim mauris. Nullam non enim a turpis congue pharetra. Morbi vestibulum lacus accumsan ligula bibendum viverra. Maecenas vulputate pharetra ipsum vitae fermentum. Nunc placerat vitae eros id accumsan.
        </SupportingParagraph>
        <TarsierEyes scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/654249842&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
        <Alien src={alien} />
        <SupportingParagraph>
          Nullam egestas orci in ante dignissim, efficitur interdum leo convallis. Fusce purus purus, scelerisque in diam eget, lacinia congue est. Quisque cursus consectetur tortor sit amet fermentum. Vestibulum sem lorem, venenatis sit amet pretium sit amet, maximus mollis erat. Phasellus vel enim bibendum, sodales augue sit amet, ornare ex. Fusce eget condimentum urna. Nunc in gravida augue.
        </SupportingParagraph>
      </FullCard>

      <FullCard>
        <CardTitle>Past Projects</CardTitle>
        <CardSubTitle marginTop="8px">Stalebirth</CardSubTitle>
        <SupportingParagraph>
          Mauris urna sapien, posuere id imperdiet nec, ultricies nec odio. Donec pulvinar orci quis urna commodo, in pulvinar eros eleifend. Duis hendrerit eros quis lacinia interdum. Maecenas nec porta mi. Vivamus iaculis pellentesque velit. Nulla venenatis ipsum vitae felis posuere, et rhoncus tellus semper. Praesent sagittis lobortis tortor, a vestibulum urna venenatis quis. Morbi eu quam scelerisque, viverra nisi ut, elementum dui. Morbi in dignissim orci, at iaculis nulla. Integer sagittis interdum nulla quis imperdiet. Mauris vel sollicitudin nulla. Morbi fringilla orci et sem dictum, a ultrices dolor porttitor. Donec faucibus quam et ex tincidunt, at posuere nunc laoreet. Donec mollis hendrerit cursus. Praesent condimentum euismod turpis, ac auctor sem posuere quis. Vivamus euismod erat orci, nec blandit risus semper a.
        </SupportingParagraph>
        <Stalebirth src="https://bandcamp.com/EmbeddedPlayer/album=681320419/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://stalebirth.bandcamp.com/album/holy-sky-passionately-longs-to-penetrate-the-earth">Holy Sky Passionately Longs To Penetrate The Earth by Stalebirth</a></Stalebirth>
        <CardSubTitle marginTop="16px">somesurprises</CardSubTitle>
        <SupportingParagraph>
          Nullam egestas orci in ante dignissim, efficitur interdum leo convallis. Fusce purus purus, scelerisque in diam eget, lacinia congue est. Quisque cursus consectetur tortor sit amet fermentum. Vestibulum sem lorem, venenatis sit amet pretium sit amet, maximus mollis erat. Phasellus vel enim bibendum, sodales augue sit amet, ornare ex. Fusce eget condimentum urna. Nunc in gravida augue.
        </SupportingParagraph>
      </FullCard>

    </div>
  )
}

export default MusicCards
