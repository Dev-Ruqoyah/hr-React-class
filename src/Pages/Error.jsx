import React from "react";
const Error = () => {
    return ( 
        <>
            <div className="container-sm">
                <h1 className="text-9xl font-bold text-center">404</h1>
                <h3 className="text-xl text-center">Error</h3>
                <p className="text-center text-3xl">Page not Found</p>
                <button className="bg-black text-white py-2 px-4 rounded-lg flex justify-center item-center">
                  <a href="/">
                    Login
                  </a>
                </button>
            </div>
        
        </>
     );
}
 
export default Error;