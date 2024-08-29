import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactForm from "../ContactForm/index";
import Filter from "../Filter/index";
import ContactList from "../ContactList/index";
import scss from "./Phonebook.module.scss";

import { fetchContacts } from "../redux/operations";
import { RootState, AppDispatch } from "../redux/store";
import { selectError } from "../redux/selectors";

export function Contacts() {
     const dispatch = useDispatch<AppDispatch>();
    
    
    
 useEffect(() => {
        dispatch(fetchContacts());
 }, [dispatch]);
    
    const { items,isLoading } = useSelector((state: RootState) => state.contacts);
const error = useSelector(selectError)
    console.log("Contacts ->useSelector error", error);
    return (
        <div className={scss.phonebookContainer}>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            {error&&(<div>Error...</div>)}
            {
            isLoading ?(<div>Loading...</div>)
            :<ContactList />}
        </div>
    );
};