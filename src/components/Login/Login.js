import React, { useContext, useState } from "react";
import "./Login.css";
import { Formik, Form, ErrorMessage } from "formik";
import { ErrorMessageTwo, Input } from "../../styled-comps/Wrapper";
import { AuthenticationContext } from "../../Context/AuthenticationContext";

const Login = (props) => {
  const { login } = useContext(AuthenticationContext);
  const [error, setError] = useState("");
  //console.log("hey", props.location.redirectRoute);

  return (
    <div className="login">
      <div className="login__container">
        <ErrorMessageTwo errorShow={error === "" ? false : true}>
          {error}
        </ErrorMessageTwo>
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
            setError("");
            //console.log(JSON.stringify(values, null, 2));
            login(values.email, values.password)
              .then((data) => {
                //console.log("After then", data);
                props.history.push(
                  props.location.redirectRoute
                    ? props.location.redirectRoute.old.pathname
                    : "/"
                );
              })
              .catch((e) => {
                //console.log("Error", e);
                setError(e.response.data.message);
              });
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
                {!isSubmitting ? <span>Login</span> : <span>Loading...</span>}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
