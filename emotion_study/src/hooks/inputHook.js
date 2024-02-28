import { useState } from "react";

export function useInput() {
    const [ inputValue, setInputValue ] = useState("");

    const onChange = (e) => {
        const { value } = e.target;
        setInputValue(() => value);
    }

    return [ inputValue, onChange ];
}

/**
 * 
 * @param {*} maxSize 
 * @returns 
 */
export function useMaxSizeValidateInput(maxSize) {
    const [ inputValue, setInputValue ] = useState("");

    const onChange = (e) => {
        const { value } = e.target;
        if(value.length <= maxSize) {
            setInputValue(() => value);
        }
    }

    return [ inputValue, onChange ];
}

// const [ inputValue, setInputValue ] = useState("");

// const handleInputChange = (e) => {
//     const { value } = e.target;
    
//     // 이게 더 나은 방법임(매번 조건 검사를 하더라도)
//     if(value.length < 20) {
//         setInputValue(() => value);
//     }

//     // 비교할게없는데 Virtual DOM이 계속 동작해버리므로 좋지 않은 방법
//     // setInputValue((v) => value.length < 20 ? value : v);

// }

