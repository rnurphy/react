import { useState } from "react";

export function useQuillInput() {
    const [ quillValue, setQuillValue ] = useState(0);

    const onChange = (value) => {
        setQuillValue(() => value);
    }

    return [ quillValue, onChange ];
}