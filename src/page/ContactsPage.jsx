import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apiDeleteContacts, apiGetContacts } from "../redux/contacts/operations.js"
import { selectContacts, selectContactsIsError, selectContactsIsLoading } from "../redux/contacts/selectors.js"
import Loader from "../components/Loader/Loader.jsx"
import Error from "../components/Error/Error.jsx"
import NewContacts from "../components/NewContacts/NewContacts.jsx"

const ContactsPage = () => {

  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)
  const isLoading = useSelector(selectContactsIsLoading)
  const isError = useSelector(selectContactsIsError)

  useEffect(() => {
    dispatch(apiGetContacts())
  }, [dispatch])

  const deleteContacts = (contactId) => {
    dispatch(apiDeleteContacts(contactId));
  };

  return (
    <div>
      <NewContacts />
      {isLoading && <Loader />}
      {isError && <Error />}
      <ul>
      {Array.isArray(contacts) && contacts.length === 0 && <li>Not contacts</li>}
      {Array.isArray(contacts) && contacts.map(item => <li key={item.id}>
        <h1><b>Name: {item.name}</b> <button onClick={() => deleteContacts(item.id)} type="button">Delete contact 🧨</button></h1>
        <p>Number: {item.number}</p>
      </li> )}
      </ul>
     
    </div>
  )
}

export default ContactsPage