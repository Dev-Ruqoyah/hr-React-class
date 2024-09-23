import { useFormik } from "formik";
import * as Yup from "yup"
import React from "react";
const Formik1 = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    onSubmit:(values,{isSubmitting,resetForm}) =>{
      console.log(values);
      resetForm();
      
    },
    validationSchema:Yup.object({
      fullName:Yup.string().required("Fullname is required"),
      email:Yup.string().email("Invalid Email").required("Email is required"),
      password:Yup.string().required("Password is required").min(4,"Minimum of 4 characters").max(10,"Maximum of 10 characters")
    })
  });
  return (
    <>
      <div className="container-au bg-black mx-auto">
        <div className="form container mx-auto ">
          <div className="form-container grid md:grid-cols-2 grid-cols-1 h-screen py-6">
            <div className="bg-emerald-300 md:block "></div>
            <div className="forme bg-emerald-950  flex flex-col  justify-center py-5 text-white">
              <h4 className="text-xl font-bold text-center">Sign Up</h4>
              <form action="" className="mt-8" onSubmit={formik.handleSubmit}>

                <div className="flex flex-col px-16">
                  <label htmlFor="fullName" className="font-bold">
                    FULLNAME
                  </label>
                  
                  <input
                    type="text"
                    name="fullName"
                    id=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    placeholder="Enter your full name"
                    className={formik.errors.fullName && formik.touched.fullName?`bg-transparent border-0 border-b py-2 px-2 outline-0 border-red-500`:`bg-transparent border-0 border-b py-2 px-2 outline-0`}
                  />
                  <p className="text-red-500 px-2">{formik.errors.fullName && formik.touched.fullName?formik.errors.fullName:null}</p>
                </div>

               

                <div className="flex flex-col px-16 mt-6">
                  <label htmlFor="email" className="font-bold">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Enter Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={formik.errors.email && formik.touched.email?`bg-transparent border-0 border-b py-2 px-2 outline-0 border-red-500`:`bg-transparent border-0 border-b py-2 px-2 outline-0`}
                  />
                  <p className="text-red-500">{
                    formik.errors.email && formik.touched.email ? formik.errors.email:null
                    }</p>
                </div>

                <div className="flex flex-col px-16 mt-6">
                  <label htmlFor="password" className="font-bold">
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    name="password"
                    id=""
                    placeholder="Enter password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={formik.errors.password && formik.touched.password?`bg-transparent border-0 border-b py-2 px-2 outline-0 border-red-500`:`bg-transparent border-0 border-b py-2 px-2 outline-0`}
                  />
                  <p className="text-red-500 px-2">{
                    formik.errors.password && formik.touched.password ? formik.errors.password: null
                    }</p>
                </div>
                <div className="px-16 mt-6 flex items-center">
                  <button className="text-center text-emerald-950 bg-emerald-300 w-full py-2 hover:bg-emerald-200" type="submit">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formik1;
