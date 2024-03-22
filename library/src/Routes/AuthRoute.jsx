import React, { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { principalState } from '../atoms/principalAtom';
import { getPrincipalRequest } from '../apis/api/principal';
import { Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from '../pages/HomePage/HomePage';
import { useQuery } from 'react-query';
import RoodSideMenuLeft from '../components/RootSideMenuLeft/RoodSideMenuLeft';
import RootHeader from '../components/RootHeader/RootHeader';
import { GridLoader } from 'react-spinners';
import FullSizeLoader from '../components/FullSizeLoader/FullSizeLoader';
import MyPage from '../pages/MyPage/MyPage';
import PageContainer from '../components/PageContainer/PageContainer';
import PasswordEditPage from '../pages/PasswordEditPage/PasswordEditPage';

/* 
useQuery => GET 요청시 사용, 포커스 감지
첫번째 매개변수: 배열 [ "key", dependency ]
두번째 매개변수: 요청메서드(async, await) // apis에 정의함
세번째 매개변수: 옵션(객체형태) {
                    retry: 0, (요청 재시도 횟수, 디폴트 5번)
                    refetchOnWindowFocus: false, (디폴트는 true(포커스 감지)인듯)
                    onSuccess: 함수,
                    onError: 함수,
                    enabled: true or false
                }

*/

function AuthRoute(props) {

    const principalQuery = useQuery(["principalQuery"], getPrincipalRequest, 
    {
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            console.log("principalQuery: onSuccess");
            console.log(response);
        },
        onError: error => {
            console.log("principalQuery: 실패");
            console.log(error);
        }
    });
    
    return (
        <>
            <RoodSideMenuLeft />
            <RootHeader />
            <PageContainer>
                {
                    principalQuery.isLoading
                    ? <FullSizeLoader size={20}/>
                    : <Routes>
                        <Route path="/auth/*" element={ <AuthPage /> }/>
                        <Route path="/" element={ <HomePage /> }/>
                        <Route path="/account/mypage" element={ <MyPage /> }/>
                        <Route path="/account/edit/password" element={ <PasswordEditPage /> }/>
                    </Routes>
                }
            </PageContainer>
        </>
    );
}

    // 리액트 쿼리 사용 전
    // const [ principal, setPrincipal ] = useRecoilState(principalState);
    // useEffect(() => {
    //     getPrincipal();
    // }, []); 

    // const getPrincipal = useCallback(() => {    // [] 변할때만 재정의
    //     getPrincipalRequest()
    //     .then(response => {
    //         setPrincipal(() => response.data);
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }, []);
export default AuthRoute;