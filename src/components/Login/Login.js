import React from "react";
import "./Login.css";
import { Formik, Form, ErrorMessage } from "formik";

import { Input } from "../../styled-comps/Wrapper";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 8) {
              errors.password = "Minimum length is 8";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            validating,
            valid,
          }) => (
            <Form className="formField">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                valid={touched.email && !errors.email}
                error={touched.email && errors.email}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-msg"
              />

              <Input
                type="password"
                name="password"
                placeholder="Enter Password"
                valid={touched.password && !errors.password}
                error={touched.password && errors.password}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-msg"
              />
              <button type="submit" disabled={isSubmitting}>
                {!isSubmitting ? <span>Login</span> : <span>Loading</span>}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
