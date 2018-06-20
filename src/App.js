import React, { Component } from 'react';
import './reset.css';
import './App.css';
import { MainContainer, SocialIcons, themes, NavItem, Colorizer, PortfolioItem, Portfolio } from './styles';
import randomInt from './randomInt';

class App extends Component {
  state = {
    theme: themes[randomInt(themes.length)]
  }
  randomColor = () => this.setState({ theme: themes[randomInt(themes.length)]})
  scrollIntoView = node => node.scrollIntoView({ behavior: 'smooth' })
  render() {
    const { theme } = this.state;
    return (
      <div>
        <nav style={{
          width: '100%',
          height: '50px',
          position: 'fixed',
          top: '0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '30px',
          paddingRight: '30px',
        }}>
          <Colorizer style={{
              color: theme.secondary,
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onClick={this.randomColor}
          >
            <i className="fas fa-robot"></i>
            Colorize
          </Colorizer>
          <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%', alignContent: 'center', alignItems: 'center' }}>
            <NavItem theme={theme} onClick={() => this.scrollIntoView(this.about)}>About</NavItem>
            <NavItem theme={theme} onClick={() => this.scrollIntoView(this.portfolio)}>Portfolio</NavItem>
          </div>
        </nav>
        <MainContainer theme={theme}>
          <div className="intro">
            {`<NickSarlo alt="sicknarlo" />`}
          </div>
          <div className="tagline">NodeJS | ReactJS | Full Stack Dev</div>
          <SocialIcons theme={theme}>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sicknarlo"><i className="fab fa-github"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/sick_narlo"><i className="fab fa-twitter"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/3509080/sicknarlo"><i className="fab fa-stack-overflow"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nicksarlo"><i className="fab fa-linkedin"></i></a>
            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@nicksarlo"><i className="fab fa-medium"></i></a>
          </SocialIcons>
        </MainContainer>
        <MainContainer theme={theme} innerRef={node => this.about = node}>
          <h1 style={{ marginBottom: '10px' }}>About</h1>
          <p style={{ marginBottom: '10px' }}>My name is Nick Sarlo and I am a full-stack web developer based in Austin, TX.</p>
          <p style={{ marginBottom: '10px' }}>I have experience using a variety of technologies and frameworks, and I try to keep tabs with the pace at which the web is evolving.</p>
          <p style={{ marginBottom: '10px' }}>I specialize in using Node.js, Express, React-Redux, MongoDB, Redis, and more.</p>
        </MainContainer>
        <MainContainer theme={theme} innerRef={node => this.portfolio = node} style={{ alignItems: 'center' }}>
          <h1 style={{ marginBottom: '10px' }}>Portfolio</h1>
            <Portfolio theme={theme}>
              <PortfolioItem theme={theme}>
                <div className="title">DynastyFFTools</div>
                <div className="desc">Dynasty fantasy football app with 6k+ monthly users</div>
                <div className="portfolio-icon">
                  <i className="fab fa-react" style={{ marginRight: '10px' }}></i>
                  <i className="fab fa-node-js"></i>
                </div>
                <div className="portfolio-links">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.dynastyfftools.com">Site</a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/sicknarlo/dynasthub_app">Git</a>
                </div>
            </PortfolioItem>
          </Portfolio>
        </MainContainer>
      </div>
    );
  }
}

export default App;
