import React from "react";
import { Link,Outlet } from "react-router-dom";
import people from '../candidates/Interview/people.json'

import { useLocation as UseLocation } from "react-router-dom";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Candidates() {
  let location = UseLocation();


  const navigation = [
    { name: "Applied", href: "/Applied", current: 0 },
    { name: "Phone Screening", href: "/Phone", current: 0 },
    { name: "Interview", href: "/Interview", current: people.length },
    { name: "Offer", href: "/Offer" , current: null },
    { name: "Disqualified", href: "/Disqualified" , current: null },
  ];
 

  return (
    <>
      <div className="bg-white px-10 ">
        <div className="mt-9 mb-7 ml-2">
        <h1 className="text-xl" >Candidates</h1>

        </div>
        <div className="hidden  sm:block border-b-[1px] mb-1">
          <div className="flex space-x-4 ">
            {navigation.map((item) => (
              <Link
                to={item.href}
                key={item.name}
                href={item.href}
                className={classNames(
                  location.pathname === item.href
                    ? "text-violet-700   border-b-[1.5px] border-violet-700 "
                    : "  text-slate-500 hover:bg-violet-700 hover:text-white rounded-md",
                  " px-3 py-2 text-sm font-medium"
                )}
                aria-current={item.current ? "/" : undefined}
              >
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
              </Link>
            ))}
           
          </div>
        </div>
        <div>
 
        </div>
      </div> <Outlet/>
    </>
  );
}

export default Candidates;
