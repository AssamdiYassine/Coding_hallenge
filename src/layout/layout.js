import React from "react";
import NavBar from "../component/Navbar"
 function layout(props) {
  const { children , image} = props;
  return (
    <div className="d-flex flex-column flex-root">
                <NavBar image={image} />
                {children}
          </div>
 
  );
}

export default layout;
