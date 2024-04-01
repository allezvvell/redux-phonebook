import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name,setName] = useState('');
  const [phoneNum,setPhoneNum] = useState('');
  const addContact = (e) => {
      e.preventDefault();
      dispatch({type:'ADD_CONTACT',payload:{name,phoneNum}});
      setName('');
      setPhoneNum('');
  }
  return (
    <div className='form-wrap'>
      <form action='/' onSubmit={addContact}>
        <div className='form-group'>
            <label htmlFor='input-name'>Name</label>
            <input 
              type='text' 
              value={name}
              id='input-name' 
              placeholder='이름을 입력해주세요' 
              maxLength={15} 
              onChange={(e) => {setName(e.target.value)}}/>
        </div>
        <div className='form-group'>
            <label htmlFor='input-number'>Phone Number</label>
            <input 
              type='text' 
              value={phoneNum}
              id='input-number' 
              placeholder='번호를 입력해주세요' 
              maxLength={15} 
              onChange={(e) => {setPhoneNum(e.target.value)}}/> 
        </div>
        <div className='button-box'><button type='submit'>추가</button></div>
      </form>
    </div>
  )
}

export default ContactForm
