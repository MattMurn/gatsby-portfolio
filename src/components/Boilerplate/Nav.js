import React from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link } from '@reach/router';

const Nav = ({style="main", nextLocation, previousLocation}) => {
  return (
    <nav className="nav-container">
    {previousLocation && (
      <Link aria-label="location link" to={previousLocation}>
          <ArrowUpwardIcon className={`icon-button-child--nav ${style} icon-button--previous `} />
      </Link>
    )}
    {nextLocation && (
      <Link aria-label="location link" to={nextLocation}>
          <ArrowDownwardIcon className={`icon-button-child--nav ${style} ${previousLocation && nextLocation ? 'icon-button--next' : 'icon-button--previous'} `} />
      </Link>
    )}
  </nav>
  );
}

export default Nav;