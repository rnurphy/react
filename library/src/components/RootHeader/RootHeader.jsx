/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useRecoilState } from "recoil";
import { HiMenu } from "react-icons/hi"
import { menuState } from "../../atoms/menuAtom";
import { Link } from "react-router-dom";
import { FiUser, FiLogOut } from "react-icons/fi";
import { principalState } from "../../atoms/principalAtom";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import instance from "../../apis/utils/instance";


// const principal = queryClient.getQueryData("principalQuery"); // "key"로 찾기
// const principalState = queryClient.getQueryState("principalQuery");
function RootHeader() {
    const [ show, setShow ] = useRecoilState(menuState);
    const [ isLogin, setLogin ] = useState(false);
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");

    useEffect(() => {
        setLogin(() => principalQueryState.status === "success");
    }, [principalQueryState.status]);

    const handleOpenClick = (e) => {
        e.stopPropagation();
        setShow(() => true)
    }

    const handleLogoutClick = () => {
        localStorage.removeItem("AccessToken");
        instance.interceptors.request.use((config) => {
            config.headers.Authorization = null;    // config - 옵션
            return config;
        })
        queryClient.refetchQueries("principalQuery");   // 상태가 그대로라면 리렌더링 하지 않을 것
        window.location.replace("/auth/signin");
    }

    return (
        <div css={s.header}>
            <button css={s.menuButton} onClick={handleOpenClick}>
                <HiMenu />
            </button>
            {
                !isLogin ? <Link css={s.account} to={"/auth/signin"}>
                                <FiUser />
                            </Link>
                            : <div css={s.accountItems}>
                                <button css={s.logout} onClick={handleLogoutClick}>
                                    <FiLogOut />
                                </button>
                                <Link css={s.account} to={"/account/mypage"}>
                                    <FiUser />
                                </Link>
                            </div>
            }
        </div>
    );
}

export default RootHeader;