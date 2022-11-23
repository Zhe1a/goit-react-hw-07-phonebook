import s from './App.module.css';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getError, getIsLoading, getTasks } from 'redux/selectors';
import { contactsListApi } from 'redux/operations';

function App() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsListApi());
  }, [dispatch]);

  return (
    <>
      <h1 className={s.titel}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.titel}>Contacts</h2>
      <Filter />
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      <ContactList />
    </>
  );
}

export default App;
