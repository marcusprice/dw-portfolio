import styled from 'styled-components'

//app
export const AppContainer = styled.div`
  height: 100%; width: 100%;
`

//Header
export const HeaderContainer = styled.nav`
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
export const NavigationContainer = styled.ul`
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
export const LandingMenuContainer = styled.ul`
  margin: 0; padding: 0;
  width: 100%; height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 32px;

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
  width: 60%;
  margin: 0 auto;
  padding: 8px;
`
export const SectionTitle = styled.h2`
  margin: 0;
  margin-top: 4px;
  font-family: 'roboto';
  font-weight: 700;
  font-size: 36px;
  color: #DDD;
`

export const SectionQuote = styled.blockquote`
  padding: 0;
  font-weight: 500;
  font-size: 24px;
  font-family: 'roboto';
  color: #ddd;
  margin: 0px;
  margin-top: 8px;
`

export const SectionInfoContainer = styled.div`
  margin: 0px;
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const SectionParagraph = styled.p`
  margin-top: 0;
  font-weight: 500;
  width: 48%;
  font-family: 'open sans';
  /* font-family: Helvetica,Arial,Verdana,"Hiragino Kaku Gothic Pro","Hiragino Kaku Gothic Pro W3"; */
  font-size: 16px;
  color: #ccc;
  line-height: 1.5;
  hyphens: auto;
`

export const ImgContainer = styled.div`
  width: 48%;
`

export const SectionImg = styled.img`
  width: 100%;
`

export const DualCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const DualSectionCard = styled.div`
  margin: 0px;
  margin-top: 32px;
  background-color: #333;
  border-radius: 15px;
  padding: 32px;
  box-shadow: 0px 4px 6px #111;
  width: 48%;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
  box-sizing:border-box;
`

export const SectionCard = styled.div`
  margin: 0px;
  margin-top: 32px;
  background-color: #333;
  border-radius: 15px;
  padding: 32px;
  box-shadow: 0px 4px 6px #111;
  width: 100%;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
  box-sizing:border-box;
`
export const SectionSubTitle = styled.h3`
  margin: 0;
  font-family: 'roboto';
  font-size: 24px;
  font-weight: 500;
  color: #ddd;
`

export const SectionUl = styled.ul`
  margin: 0; padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const LongUl = styled.ul`
  margin: 0; padding: 0;
`

export const SectionLi = styled.li`
  margin-top: 32px;
  color: #ccc;
  font-family: 'open sans';
  font-weight: 300;
  font-size: 18px;
  list-style-type: none;
  display: flex;
  align-items: center;
  font-size: 16px;
`
export const LongLi = styled.li`
  margin-top: 32px;
  color: #ccc;
  font-family: 'open sans';
  font-weight: 300;
  font-size: 14px;
  list-style-type: none;
  display: flex;
  align-items: center;
`

export const Checkmark = styled.img`
  height: 30px; width: auto;
  margin-right: 15px;
`

export const Bold = styled.span`
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
  width: 40%;
`

export const FormParagraph = styled.p`
  width: 100%';
  font-family: 'roboto';
  color: #eee;
`

export const ContactForm = styled.form`
  width: 58%;
  margin: 0; padding: 0;
  margin-top: 32px;
`

export const FormLabel = styled.span`
  display: block;
  font-family: 'roboto';
  color: #eee;
  font-weight: 300;
  margin-top: 32px;
`

export const Input = styled.input`
  display: block;
  margin: 0; padding: 0;
  margin-top: 4px;
`

export const TextArea = styled.textarea`
  display: block;
  margin: 0; padding: 0;
  margin-top: 4px;
`
