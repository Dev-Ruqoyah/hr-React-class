import React, { useState } from "react";
const Faq = ({header,body}) => {
const [isOpen,setIsOpened] = useState(true);

  return (
    <>
      <div className="container mx-auto">
        <div className=" text-white py-1  ">
          <div className="flex justify-between bg-slate-800 items-center px-2" onClick={ () =>setIsOpened(!isOpen)}>
            <h1 className=" py-4 px-4 font-semibold text-xl">
              Q: {header}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={isOpen? `size-6`:` size-6 rotate-45`}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div className={isOpen?`bg-slate-600 py-12 px-7`:`hidden`}>{body}</div>
        </div>
      </div>
    </>
  );
};

export default Faq;
