import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ContactSearch = () => {
  const [searchedName,setSearchedName] = useState('');
  const dispatch = useDispatch();
  const searchName = (e) => {
    e.preventDefault();
    dispatch({type:'SEARCH_NAME',payload:{searchedName}});
  }
  return (
    <div className='search-wrap'>
      <form action='/' onSubmit={searchName}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type='text' placeholder='Search...' onChange={(e)=>{setSearchedName(e.target.value)}}/>
      </form>
    </div>
  )
}

export default ContactSearch
