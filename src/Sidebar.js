import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul>
      <li>
        <Link to="/Cheer">Cheer</Link>
      </li>
      <li>
        <Link to="/Dance">Dance</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
