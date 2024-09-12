import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";





const Api = () => {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true);

  
// const[users,setUsers] = useState([]);
// const saveData = localStorage.getItem(userpassword);
// console.log(saveData);

// if(saveData){
//   setUsers(JSON.parse(saveData));
// }
// const[users,setUsers] = useState([]);
// const saveData = localStorage.getItem(userpassword);
// if(saveData){
//   setUsers(saveData);
// }
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


  const emailloc = localStorage.getItem('Email')
  const passwordloc = localStorage.getItem('Password')
  // console.log(email);
  if(emailloc){
    setEmail[emailloc];

  }else if(passwordloc){
      setPassword[passwordloc]
  }
//  console.log(users);
 
 
  
  // console.log(setUsers[email]);
  
  // console.log( localStorage.getItem('Email'));
  // console.log(password);
  

  // }else if(password){
  //   setUser[password]
  // }

  

  let url = "https://jsonplaceholder.org/users";
  useEffect(()=>{
    const fetchApi = async () => {
        try {
          const res = await axios.get(url);
          setLoading(false)
          setUser(res.data);
          console.log(res.data);
    
          //    console.log( JSON.stringify(res));
        } catch (err) {
          console.log(err);
        }
      };
      fetchApi();
      
  },[])

//   [] ---> onload

  return (
    <>
   
    {
        loading ? <div>Loading...
           <p>{emailloc}</p>
           <p>{passwordloc}</p>
        </div> :
        <div className="container mx-auto ">
          
        <div
        //   onClick={fetchApi}
          className="bg-black text-white px-6 rounded-md py-2 flex justify-center w-1/4 items-center mx-8 mt-3"
        >
          Users
        </div>

        <div  className="grid gap-5 md:grid-cols-4 p-10">
            {
                user.map(({firstname,lastname,email,address,id},index) =>(
                    <div key={index} className="bg-slate-100 hover:my-2 transition-all hover:bg-slate-200 p-5  shadow-md rounded-lg cursor-pointer">
                        <p className="text-center bg-black w-20 rounded-lg py-1  text-white">User {id}</p>
                        <p className="font-bold">Name: {firstname +' ' + lastname}</p>
                        <p className="font-semibold"> Address: {address.street}</p>
                        <p className="font-semibold">Email: {email}</p>
                    </div>
                ))
            }
       

        </div>

      </div>
  
    }
     
    </>
  );
};

export default Api;
