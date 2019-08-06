import React from "react";
import "./Button.scss";
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <div
      className={props.class}
      value={props.value}
      style={{
        backgroundImage: `url(${props.imageName})`,
        minWidth: `${props.size}px`,
        backgroundSize: `${props.bgSize}%`
      }}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

Button.propTypes = {
  value: PropTypes.number,
  size: PropTypes.number,
  bgSize:PropTypes.number,
  imageName: PropTypes.any,
  onClick: PropTypes.func,
  children:  PropTypes.any
};

Button.defaultProps = {
  bgSize: 50,
};

