import React from "react";
import { Form, Formik } from "formik";
import YouTuberScreen from "./YouTuberScreen";
import * as yup from "yup";

export type loginProps = {
  url: string;
  domain: string;
  backhalf: string;
};
const initialValues: loginProps = {
  url: "",
  domain: "https://go2.video/",
  backhalf: "",
};
const validationSchema = yup.object().shape({
  url: yup.string().url("Please enter a valid URL").required("URL is required"),
  domain: yup.string().required("Domain is required"),
  backhalf: yup.string().required("backhalf is required"),
});

const YouTuberScreenWrapper = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(loginProps) => (
          <Form>
            <YouTuberScreen loginProps={loginProps} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default YouTuberScreenWrapper;