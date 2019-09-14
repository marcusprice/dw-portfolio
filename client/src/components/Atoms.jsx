import styled from 'styled-components'

//app
export const AppContainer = styled.div`
  height: 100%; width: 100%;
`

//Header
export const HeaderContainer = styled.header`
  width: calc(100% - 40px);
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SiteTitle = styled.h1`
  margin: 0; padding: 0;
  font-weight: 300;
  color: #ddd;
  font-family: 'roboto';
  cursor: pointer;
  font-weight: 500;

  :hover {
    color: #888;
  }
`
export const MenuIcon = styled.img`
  height: 70%;
  cursor: pointer;
`
//content area
export const ContentAreaContainer = styled.div`
  width: calc(100% - 40px); height: calc(100% - 50px);
  margin: 0 auto;
  position: fixed;
  left: ${props => (props.navMenuExpanded ? '-225px' : '20px') };
  opacity: ${props => (props.navMenuExpanded ? '.25' : '1') };
  transition: all .5s;
`

//nav bar
export const NavBarContainer = styled.nav`
  width: 225px; height: 400px;
  position: fixed;
  right: ${props => (props.navMenuExpanded ? '20px' : '-227px') };
  transition: all .5s;
`

//main navigation menu
export const NavList = styled.ul`
  margin: 0; padding: 0;
  width: 100%;
  margin-top: 25%;
  border: solid 1px #888;
  font-family: 'roboto';
  color: #ddd;
`

export const NavItem = styled.li`
  list-style-type: none;
  padding: 10px;
  cursor: pointer;

  :hover {
    color: #888;
  }
