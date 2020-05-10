import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({ name }) => {
  const [structure, setStructure] = useState([]);

  const getStructure = async (_) => {
    const data = await fetch(`https://api.moncad.com.au/getStructure/${name}`);
    const json = await data.json();
    setStructure(json);
  };

  useEffect(() => {
    getStructure();
  }, []);

  return <MenuItem structure={structure}></MenuItem>;
};

const MenuItem = ({ structure }) => {
  function onMyClick() {
    console.log("clicked");
  }
  return (
    <div>
      {structure.map((item) => (
        <ul onClick={onMyClick}>
          {item.children.length === 0 && (
            <Link to={item.path.split("public")[1]}>{item.name}</Link>
          )}
          {item.children.length > 0 && (
            <div>
              <p>{item.name}</p>
              <MenuItem structure={item.children}></MenuItem>
            </div>
          )}
        </ul>
      ))}
    </div>
  );
};

export default Menu;
