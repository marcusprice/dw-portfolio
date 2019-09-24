import styled from 'styled-components'

/*login form*/
export const LoginContainer = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginCard = styled.div`
  border-radius: 10px;
  /* border: solid #666 1px; */
  width: 384px;
  padding: 32px;
  box-sizing: border-box;
  /* background-color: #F0F4F8; */
  background-color: #333;
  box-shadow: 0px 4px 6px #111;
`

export const LoginTitle = styled.h1`
  margin: 0; padding: 0;
  margin-bottom: 32px;
  font-family: 'roboto';
  font-weight: 500;
  width: 100%;
  border-bottom: solid #F0F4F8 1px;
  color: #F0F4F8;
`

export const LoginForm = styled.form`
  width: 100%;
  box-sizing: border-box;
  font-family: 'roboto';
  font-weight: 500;
  color: #F0F4F8;
`

export const LoginInput = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: 4px;
  margin-bottom: 32px;
  font-size: 18px;
  padding: 8px;
  border-radius: 5px;
  border: solid #444 1px;
  font-weight: 300;
  font-family: 'roboto';
  color: #eee;
  background-color: #222;
`

export const RememberMe = styled.input`

`

export const LoginButton = styled.input`
  margin-top: 16px;
  margin-bottom: 16px;
  display: block;
  height: 48px;
  width: 100%;
  border-radius: 5px;
  font-size: 20px;
  border: solid 0px;
  background-color: #222;
  border: solid #444 1px;
  color: #F0F4F8;
  font-family: 'roboto';
  cursor: pointer;
`

//content area
export const ContentAreaContainer = styled.div`
  width: calc(100% - 40px); height: calc(100% - 40px);
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: ${props => (props.navMenuExpanded ? '-225px' : '20px') };
  opacity: ${props => (props.navMenuExpanded ? '.25' : '1') };
  transition: all .5s;
  -webkit-transition: all .5s;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
  box-sizing:border-box;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 425px) {
    width: calc(100% - 20px);
    left: ${props => (props.navMenuExpanded ? '-225px' : '10px') };
  }
`

//Header
export const HeaderContainer = styled.header`
  width: calc(100% - 40px);
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;

  @media (max-width: 425px) {
    width: calc(100% - 20px);
  }
`
export const SiteTitle = styled.h1`
  margin: 0; padding: 0;
  font-weight: 300;
  color: #ddd;
  font-family: 'roboto';
  cursor: pointer;
  font-weight: 500;

  @media (min-width: 900px) {
    :hover {
      color: #888;
    }
  }

  @media (max-width: 425px) {
    font-size: 24px;
  }
`

export const MenuIcon = styled.img`
  height: 70%;
  cursor: pointer;

  @media (max-width: 425px) {
    height: 60%;
  }
`

//content areas
export const ContentSection = styled.section`
  margin: 0 auto;
  padding: 0 8px 32px 8px;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
  box-sizing:border-box;

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

  /*small monitor/laptop*/
  @media (max-width: 425px) {
    width: 98%;
    padding: 0 0px 32px 0px;
  }
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

  @media (max-width: 425px) {
    padding: 16px 8px;
  }
`

export const CardTitle = styled.h3`
  margin: 0;
  margin-bottom: 8px;
  font-family: 'roboto';
  font-size: 20px;
  font-weight: 500;
  color: #ddd;
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

  @media (max-width: 768px) {
    display: block;
    margin-top: 8px;
  }
`

export const MarketingInfoContainer = styled.div`
  width: 48%;
  order: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const MarketingTitle = styled.h2`
  margin: 0;
  margin-top: 4px;
  font-family: 'roboto';
  font-weight: 700;
  font-size: 36px;
  color: #DDD;

  @media (max-width: 768px) {
    margin-top: 16px;
    font-size: 30px;
  }
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

  @media (max-width: 768px) {
    margin-top: 8px;
  }
`

export const MarketingImg = styled.div`
  width: 48%;
  padding-top: 48%;
  border-radius: 50%;
  background-image: url(${props => props.img});
  /* background-size: auto 100%; */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border: solid 4px #bbb;
  order: 2;

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 90%;
    padding-top: 90%;
    margin-bottom: 8px;
  }
`
