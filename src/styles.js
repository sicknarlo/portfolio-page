import styled from 'styled-components';

export const themes = [
  {
    primary: '#4CAF50',
    secondary: '#FFFFFF'
  },
  {
    primary: '#F44336',
    secondary: '#FFFFFF'
  },
  {
    primary: '#2196F3',
    secondary: '#FFFFFF'
  },
  {
    primary: '#607D8B',
    secondary: '#FFFFFF'
  },
  {
    primary: '#795548',
    secondary: '#FFFFFF'
  },
  {
    primary: '#303F9F',
    secondary: '#FFFFFF'
  },
  {
    primary: '#FAFAFA',
    secondary: '#0277BD'
  },
  {
    primary: '#EDEDED',
    secondary: '#4B5658'
  },
  {
    primary: '#E8EAF6',
    secondary: '#303F9F'
  }

]

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
justify-content: center;
padding: 0 15px;
text-align: center;
background-color: ${props => props.theme.primary};
color: ${props => props.theme.secondary};

@media (min-width: 576px) {
	padding: 0 30px;
}

.intro {
	font-family: 'Reem Kufi', sans-serif;
	font-size: 3.75em;
}

.tagline {
	font-size: 1.5rem;
	margin: 1.5rem 0;
  font-weight: 100;
  color:  ${props => props.theme.secondary}
}
`

export const SocialIcons = styled.div`
padding: .25rem 0;
font-size: 3rem;

i {
	padding: 10px;
}

i {
	font-size: 3em;
}

a {
  color: ${props => props.theme.secondary}
  padding: 0 .625rem;
}

a svg path {
  fill: ${props => props.theme.secondary}
}
`

export const NavItem = styled.div`
  color: ${props => props.theme.secondary};
  height: 100%;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  margin-right: 15px;
  display: flex;
  align-items: center;
  :hover {
    border-bottom: 2px solid ${props => props.theme.secondary}
  }
`
export const Colorizer = styled.div`
@keyframes changeColor {
  0% {
    color: #4CAF50;
  }
  20% {
    color: #F44336;
  }
  40% {
    color: #2196F3;
  }
  60% {
    color: #607D8B;
  }
  80% {
    color: ##795548;
  }
}
:hover {
  animation-name: changeColor;
  animation-iteration-count: infinite;
  animation-duration: 3s;
}
`

export const PortfolioItem = styled.div`
background-color: ${props => props.theme.secondary};
color: ${props => props.theme.primary};
display: flex;
flex-direction: column;
margin: .5rem 0;
border-radius: 2px;
transition: -webkit-box-shadow .25s;
transition: box-shadow .25s;
transition: box-shadow .25s,-webkit-box-shadow .25s;
-webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12), 0 2px 1px -2px rgba(0,0,0,.2);
box-shadow: 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12), 0 2px 1px -2px rgba(0,0,0,.2);
margin: 1rem;
width: 100%;
.title {
  flex: 1 1;
  padding: 1rem 1.5rem;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
}
.desc {
  display: flex;
  flex-direction: column;
  padding: 0 .5rem;
  font-size: 1.5em;
  font-weight: 400;
  text-align: center;
  line-height: 1.5rem;
}
.portfolio-icon {
  display: flex;
  justify-content: center;
  padding: 1rem 1rem;
  font-size: 2rem;
  font-weight: 100;
  text-align: center;
  i {
    padding: 0 .625rem;
  }
}
`
export const Portfolio = styled.div`
display: flex;
max-width: 60%
justify-content: center;
alignItems: center;
alignContent: center;
@media (max-width: 576px) {
  min-width: 100%;
  padding: 15px;
}
.portfolio-links {
  padding: 0 0 .75rem;
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  font-weight: 600;
  a {
    color: ${props => props.theme.primary};
    padding-bottom: .25rem;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    :hover {
      border-bottom: 2px solid ${props => props.theme.primary};
    }
  }
}
`
