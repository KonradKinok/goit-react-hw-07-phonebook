import React from "react";
import {  useSelector } from "react-redux";
import { selectContacts } from "../redux/selectors";
// import {getStatusFilter} from "../redux/selectors"
import SeparateContact from "../SeparateContact/index";
import { RootState } from "../redux/store";
import { selectVisibleContacts } from "../redux/selectors";
interface Contact {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
}

const ContactList: React.FC = () => {
    const contacts = useSelector(selectContacts);
    console.log("ContactList -> contacts", contacts)
    // const { items, isLoading, error } = useSelector((state: RootState) => state.contacts);
    // console.log("ContactList -> items", items)
    
//   const statusFilter = useSelector(getStatusFilter);
  const filteredContacts = useSelector(selectVisibleContacts);

    return (
        <div>
            <ul>
                {filteredContacts.map((contact) => (
                    <SeparateContact
                        key={contact.id}
                        contact={contact}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ContactList;