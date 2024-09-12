import React from "react";
import Faq from "./Faq";
const FaqContent = () => {

    const FaqArray = [
        {
            id: 1,
            heading: "What is netflix?",
            body:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate itaque saepe ducimus fugit perspiciatis repellendus quos temporibus facilis ex, quo reiciendis ut doloribus totam officia repellat nostrum vero? Quaerat, vel."
        },
        {
            id: 2,
            heading: "Where to watch?",
            body:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate itaque saepe ducimus fugit perspiciatis repellendus quos temporibus facilis ex, quo reiciendis ut doloribus totam officia repellat nostrum vero? Quaerat, vel."
        },
        {
            id: 3,
            heading: "How do i get started?",
            body:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate itaque saepe ducimus fugit perspiciatis repellendus quos temporibus facilis ex, quo reiciendis ut doloribus totam officia repellat nostrum vero? Quaerat, vel."
        }
    ]
    return ( 
        <>
        
        <div>
           {
           FaqArray.map(({heading,body},index) => (
                <Faq key={index}  header={heading} body={body} />
           ))
           } 
        </div>
        </>

     );
}
 
export default FaqContent;