`

//landing menu (grid layout)
export const LandingMenuList = styled.ul`
  margin: 0; padding: 0;
  width: 100%; height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 16px;

  @media (max-width: 805px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const LandingMenuItem = styled.li`
  font-weight: 700;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: ${props => props.position};
  background-size: ${props => props.size};
  background-repeat: no-repeat;
  background-image: url(${props => props.img});
  font-family: 'roboto';
  color: #eee;
  font-size: 2em;
  opacity: 1;
  cursor: pointer;
  transition: opacity .1s;

  :hover {
    opacity: .6;
  }
`

//content areas
export const ContentSection = styled.section`
  margin: 0 auto;
  padding: 8px;

  /*large monitor*/
  width: 70%;

  /*medium monitor/laptop*/
  @media (max-width: 1300px) {
    width: 80%;
  }

  /*small monitor/laptop*/
  @media (max-width: 1000px) {
    width: 95%;
  }
`

//marketing container which introduces each section
export const MarketingContainer = styled.div`
  margin: 0px;
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`

export const MarketingInfoContainer = styled.div`
  width: 48%;
`

export const MarketingTitle = styled.h2`
  margin: 0;
  margin-top: 4px;
  font-family: 'roboto';
  font-weight: 700;
  font-size: 36px;
  color: #DDD;
`

export const MarketingQuote = styled.blockquote`
  padding: 0;
  font-weight: 500;
  font-size: 24px;
  font-family: 'roboto';
  color: #ddd;
  margin: 0px;
  margin-top: 8px;
`

export const Paragraph = styled.p`
  margin: 0;
  margin-top: 16px;
  font-weight: 500;
  width: 100%;
  font-family: 'open sans';
  font-size: 16px;
  color: #ccc;
  line-height: 1.5;
  hyphens: auto;
`

export const MarketingImg = styled.div`
  width: 48%;
  padding-top: 48%;
  border-radius: 50%;
  background-image: url(${props => props.img});
  background-size: auto 100%;
  /* background-size: cover; */
  background-position: center bottom;
  background-repeat: no-repeat;
  border: solid 4px #bbb;
`

export const HalfCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const HalfCard = styled.div`
  margin: 0px;
  margin-top: 32px;
  background-color: #333;
  border-radius: 10px;
  padding: 32px;
  box-shadow: 0px 4px 6px #111;
  width: 48%;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
  box-sizing:border-box;
`

export const FullCard = styled.div`
  margin: 0px;
  margin-top: 32px;
  background-color: #333;
  border-radius: 10px;
  padding: 32px;
  box-shadow: 0px 4px 6px #111;
  width: 100%;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
  box-sizing:border-box;
`
export const CardTitle = styled.h3`
  margin: 0;
  font-family: 'roboto';
  font-size: 20px;
  font-weight: 500;
  color: #ddd;
`

export const CardSubTitle = styled.h4`
  margin: 0 auto;
  margin-top: 16px;
  font-family: 'roboto';
  font-size: 18px;
  font-weight: 500;
  color: #ddd;
`

export const MindBeams = styled.iframe`
  margin: 0;
  margin-top: 16px;
  margin-bottom: 16px;
  border: 0;
  width: 350px;
  height: 470px;
`

export const TarsierEyes = styled.iframe`
  margin: 0;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 40%;
  height: 300px;
  display: block;
`

export const Alien = styled.img`
  margin: 0;
  margin-top: 16px;
`

export const Stalebirth = styled.iframe`
  margin: 0;
  margin-top: 16px;
  margin-bottom: 16px;
  border: 0;
  width: 350px;
  height: 470px;
`

export const HalfCardList = styled.ul`
  margin: 0; padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const FullCardList = styled.ul`
  margin: 0; padding: 0;
`

export const HalfCardItem = styled.li`
  margin-top: 32px;
  color: #ccc;
  font-family: 'open sans';
  font-weight: 300;
  list-style-type: none;
  display: flex;
  align-items: center;
  font-size: 18px;
`
export const FullCardItem = styled.li`
  margin-top: 32px;
  color: #ccc;
  font-family: 'open sans';
  font-weight: 300;
  font-size: 16px;
  list-style-type: none;
  display: flex;
  align-items: center;
`

export const ListItemIcon = styled.img`
  height: 24px; width: auto;
  margin-right: 15px;
`

export const BoldText = styled.span`
  font-weight: 700;
  color: #ddd;
`

//form components
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const FormInfo = styled.div`
  width: 38%;
`

export const FormParagraph = styled.p`
  width: 100%;
  font-family: 'roboto';
  color: #ccc;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
  margin-top: 16px;
`

export const ContactForm = styled.form`
  width: 58%;
  margin: 0; padding: 0;
`

export const FormLabel = styled.span`
  display: block;
  font-family: 'roboto';
  color: #eee;
  font-weight: 300;
  margin-top: ${props => (props.top ? '0' : '32px') };
`

export const Input = styled.input`
  width: 75%;
  display: block;
  margin: 0; padding: 0;
  margin-top: 4px;
  border-radius: 5px;
  font-size: 16px;
  font-family: 'roboto';
  font-weight: 300;
  padding: 8px 8px;
  color: #ccc;
  border: solid #555 1px;
  background: #222;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
  box-sizing:border-box;

  :focus {
    outline: none !important;
    border-color: #2ECC71;
    box-shadow: 0 0 5px #2ECC71;
  }
`

export const Submit = styled.input`
  display: block;
  margin: 0; padding: 0;
  background: #ccc;
  color: #222;
  font-family: 'roboto';
  font-weight: 500;
  margin-top: 32px;
  border-radius: 5px;
  font-size: 16px;
  width: 150px;
  padding: 8px;
  border: solid #666 1px;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
  box-sizing:border-box;
  cursor: pointer;
`

export const TextArea = styled.textarea`
  color: #ccc;
  display: block;
  margin: 0; padding: 0;
  margin-top: 4px;
  font-family: 'roboto';
  width: 100%;
  height: 150px;
  padding: 16px 8px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 300;
  background: #222;
  border: solid #555 1px;
  resize: none;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
  box-sizing:border-box;

  :focus {
    outline: none !important;
    border-color: #2ECC71;
    box-shadow: 0 0 5px #2ECC71;
  }
`
