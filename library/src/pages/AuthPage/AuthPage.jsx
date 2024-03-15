/** @jsxImportSource @emotion/react */
import SignupPage from "../SiginupPage/SignupPage";
import * as s from "./style"

import { Route, Routes } from "react-router-dom";

function AuthPage() {
    
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/signin"></Route>
                <Route path="/signup" element={ <SignupPage/ >}></Route>
                <Route path="/signup/oauth"></Route>
            </Routes>
        </div>
    );
}

export default AuthPage;