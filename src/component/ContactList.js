import React from 'react';
import ContactSearch from './ContactSearch';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';



const ContactList = () => {
  const itemList = useSelector(state=>state.contactList);
  const searchedName = useSelector(state=>state.searchedName);
  const searchedList = itemList.filter(item=>item.name.includes(searchedName));
  return (
    <div className='list-wrap'>
      <ContactSearch />
      <div className='result-box'>
        <p className='total'>Total {searchedList.length}</p>
        {  searchedList.map((item,index) => {
          return <ContactItem item={item} key={index}/>
        }
        )
      }
      </div>
    </div>
  )
}

export default ContactList
