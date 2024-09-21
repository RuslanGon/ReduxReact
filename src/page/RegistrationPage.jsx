import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from '../page/RegistrationPage.module.css'
import { useDispatch } from "react-redux";
import { apiRegistor } from "../redux/auth/operations.js";


const registorSchema = Yup.object({
  name: Yup.string().required("name is required"),
  email: Yup.string().email("Invalid email format").required("email is required"),
  password: Yup.string().required("password is required"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  password: ''
};

const RegistrationPage = () => {

const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(apiRegistor(values))
    actions.resetForm();
  };

  // const formData = {
  //   email: "fora@gmail.com",
  //   name: "fora",
  //   password: "fora777"
  // };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={registorSchema}
    >
      <Form className={css.form }>
        <h2>Registor new user</h2>
        <br />
        <label>
          <span>name:</span>
          <br />
          <Field type="text" name="name" placeholder="name" />
          <ErrorMessage name="name" component="span" />
        </label>
        <br />
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
      <button type="submit">Registor user 👱</button>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;

