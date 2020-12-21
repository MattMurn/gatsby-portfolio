import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from './IconButton/IconButton';

const Footer = ({style="main"}) => {
  const openNewTab = (url) => {
    window.open(url, '_blank');
  }
  
  return (
    <footer className="footer"> 
    <div className="footer-contact-container">
    <IconButton ariaText="linkedin-profile"  onClick={() => openNewTab('https://www.linkedin.com/in/matthew-murnighan/')}>
      <LinkedInIcon className={`icon-button-child ${style}`} />
    </IconButton>
    <IconButton ariaText="github-profile"  onClick={() => openNewTab('https://github.com/MattMurn')}>
      <GitHubIcon className={`icon-button-child ${style}`} />
    </IconButton>
    </div>
    <div className={`footer-date-container ${style}`}>
      <p>MM {new Date().getFullYear()} </p>
    </div>
    </footer>
  )
}

export default Footer;