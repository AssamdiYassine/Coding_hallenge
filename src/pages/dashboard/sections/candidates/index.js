import React , { useEffect}from "react";
import { Link,Outlet } from "react-router-dom";
import people from '../candidates/Interview/people.json'
import Interview from './Interview/index'

import { useLocation as UseLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Candidates() {
  let location = UseLocation();
 

  const navigation = [
 
    { name: "Inbox",   current: people.length }
 
  ];
 

  return (
    <>
 

      <div className="bg-white px-10 ">
        <div className="mt-9 mb-7 ml-2">
   

        </div>
        <div className="hidden  sm:block border-b-[1px] mb-1">
          <div className="flex space-x-4 ">
            {navigation.map((item) => (
            
                <div className="p-1 flex ">
                  <div  className="pr-4 ">
                  {item.name}

                  </div>
                  {
                    item.current !=null   ?   <div 
                   
                    className={classNames(
    
                     location.pathname === item.href  
                       ? "text-violet-700 text-dark  bg-violet-100 border-b-[2px]  "
                       : "text-dark   bg-slate-100    rounded-md"
                  ,
                     " px-2  rounded-md"
                     
                   )}
                   >
                     {item.current}
                   </div>
                   : item.current
                  }
               
                </div>
       
            ))}
           
          </div>
        </div>
        <div>
          < Interview/>
 
        </div>
      </div>
      
       <Outlet/>
    </>
  );
}

export default Candidates;
