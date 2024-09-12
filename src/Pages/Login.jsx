import React, { useState } from "react";

const Login = () => {
    const [useremail, setUseremail] = useState("");
    const [userpassword, setUserpassword] = useState("");
    const [users, setUsers] = useState([]);


    // const handeForm = (e) =>{
    //     console.log(e.target.value); 
    //     setUseremail(e.target.value)
        
    // }
    // const handeForm = (e) =>{
    //     console.log(e);
        
    //     // const users = {email:useremail,password:userpassword};
    //     setUseremail(e.target.value)

    // }
    // const handForm = (e) =>{
    //     console.log(e);
        
    //     // const users = {email:useremail,password:userpassword};
    //     setUserpassword(e.target.value)

    // }

    // const handleForm = (email,password) =>{
    //   setUseremail(email.target.value)
    //   setUserpassword(password.target.value)
      
    // }

    // const handleForm = (e) =>{
    //   // e.preventDefault();
    //   const setUsers = {email:useremail,password:userpassword};
    //   // setUsers([...users,users]);
    //   console.log(users);
    //   console.log(useremail);
    //   console.log(userpassword);
    //   // \end{code}

    // }
    // const userDetails =()  =>{

    //   const users = JSON.parse(localStorage.getItem('users'));
    //   if(users) {
    //     setUsers(users);
    //     }
    //     }
        
    // }
    // const handleForm = () =>{
    //   // localStorage.setItem("users" : users);
    // }
     const valuepassword = localStorage.setItem("Password", userpassword)    
     if(valuepassword){
      setUsers(value);
      console.log(value);
      
  
     }

     const valueemail = localStorage.setItem("Email", useremail)    
     if(valueemail){
      setUsers(value);
      console.log(value);
      
  
     }
    return (
      <>
        <div className="container-sm h-screen bg-slate-200">
          <div className="form-container flex justify-center items-center py-24 ">
            <div className="shadow-xl rounded-lg md:w-2/5 w-4/5 flex justify-center items-center mx-auto pb-4">
              <form action="" className="w-full  p-5">
                <h1 className="text-center text-5xl font-bold">Login</h1>
                <div className=" flex flex-col my-5  ">
                  <label htmlFor="email" className=" ">Email:</label>
                  <input
                    type="text"
                    className="bg-transparent py-3  border-2 border-black rounded-md px-3 " onChange={(e) =>setUseremail(e.target.value)}
                  />
                  <p>{useremail}</p>
                </div>
                <div className=" flex flex-col my-6 ">
                  <label htmlFor="email" className=" ">Password:</label>
                  <input
                    type="text"
                    className="bg-transparent py-3  border-2 border-black rounded-md  px-3" onChange={(e) =>setUserpassword(e.target.value)}
                  />
                  <p>{userpassword}</p>

                </div>
                <button onClick={(e) => handleForm(e)} className="bg-black text-white  w-full py-2 rounded-lg">Login</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;
