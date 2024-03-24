import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactForm({ handleSubmit }) {
  const phonePattern = /^\d{3}-\d{2}-\d{2}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    number: Yup.string()
      .matches(phonePattern, "Wrong phone number!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="number">Number</label>
        <Field type="text" id="number" name="number" />
        <ErrorMessage name="number" component="div" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
