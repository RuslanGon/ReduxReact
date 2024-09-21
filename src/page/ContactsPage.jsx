import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { apiGetContacts } from "../redux/contacts/operations.js"

const ContactsPage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(apiGetContacts())
  }, [dispatch])

  return (
    <div>ContactsPage</div>
  )
}

export default ContactsPage