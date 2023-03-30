import React from 'react'
import { Circles } from "react-loader-spinner";

function index() {
  return (
    <div className="bg-white px-10 justify-center flex mt-9  ">
      <Circles
        height="80"
        width="80"
        radius="9"
        color="#6D29D9"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  )
}

export default index
