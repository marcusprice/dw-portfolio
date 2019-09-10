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
  grid-template-columns: repeat(2, 1fr);
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
  column-gap: 20px;
  row-gap: 20px;

  @media (max-width: 805px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const LandingMenuItem = styled.li`
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
  overflow: auto;
`

export const SectionTitle = styled.h2`
  font-family: 'roboto';
  font-size: 2em;
  color: #eee;
`

export const SectionParagraph = styled.p`
  font-weight: 300;
  width: 100%;
  font-family: 'open sans';
  font-size: 1em;
  color: #eee;
  line-height: 1.5;
`
