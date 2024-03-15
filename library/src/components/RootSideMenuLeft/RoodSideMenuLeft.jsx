/** @jsxImportSource @emotion/react */
import * as s from "./style"
import { HiMenu } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { menuState } from "../../atoms/menuAtom";
import { Link } from "react-router-dom";

function RoodSideMenuLeft() {
    const [ show, setShow ] = useRecoilState(menuState);

    const handleCloseClick = () => {
        setShow(() => false)
    }

    return (
        <div css={s.layout(show)}>
            <div css={s.header}>
                <button css={s.menuButton} onClick={handleCloseClick}>
                    <HiMenu />
                </button>
            </div>
            <div css={s.profile}>

            </div>
            <div css={s.menuList}>
                <Link css={s.menuLink}>도서검색</Link>
            </div>
        </div>
    );
}

export default RoodSideMenuLeft;