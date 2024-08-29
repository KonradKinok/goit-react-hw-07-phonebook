import React from "react";
import * as globalFunctions from "../../globalFunctions/functions";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/operations";
import { AppDispatch } from "../redux/store";
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

  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = () => dispatch(deleteContact(contact.id));

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