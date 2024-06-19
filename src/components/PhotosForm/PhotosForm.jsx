import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./PhotosForm.module.css";

const initialValues = { text: "" };

const validationSchema = Yup.object().shape({
  text: Yup.string()
    .min(3, "To short text")
    .max(15, "To long text")
    .required("Enter Text"),
});

export const PhotosForm = ({ onSubmit }) => {
  const submitForm = (value, actions) => {
    onSubmit(value.text);
    actions.resetForm();
  };

  return (
    <div className={s.form_box}>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={validationSchema}
      >
        <Form>
          <Field type="text" name="text" placeholder="Enter your ToDo" />
          <ErrorMessage className={s.error} name="text" component="span" />
          <button type="submit" className={s.btn}>
            Search photos
          </button>
        </Form>
      </Formik>
    </div>
  );
};
