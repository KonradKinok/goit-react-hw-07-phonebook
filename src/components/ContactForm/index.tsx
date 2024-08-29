import React,{ FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from 'nanoid'
import { addContact } from "../redux/operations";
import { selectContacts } from "../redux/selectors";
import { AppDispatch } from "../redux/store";
import scss from "./ContactForm.module.scss"

const ContactForm: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const contacts = useSelector(selectContacts);
    
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const  form  = ev.target as HTMLFormElement;
        const formElements = form.elements as typeof form.elements & {
            name: HTMLInputElement;
            phone: HTMLInputElement;
            };
        const newName = formElements.name.value;
        const newPhone=formElements.phone.value;
        
        const contactExists = contacts.some(
            (existingContact) =>
                existingContact.name === newName ||
                existingContact.phone === newPhone,
        );

        if (contactExists) {
            window.alert(`${newName} or ${newPhone} is already in contacts`);
            return;
        }
        
        dispatch(addContact({createdAt:new Date().toISOString(), name: newName, phone: newPhone}));
        form.reset();
    };

    const nameId = nanoid();
    const numId = nanoid();
    return (
        <>
            <form className={scss.form} onSubmit={handleSubmit}>
                <label htmlFor={nameId}>Name</label>
                <input
                    id={nameId}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Z]+((['\u0020-\u002D][a-zA-Z])?[a-zA-Z]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label htmlFor={numId}>Phone number</label>
                <input
                    id={numId}
                    type="tel"
                    name="phone"
                    // pattern="((\+|00)?[1-9]{2}|0)[1-9]( ?[0-9]){8}"
                    placeholder="567-215-453"
                    pattern="\d\d\d-\d\d\d-\d\d\d"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with + Example: 567-216-456"
                    required
                />
                <button type="submit">Add contact</button>
            </form>
        </>
    );
}

export default ContactForm;