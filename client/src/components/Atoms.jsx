import styled from 'styled-components'

//app
export const AppContainer = styled.div`
  height: 100%; width: 100%;
`

//navbar
export const NavBarContainer = styled.nav`
  width: 95%; height: 40px;
  margin: 0 auto;
  /* background-color: #333; */
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
`
export const MenuIcon = styled.img`
  height: 70%;
  cursor: pointer;
`
//content area
export const ContentAreaContainer = styled.div`
  width: 95%; height: calc(100% - 50px);
  /* background-color: #444; */
  margin: 0 auto;
`
//landing menu (grid layout)
export const LandingMenuContainer = styled.ul`
  margin: 0; padding: 0;
  width: 100%; height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2px;
  row-gap: 2px;


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
