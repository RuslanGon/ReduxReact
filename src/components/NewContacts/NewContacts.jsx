
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from '../../page/LoginPage.module.css'
import { useDispatch } from "react-redux";
import { apiNewContacts } from "../../redux/contacts/operations.js";

const newContactsSchema = Yup.object({
  name: Yup.string().required("name is required"),
  number: Yup.string().required("number is required"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  number: ''
};

const NewContacts = () => {

const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(apiNewContacts(values))
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={newContactsSchema}
    >
      <Form className={css.form}>
        <h2>Add new contacts</h2>
        <br />
        <label>
          <span>name:</span>
          <br />
          <Field type="text" name="name" placeholder="name" />
          <ErrorMessage name="name" component="span" />
          <br />
        </label>
        <br />
        <label>
          <span>number:</span>
          <br />
          <Field type="text" name="number" placeholder="number" />
          <ErrorMessage name="number" component="span" />
          <br />
        </label>
        <br />
      <button type="submit">Create new contacts 👱</button>
      </Form>
    </Formik>
  );
};

export default NewContacts;



