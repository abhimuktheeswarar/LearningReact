import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Streamer
        </Link>
        <Link to="/" className="right item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    );
  }
}

export default Header;
