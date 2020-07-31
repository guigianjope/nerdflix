import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({ className, href, children }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

ButtonLink.defaultProps = {
  href: '/',
  className: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
 index.css
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

:root {
  --primary: #2A7AE4;
  --black: #000000;
  --blackLighter: #9E9E9E;
  --grayLight: #F5F5F5;
  --grayMedium: #e5e5e5; 
  --white: #FFFFFF;
  --frontEnd: #6BD1FF;
  --backEnd: #00C86F;
}

html,
body {
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
} 