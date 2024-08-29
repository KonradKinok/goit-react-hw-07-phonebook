import React from "react";
import {  useSelector } from "react-redux";
import { selectVisibleContacts } from "../redux/selectors";
import SeparateContact from "../SeparateContact/index";

interface Contact {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
}

const ContactList: React.FC = () => {
    const filteredContacts = useSelector(selectVisibleContacts);

    return (
        <div>
            <ul>
                {filteredContacts.map((contact:Contact) => (
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