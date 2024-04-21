import { useState, useEffect} from 'react'
import './App.css'

import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import ContactForm from './components/ContactForm/ContactForm'

function App() {

 return (
  <div>
    <div className='forms'>
    <h1 className='phonebook'>Phonebook</h1>
    <ContactForm/>
    <SearchBox />
    </div>
<ContactList/>
  </div>
 )
}

export default App