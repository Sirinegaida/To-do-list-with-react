import React from "react";
import { PropTypes } from "prop-types";

const Header = ({ title }) => {
  const heading = {
    textAlign: "center",
  };
  return (
    <header>
      <h2 style={heading}>{title}</h2>
    </header>
  );
};

Header.defaultProps = {
  title: " task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
