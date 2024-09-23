import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const Formik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      //   phoneNumber: "",
    },
    onSubmit: (values, { isSubmitting, resetForm }) => {
      console.log(values);

      isSubmitting = true;
      resetForm();
      alert("Users Successfully Created");
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is  required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required").min(4, "Atleast 4 characters").max(10, "Maximum of 10 characters"),
      // number: Yup.number().min(11,"Minimum is 11 characters ").required("Phone number is required"),
    }),
  });

  return (
    <>
      <div className=" container shadow md:w-2/5  mx-auto">
        <div className="flex items-center justify-start w-full px-6  my-12">
          <div className="w-full py-10">
            <h2 className="text-center text-2xl font-bold">Sign Up</h2>
            <form action="" onSubmit={formik.handleSubmit} className="mt-3">
              <div>
                <label className="text-md font-bold">First Name:</label> <br />
                <p className="text-red-500">
                  {formik.errors.firstName && formik.touched.firstName
                    ? formik.errors.firstName
                    : null}
                </p>
                <input
                  className={
                    formik.errors.firstName && formik.touched.firstName
                      ? `border py-1 px-3 w-full rounded-md focus:outline-red-800  border-red-500`
                      : `border py-1 px-3 w-full rounded-md focus:outline-emerald-800  border-emerald-500`
                  }
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <br />
              </div>

              <div>
                <label className="font-bold">Last Name:</label> <br />
                <p className="text-red-500">
                  {formik.errors.lastName && formik.touched.lastName
                    ? formik.errors.lastName
                    : null}
                </p>
                <input
                  className={
                    formik.errors.lastName && formik.touched.lastName
                      ? `border py-1 px-3 w-full rounded-md focus:outline-red-800  border-red-500`
                      : `border py-1 px-3 w-full rounded-md focus:outline-emerald-800  border-emerald-500`
                  }
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <br />
              </div>

              <div>
                <label className="font-bold">Email:</label> <br />
                <p className="text-red-500">
                  {formik.errors.email && formik.touched.email
                    ? formik.errors.email
                    : null}
                </p>
                <input
                  className={
                    formik.errors.email && formik.touched.email
                      ? `border py-1 px-3 w-full rounded-md focus:outline-red-800  border-red-500`
                      : `border py-1 px-3 w-full rounded-md focus:outline-emerald-800  border-emerald-500`
                  }
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <br />
              </div>

              <div>
                <label className="font-bold">Password:</label> <br />
                <p className="text-red-500">
                  {formik.errors.password && formik.touched.password
                    ? formik.errors.password
                    : null}
                </p>
                <input
                  className={
                    formik.errors.password && formik.touched.password
                      ? `border py-1 px-3 w-full rounded-md focus:outline-red-800  border-red-500`
                      : `border py-1 px-3 w-full rounded-md focus:outline-emerald-800  border-emerald-500`
                  }
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <br />
              
              <button
                type="submit"
                className="bg-emerald-700 w-full mt-3 py-2 rounded-md text-white hover:bg-emerald-800"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formik;
