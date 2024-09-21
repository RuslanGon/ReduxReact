
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from '../page/LoginPage.module.css'
import { useDispatch } from "react-redux";
import { apiLogin } from "../redux/auth/operations.js";


const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("email is required"),
  password: Yup.string().required("password is required"),
});

const FORM_INITIAL_VALUES = {
  email: "",
  password: ''
};

const LoginPage = () => {

const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(apiLogin(values))
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form className={css.form}>
        <h2>Login user</h2>
        <br />
        <label>
          <span>email:</span>
          <br />
          <Field type="email" name="email" placeholder="email" />
          <ErrorMessage name="email" component="span" />
          <br />
        </label>
        <br />
        <label>
          <span>password:</span>
          <br />
          <Field type="text" name="password" placeholder="password" />
          <ErrorMessage name="password" component="span" />
          <br />
        </label>
        <br />
      <button type="submit">Login user 👱</button>
      </Form>
    </Formik>
  );
};

export default LoginPage;


