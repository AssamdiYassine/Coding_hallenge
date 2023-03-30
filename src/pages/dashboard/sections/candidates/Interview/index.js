import React from 'react'
import people from './people.json'
import ReactPaginate from 'react-paginate'
function index() {
 
  return (
    <div className="bg-white px-10 ">
    
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="  border-b-[1px] overflow-hidden  sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y ">
                  {people.map((person) => (
                    <tr key={person.name} >
                      <td className="px-6 py-4 whitespace-nowrap  ">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.name}
                            </div>
                            <div className="text-sm text-gray-500 flex">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 mr-1"
                              >
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                              </svg>

                              {person.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.title}
                        </div>
                        <div className="text-sm text-gray-500 flex pr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#67D09D"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                              clipRule="evenodd"
                            />
                          </svg>

                          {person.department}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap    justify-end flex text-sm font-medium">
                        <div className=" 	flex  my-3">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900 "
                        >
                          <svg
                            className="w-5  "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            id="angle-right"
                          >
                            <path
                              fill="#A1A4AC"
                              d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
                            ></path>
                          </svg>
                        </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            

            </div>
            <div className='flex justify-between align-middle '>
            <button
                  type="button"
                  className="rounded-full text-gray-700 flex p-6 "
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
</svg>


                  
Previous
                   
                 </button>
           
            <ReactPaginate
                previousLabel={""}
                nextLabel={""}
                breakLabel={"..."}
                pageCount={5}
                marginPagesDisplayed={2}
                pageLimit={1}
                totalRecords={1}
                onPageChange={2}
                containerClassName={"pagination flex   text-gray-700  "}
                pageClassName={"page-item  p-6   "}
                pageLinkClassName={"page-link  "}
                previousClassName={"page-item "}
                previousLinkClassName={"page-link "}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active text-violet-700   border-t-[1.5px] border-violet-700   "}
              />
                 <button
                  type="button"
                  className="rounded-full  text-gray-700 flex p-6 "
                >Next
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>

                 </button>
               </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
