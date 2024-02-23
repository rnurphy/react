import React from "react";

function CountButton({ title, onclick }) {   // props는 객체형태로 전달이 됨 { ... } 따라서 비구조할당으로 받을 수 있다.
    return (
        <button onClick={ onclick }>{ title }</button>
    );
}

export default CountButton;