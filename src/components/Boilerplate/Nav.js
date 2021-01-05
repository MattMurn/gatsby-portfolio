import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '../IconButton/IconButton';
import { Link } from '@reach/router';

const Nav = ({style="main", nextLocation, previousLocation}) => {
  return (
    <nav className="nav-container">
    {previousLocation && (
      <Link aria-label="location link" to={previousLocation}>
        <IconButton ariaText="previous location" additionalClasses={ "icon-button--previous"}>
          <ArrowUpwardIcon className={`icon-button-child--nav ${style}`} />
        </IconButton>
      </Link>
    )}
    {nextLocation && (
      <Link aria-label="location link" to={nextLocation}>
        <IconButton ariaText="next location" additionalClasses={ "icon-button--next"}>
          <ArrowDownwardIcon className={`icon-button-child--nav ${style}`} />
        </IconButton>
      </Link>
    )}
  </nav>
  );
}

export default Nav;