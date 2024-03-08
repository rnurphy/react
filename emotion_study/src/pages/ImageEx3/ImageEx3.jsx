/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef, useState } from "react";

const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const imgLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 300px;
    height: 300px;

    overflow: hidden;

    & > img {
        width: 100%;
    }
`

function ImageEx3() {
    const fileInputRef = useRef();
    const imageIdRef = useRef(0);
    const [ loadImages, setLoadImages ] = useState([]);
/**
 * {
 *      id: 1,
 *      file: file객체,
 *      dataURL: ""
 * }
 */
    const handleFileChange = (e) => {
        console.log(e.target.files);    // -> FileList 객체
        const { files } = e.target;
        const fileArray = Array.from(files);

        if(fileArray.length === 0) {
            fileInputRef.current.value = "";
            return;
        }
        
        console.log(fileArray);
        console.log(fileArray.map(file => file.name));
        let promises = [];

        promises = fileArray.map(file => new Promise(resolve => {
            
            const loadImage = {
                id: imageIdRef.current += 1,
                file,
                dataURL: ""
            }

            const fileReader = new FileReader();

            // onload는 비동기라서 언제 호출 될지 모름
            fileReader.onload = (e) => {
                console.log(e);         // 이벤트
                console.log(e.target);  // 이벤트가 발생한 객체(FileReader)
                        
                resolve({
                    ...loadImage,
                    dataURL: e.target.result    // FileReader 객체의 result 속성이 이미지 데이터 URL 갖고 있음
                });
            }

            // 읽기 완료 시 ProgressEvent<FileReader> 객체가 onload의 매개변수로 전달됨
            fileReader.readAsDataURL(file);
        }))

        Promise.all(promises).then(result => {
            setLoadImages(result);
            console.log(result);
        })
        
    }

    return (
        <div css={layout}>
            {loadImages.map(loadImage => 
                <div css={imgLayout} key={loadImage.id}>
                    <img src={loadImage.dataURL} alt={loadImage.file.name} />
                </div>
            )}
            <input type="file" style={{display: "none"}} multiple={true} ref={fileInputRef} onChange={handleFileChange}/>
            <button onClick={() => fileInputRef.current.click()}>불러오기</button>
        </div>
    );
}

export default ImageEx3;