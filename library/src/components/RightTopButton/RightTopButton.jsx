/** @jsxImportSource @emotion/react */
import * as s from "./style"

function RIghtTopButton({ children, onClick }) {
    return (
        <button css={s.button} onClick={onClick}>{children}</button>
    );
}

export default RIghtTopButton;