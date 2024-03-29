import { useState } from "react"

export const useBookRegisterInput = ( enterFn, ref ) => {
    const [ value, setValue ] = useState("");

    const handleOnChange = (e) => {
        if(!!e.target) {    // input
            setValue(() => e.target.value);
        }else {             // select
            setValue(() => e);
        }
    }

    const handleOnKeyDown = (e) => {
        if(e.keyCode === 13) {
            enterFn(ref);
        }
    }

    return { value, handleOnChange, handleOnKeyDown, setValue };
}