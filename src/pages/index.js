import React from "react";
import { BrowserRouter as Router,Routes,Route, RouterProvider,Navigate } from "react-router-dom";
import Layout from "../layout/layout";
import Dashboard from "./dashboard";
import Interview from './dashboard/sections/candidates/Interview'
import Applied from './dashboard/sections/candidates/Applied'
import Disqualified from './dashboard/sections/candidates/Disqualified'
import Offer from './dashboard/sections/candidates/Offer'
import Phone from './dashboard/sections/candidates/Phone'
function index() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <Layout>
  //         <Dashboard />
  //       </Layout>
  //     ),
  //     children: [
  //       {
  //         path: "/Interview",
  //         element: <Interview />,
  //       },
  //     ]
  //   },
  // ]);

  return (
    <>
    <Router>
     
      <Routes>
    
        <Route path="/" element={ <Layout><Dashboard /></Layout>}>
          
        <Route path="Interview" element={  <Interview />}/>
        <Route path="Applied" element={  <Applied />}/>
        <Route path="Phone" element={  <Phone />}/>
        <Route path="Offer" element={  <Offer />}/>
        <Route path="Disqualified" element={  <Disqualified />}/>
        </Route>
      
      </Routes>
    
    </Router>
    
    {/* <RouterProvider router={router} /> */}
      
     
    </>
  );
}

export default index;
