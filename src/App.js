import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconInstagram } from './assets/icons/instagram.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">Preferway.</a>
          </div>
          <div className="social">
            <a href="https://facebook.com/preferway" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://x.com/thepreferway" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://instagram.com/preferway" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconInstagram className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:info@preferway.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>&#169; 2024 Preferway Inc.</span>
        </div>
      </div>
    );
  }
}

export default App;