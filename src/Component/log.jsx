import React from "react";
const Log = () => {
    const handeForm = (e) =>{
        console.log(e.target.value);
        
    }
    return ( 
        <>
            <form action="" onSubmit={handeForm}>
                <input className="border" type="email" />
                <input className="border" type="text" />

                <button type="submit">Submit</button>
            </form>
        </>
     );
}
 
export default Log;