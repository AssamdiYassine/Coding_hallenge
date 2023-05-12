import React, { useEffect as UseEffect, useState as UseState } from "react";
import { gapi } from 'gapi-script';

import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Information(props) {
  const { profil ,setTo,setSubject,setBodyText , handelSend} = props;

  const [showModal, setShowModal] = UseState(false);
 

 

 
  return (
    <>
      <div
        className="flex flex-row pt-10 pb-6 px-10 "
        style={{ backgroundColor: "#F9FAFC" }}
      ></div>
      <div
        className="lg:flex lg:items-center lg:justify-between pb-10 px-10"
        style={{ backgroundColor: "#F9FAFC" }}
      >
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7  sm:truncate sm:text-3xl sm:tracking-tight">
            Welcome <span className="uppercase">{profil.name}</span>
          </h2>
          <h3>Email : {profil.email}</h3>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="sm:ml-3 ">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-violet-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => setShowModal(true)}
            >
              <div className="px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>
              <span>Compose</span>
            </button>
          </span>

          {/* Dropdown */}
          <Menu as="div" className="relative ml-3 sm:hidden">
            <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
              More
              <ChevronDownIcon
                className="-mr-1 ml-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Edit
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      View
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="   justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div
                className="   border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                style={{ width: "500px" }}
              >
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">New Message</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex align-middle mb-5">
                    <input
                      type="email"
                      id="helper-text"
                      aria-describedby="helper-text-explanation"
                      className="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600  dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="To.."
                      onChange={(e)=>{setTo(e.target.value)}}
                    />
                  </div>
                  <div className="flex align-middle mb-5">
                    <input
                      type="email"
                      id="helper-text"
                      aria-describedby="helper-text-explanation"
                      className="border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600  dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Subject"
                      onChange={(e)=>{setSubject(e.target.value)}}
                    />
                  </div>

           
                  <textarea
                    id="message"
                    rows="7"
                    className="block p-2.5 w-full text-sm  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   dark:border-gray-600  dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                    onChange={(e)=>{setBodyText(e.target.value)}}
                  ></textarea>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {handelSend();setShowModal(false)}}
                  >
                    Send email
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
