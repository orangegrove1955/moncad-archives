import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-links">
        <span>
          <Link to="/Cheer">Cheer</Link>
        </span>
        <span>
          <Link to="/Dance">Dance</Link>
        </span>
      </div>
    </div>
  );
};

export default Landing;
