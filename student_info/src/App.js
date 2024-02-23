import { Link, Route, Routes } from 'react-router-dom';
import Memoization from './pages/Memoization';
import StudentArrayPage from './pages/StudentArrayPage';
import StudentArrayPage3 from './pages/StudentArrayPage3';
import StudentPage from './pages/StudentPage';
import ProductPage from './pages/Productpage';
import Params from './pages/Params';
import SearchPage from './pages/SearchPage';
import { useState } from 'react';
import SubRoute from './pages/SubRoute';

function App() {

  const [ value, setValue ] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)}/>
      <ul>
        <Link to="/memoization"><li>메모이제이션</li></Link>
        <Link to="/st"><li>학생정보</li></Link>
        <Link to="/sta1"><li>학생들정보1</li></Link>
        <Link to="/sta3"><li>학생들정보3</li></Link>
        <Link to={`/p?data=${value}`}><li>파람스</li></Link>
        <Link to={`/books?bookName=${value}`}><li>도서검색</li></Link>
      </ul>
      <Routes>
        <Route path="/memoization" element={ <Memoization /> }/>
        <Route path="/st" element={ <StudentPage /> }/>
        <Route path="/sta1" element={ <StudentArrayPage /> }/>
        <Route path="/sta3" element={ <StudentArrayPage3 /> }/>
        <Route path="/p" element={ <Params /> }/>
        <Route path="/books" element={ <SearchPage /> }/>
        <Route path="/product/:productId" element={ <ProductPage /> }/>
        <Route path="/sub/*" element={ <SubRoute /> }/>

      </Routes>
    </>
  );
  // return (
  //   // <StudentArrayPage2 />
  //   <Memoization />
  // );
}

export default App;

  /* js객체 특징
  1. key 값은 문자열이어도 된다.
  2. key값을 []로 묶어도 된다.
  단, 대괄호 안에는 값을 가지는 변수를 쓸 수 있다.
  - 변수의 문자열값을 키값으로 쓰고 싶을 때 []로 묶어서 참조할 수 있다.
  3. 변수명만 입력 시, 객체의 key와 value로 한번에 정의 가능
  */
  // let email = "email";
  // let phone = "01099881916";
  // let user = {
  //   username: "test",
  //   "password": "1234",
  //   [email]: "test",
  //   phone
  // }