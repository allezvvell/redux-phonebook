import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';


const ContactItem = ({item}) => {
  const dispatch = useDispatch();
  const removeNum = () => {
    dispatch({type:'REMOVE_CONTACT',payload:{name:item.name,phoneNum:item.phoneNum,id:item.id}})
  }
  return (
    <div className='item-box'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg' alt='프로필 이미지'/>
      <p className='name'><strong>{item.name}</strong></p>
      <p className='number'>{item.phoneNum}</p>
      <button onClick={removeNum}><FontAwesomeIcon icon={faXmark}/>delete</button>
    </div>
  )
}

export default ContactItem
