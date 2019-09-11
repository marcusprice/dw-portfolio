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
  overflow: auto;
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
  column-gap: 5px;
  row-gap: 5px;

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
  padding: 10px;
  border-radius: 5px;
`
export const SectionTitle = styled.h2`
  font-family: 'roboto';
  font-size: 2em;
  color: #EDF5E1;
`

export const SectionQuote = styled.blockquote`
  margin: 0; padding: 0;
  font-weight: 400;
  font-style: italic;
  font-size: 1.5em;
  font-family: 'roboto';
  color: #ddd;
  margin-bottom: 40px
`

export const SectionInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const SectionSubTitle = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-family: 'roboto';
  font-size: 1.5em;
  font-weight: 700;
  color: #ddd;
`

export const SectionParagraph = styled.p`
  margin-top: 0;
  font-weight: 500;
  width: 48%;
  font-family: 'open sans';
  /* font-family: Helvetica,Arial,Verdana,"Hiragino Kaku Gothic Pro","Hiragino Kaku Gothic Pro W3"; */
  font-size: 1em;
  color: #aaa;
  line-height: 1.5;
`

export const ImgContainer = styled.div`
  width: 48%;
`

export const SectionImg = styled.img`
  width: 100%;
`

export const SectionCard = styled.div`
  margin-top: 40px;
  background-color: #333;
  border-radius: 15px;
  padding: 20px;
`

export const SectionUl = styled.ul`
  margin: 0; padding: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const SectionLi = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  color: #aaa;
  height: 60px;
  font-family: 'open sans';
  font-weight: 300;
  font-size: 20px;
`

export const Checkmark = styled.img`
  height: 30px; width: auto;
  margin-right: 10px;
`
