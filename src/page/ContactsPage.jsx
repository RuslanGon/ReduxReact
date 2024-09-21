import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apiGetContacts } from "../redux/contacts/operations.js"
import { selectContacts, selectContactsIsError, selectContactsIsLoading } from "../redux/contacts/selectors.js"
import Loader from "../components/Loader/Loader.jsx"
import Error from "../components/Error/Error.jsx"

const ContactsPage = () => {

  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)
  const isLoading = useSelector(selectContactsIsLoading)
  const isError = useSelector(selectContactsIsError)

  useEffect(() => {
    dispatch(apiGetContacts())
  }, [dispatch])

  return (
    <div>
      {Array.isArray(contacts) && contacts.length === 0 && <li>Not contacts</li>}
      {isLoading && <Loader />}
      {isError && <Error />}
      <ul>
      {Array.isArray(contacts) && contacts.map(item => <li key={item.id}>
        <h2>name: {item.name}</h2>
        <p>number: {item.number}</p>
      </li> )}
      </ul>
     
    </div>
  )
}

export default ContactsPage