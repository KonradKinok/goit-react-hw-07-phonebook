import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/operations";
import * as globalFunctions from "../../globalFunctions/functions";
import scss from "./SeparateContact.module.scss";

interface Contact {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
}

interface SeparateContactProps {
  contact: Contact;
}

const SeparateContact: React.FC<SeparateContactProps> =  ({ contact })=> {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  // const handleDelete = () => console.log("uruchom delete");
    return (
      <li className={scss.containerContact} key={contact.id} >
        <div className={scss.containerNameDate}>
          <div>
            <p>{contact.name}</p>
            <p className={scss.data}>{globalFunctions.formatDateAndHour(contact.createdAt)}</p>
          </div>
          <div >
            <p>:{contact.phone}</p>
          </div>
        </div>
        <div >
          <button
            type="button"
            onClick={handleDelete}>
            Delete
          </button>
        </div>
      </li>
    );
};

export default SeparateContact;