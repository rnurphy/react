import React, { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { principalState } from '../atoms/principalAtom';
import { getPrincipalRequest } from '../apis/api/principal';
import { Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from '../pages/HomePage/HomePage';

function AuthRoute(props) {

    const [ principal, setPrincipal ] = useRecoilState(principalState);

    useEffect(() => {
        getPrincipal();
    }, []); 

    const getPrincipal = useCallback(() => {    // [] 변할때만 재정의
        getPrincipalRequest()
        .then(response => {
            setPrincipal(() => response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/auth/*" element={ <AuthPage /> } />
                <Route path="/" element={ <HomePage /> }/>
            </Routes>
        </div>
    );
}

export default AuthRoute;