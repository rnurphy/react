import React, { useEffect, useRef, useState } from 'react';

function StudentArrayPage2(props) {
    const staticId = useRef(0);

    // const student = {
    //     id: 0,
    //     name: "",
    //     score: 0
    // }

    const [ studentList, setStudentList ] = useState([]);
    const [ flag, setFlag ] = useState(false);

    const [ scoreData, setScoreData ] = useState({
        total: 0,
        avg: 0
    })

    const [ inputData, setInputData ] = useState({
        id: "",
        name: "",
        score: ""
    })


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name]: value
        });
    }

    const addData = () => {
        const student = {
            ...inputData,
            id: staticId.current += 1
        }
        setStudentList([...studentList, student]);
        

        console.log("이펙트 전" + studentList.length);
    }

    const removeData = (id) => {
        setStudentList([...studentList.filter(student => student.id !== id)]);
    }

    useEffect(() => {
        if(flag) {
            console.log("이펙트 후" + studentList.length);

            let total = 0;
            for(let student of studentList) {
                total += parseInt(student.score);
            }

            const num = {
                total,
                avg: (total / studentList.length).toFixed(2)
            };

            setScoreData(num);
        }
        setFlag(true);
    }, [studentList])

    useEffect(() => {
        if(flag) {
            setInputData({
                id: "",
                name: "",
                score: ""
            });
        }
        setFlag(true);
    }, [scoreData])

    return (
        <div>
            <div>
                <input type='text' placeholder='ID' disabled={true} value={inputData.id} />
                <input type="text" placeholder='이름' onChange={handleInputChange} value={inputData.name} name='name'/>
                <input type="text" placeholder='점수' onChange={handleInputChange} value={inputData.score} name='score'/>
                <button onClick={() => {addData();}}>추가</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>점수</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map(student => {
                        return <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.score}</td>
                            <button onClick={() => {}}>수정</button>
                            <button onClick={() => {removeData(student.id);}}>삭제</button>
                        </tr>
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>총점</th>
                        <th colSpan={2}>{scoreData.total}</th>
                    </tr>
                    <tr>
                        <th>평균</th>
                        <th colSpan={2}>{scoreData.avg}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default StudentArrayPage2;