import {React ,useState }from "react";
import axios from 'axios';

const LinkedApi = () => {
    const[api, setApi]  = useState([]);

    
    let url = "https://jsonplaceholder.org/users";
    // const option = {
    //     method: 'GET',
    //     url : 'https://linkedin-data-scraper.p.rapidapi.com/person',
    //     header: {
    //         'x-rapidapi-key': 'b42e8f0a53mshc2c51fd9d9852f2p1d2977jsn72f57bd023b0',
    //         'x-rapidapi-host' : 'linkedin-data-scraper.p.rapidapi.com',
    //         'Content-Type': 'application/json'
    //     },
    //     data : {
    //         link : 'http://www.linkedin.com/in/ingmar-klein/'
    //     }
    // }
    const FetchApi = async () =>{
        try{
            const res = await axios.get(url);
            setApi(res.details)
            console.log(res);
            
        }catch(err){
            console.log(err);
            
        }
    }

    return ( 
        <>
            <button onClick={FetchApi} className="bg-yellow-500 text-white px-3 w-16 h-10">Fetch</button>
            <div>
                {api.map((apis,index) =>(
                    <div key={index}>
                        <p>{apis.firstname}</p>
                    </div>

                ))}
            </div>
        </>
     );
}
 
export default LinkedApi;