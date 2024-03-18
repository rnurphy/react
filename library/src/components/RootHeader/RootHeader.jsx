/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { useRecoilState } from "recoil";
import { HiMenu } from "react-icons/hi"
import { menuState } from "../../atoms/menuAtom";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { principalState } from "../../atoms/principalAtom";


function RootHeader() {
    const [ show, setShow ] = useRecoilState(menuState);
    const [ principal, setPrincipal ] = useRecoilState(principalState);

    const handleOpenClick = () => {
        setShow(() => true)
    }

    return (
        <div css={s.header}>
            <button css={s.menuButton} onClick={handleOpenClick}>
                <HiMenu />
            </button>
            {
                !principal 
                    ? <Link css={s.account} to={"/auth/signin"}>
                        <FiUser />
                    </Link>
                    : <Link css={s.account} to={"/account/mypage"}>
                        <FiUser />
                    </Link>
            }
        </div>
    );
}

export default RootHeader;