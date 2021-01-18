import React from "react";
import PropTypes from "prop-types"
import '../Boilerplate/main.scss';

 const IconButton = ({onClick=null, additionalClasses, ariaText, children}) => {
   return (
    <button aria-label={ariaText} className={`icon-button ${additionalClasses ? additionalClasses : ""}`} onClick={onClick}>
      {children}
    </button>
    )
 }

 export default IconButton;

 IconButton.propTypes = {
   onClick: PropTypes.func.isRequired,
   additionalClasses: PropTypes.string,
   ariaText: PropTypes.string.isRequired,
   children: PropTypes.element.isRequired,
 }