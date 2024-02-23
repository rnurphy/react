import React, { useEffect, useRef, useState } from 'react';
import StudentInfo from '../components/StudentInfo';
import InfoInput from '../components/InfoInput';
import InfoButtons from '../components/InfoButtons';

function StudentPage(props) {
    const studentObj = {
        name: "",
        age: "",
        address: ""
    };
    
    // setter는 비동기이다.
    const [ student, setStudent ] = useState(studentObj);
    const [ inputValues, setInputValues ] = useState(studentObj);

    const inputRef = {
        name: useRef(),
        age: useRef(),
        address: useRef()
    }

    useEffect(() => {
    console.log(inputRef.name.current);
    }, []);

    useEffect(() => {
    setInputValues(studentObj);
    }, [student]);

    // html DOM 요소의 변화를 인지
    // [] - dependecy 의존성, 상태가 들어감
    // dependency 변화가 있으면 실행
    // 그냥 쌩대괄호는 최초 1번 실행

    const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValues({
        ...inputValues,
        [name]: value
    });
    }

    const handleOnOk = () => {
    setStudent(inputValues);
    }

    const handleOnClean = () => {
    setStudent(studentObj);
    }

    return (
    <>
        <StudentInfo title="이름" text={student.name}/>
        <StudentInfo title="나이" text={student.age}/>
        <StudentInfo title="주소" text={student.address}/>

        {/* <h1>이름: {student.name}</h1>
        <h1>나이: {student.age}</h1>
        <h1>주소: {student.address}</h1> */}

        <InfoInput
        name={"name"}
        onChange={handleInputChange}
        value={inputValues.name}
        placeholder={'이름'}
        inputRef={inputRef.name}
        />

        <InfoInput
        name={"age"}
        onChange={handleInputChange}
        value={inputValues.age}
        placeholder={'나이'}
        inputRef={inputRef.age}
        />

        <InfoInput
        name={"address"}
        onChange={handleInputChange}
        value={inputValues.address}
        placeholder={'주소'}
        inputRef={inputRef.address}
        />

        {/* <input type="text" 
        name='name' 
        onChange={handleInputChange} 
        value={inputValues.name} 
        placeholder='이름'/>

        <input type="text" 
        name='age' 
        onChange={handleInputChange} 
        value={inputValues.age} 
        placeholder='나이'/>

        <input type="text" 
        name='address' 
        onChange={handleInputChange} 
        value={inputValues.address} 
        placeholder='주소'/> */}

        <InfoButtons>
        <button onClick={handleOnOk}>확인</button>
        <button onClick={handleOnClean}>비우기</button>
        </InfoButtons>
    </>
    );
}

export default StudentPage;