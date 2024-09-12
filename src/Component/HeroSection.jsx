import React from "react";
import hero from '../assets/images/netflix.jpg'
const HeroSection = () => {
    const bgStyle = {
        background : `url(${hero})`
    }
    return ( 
        <div className= {`h-[90vh] relative`} style={bgStyle} >
            <div className="bg-black opacity-60 absolute inset-0"></div>

        </div>
     );
}
 
export default HeroSection;