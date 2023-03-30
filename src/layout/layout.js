import React from "react";
import NavBar from "../component/Navbar"
 function layout(props) {
  const { children } = props;
  return (
    <div className="d-flex flex-column flex-root">
                <NavBar/>
                {children}
          </div>
 
  );
}

export default layout;
