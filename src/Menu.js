import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ name }) => {
  const [structure, setStructure] = useState([]);

  const getStructure = async _ => {
    const data = await fetch(`http://localhost:8080/getStructure/${name}`);
    const json = await data.json();
    setStructure(json);
  };

  useEffect(() => {
    getStructure();
  }, []);

  return <MenuItem structure={structure}></MenuItem>;
};

const MenuItem = ({ structure }) => {
  return (
    <div>
      {structure.map(item => (
        <div>
          <Link to={item.path.split("public")[1]}>{item.name}</Link>
          {item.children.length > 0 && (
            <MenuItem structure={item.children}></MenuItem>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
