import './App.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';




// 1.왼쪽에는 연락처 등록폼, 오른쪽엔 연락처 리스트와 search창이
// 2. 리스트에 유저 이름과 전화번호를 추가 할 수 있다.
// 3. 리스트에 아이템이 몇개있는지 보인다
// 4. 사용자가 유저를 이름검색으로 찾을 수 있다

function App() {
  return (
    <div className='container'>
      <h1>Phone Book</h1>
      <div className='phonebook-wrap'>
        <ContactForm />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
