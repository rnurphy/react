/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { storage } from "../../configs/firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Line } from "rc-progress";
import { v4 as uuid } from "uuid"; 

const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const imageLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 300px;

    overflow: hidden;
    & > img {
        width: 100%;
    }
`;

// fileReader.readyState
// EMPTY(0) - 아직 로드 안됨
// LOADING(1) - 로딩중
// DONE(2) - 모든 읽기 요청 완료

function ImageEx() {
    const [ url, setUrl ] = useState([]); 
    const [ uploadFiles, setUploadFiles ] = useState([]);
    const [ previews, setPreviews ] = useState([]);
    const [ progressPercent, setProgressPercent ] = useState(0);

    const imgFileRef = useRef();

    useEffect(() => {
        setUrl(!localStorage.getItem("urls") ? [] : JSON.parse(localStorage.getItem("urls")));
    }, []);

    const handleImgFileChange = (e) => {
        // fileList 객체를 일반 Array로 변환
        const files = Array.from(e.target.files);

        if(files.length === 0) {
            imgFileRef.current.value = "";
            return;
        }

        setUploadFiles(files);

        let promises = [];

        // fileList는 map 사용불가 따라서 일반 배열로 바꿔줘야함
        // map, filter, foreach 등 사용불기
        // map을 이용한 방법
        promises = files.map(file => new Promise((resolve) => {
            const fileReader = new FileReader();
            
            fileReader.onload = (e) => {
                console.log(e.target.result);
                resolve(e.target.result);   // resolve 호출 시 then
            }

            fileReader.readAsDataURL(file); // 비동기임
        }));

        // for문을 이용한 방법
        // for(let file of e.target.files) {
        //     promises = [...promises, new Promise((resolve) => {
        //         const fileReader = new FileReader();
                
        //         fileReader.onload = (e) => {
        //             console.log(e.target.result);
        //             resolve(e.target.result);   // resolve 호출 시 then
        //         }
    
        //         fileReader.readAsDataURL(file); // 비동기임
        //     })];
        // }

        // Promise.all - 여러개의 promise를 동시에 실행시킨다
        // WHY? 각각의 비동기 결과가 배열의 순서대로 저장됨 이후 배열을 리턴
        // result - 배열이 들어온다
        Promise.all(promises).then(result => {
            console.log(result);
            setPreviews(result);
        });
    }

    const handleImageUpload = () => {
        const file = uploadFiles[0];
        console.log(uploadFiles);

        // 업로드 명령 - ref(저장소, 형식)
        const storageRef = ref(storage, `files/test/${uuid()}_${file.name}`);

        // 실제 업로드
        const uploadTask = uploadBytesResumable(storageRef, file);

        // 4개의 매개변수가 들어감
        uploadTask.on(
            "state_changed",    // 업로드 되는 상황을 의미
            (snapshot) => {
                setProgressPercent(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
            },
            (error) => {},
            () => {
                getDownloadURL(storageRef).then(url => {
                    localStorage.setItem("url", url);
                    setUrl(url);
                    setPreviews([]);
                })
            }
        );


    }

    return (
        <div css={layout}>
            {/* <div css={imageLayout}>
                <img src={url} alt="" />
            </div> */}
            {previews.map((preview, index) =>
                <>
                    <div key={index} css={imageLayout}>
                        <img src={preview} alt=""/>
                    </div>
                    <Line percent={progressPercent} strokeWidth={4} strokeColor={"#dbdbdb"}/>
                </>
            )}
            
            <input style={{display: "none"}} type="file" multiple={true} ref={imgFileRef} onChange={handleImgFileChange} />
            <button onClick={() => imgFileRef.current.click()}>이미지 불러오기</button>
            <button onClick={handleImageUpload}>이미지 업로드</button>
        </div>
    );
}

export default ImageEx;