import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./TodoForm.module.css";
import { addToDo } from "../../reduxStore/actions";
import { nanoid } from "nanoid/non-secure";
import { useDispatch } from "react-redux";

const initialValues = { text: "" };

const validationSchema = Yup.object().shape({
  text: Yup.string()
    .min(3, "To short text")
    .max(15, "To long text")
    .required("Enter Text"),
});

export const TodoForm = ({ createTodo }) => {
  const dispatch = useDispatch();

  const submitForm = (value, actions) => {
    dispatch(addToDo({ text: value.text, id: nanoid(), createAt: Date.now() }));

    createTodo(value.text);
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
          <button type="submit">Create ToDo</button>
        </Form>
      </Formik>
    </div>
  );
};
