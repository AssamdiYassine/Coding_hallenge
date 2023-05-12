import React,{useEffect as UseEffect , useState as UseState} from "react";
import { BrowserRouter as Router,Routes,Route, RouterProvider,Navigate } from "react-router-dom";
import Layout from "../layout/layout";
import Dashboard from "./dashboard";
 
function index() {
  const [image, setImage] = UseState("");

  return (
    <>
    <Router>
     
      <Routes>
      
        <Route path="/" exact={true} element={ <Layout image={image}><Dashboard setImage={setImage} /></Layout>}>

         
  
        </Route>
 
      
      </Routes>
    
    </Router>
    
       
     
    </>
  );
}

export default index;
