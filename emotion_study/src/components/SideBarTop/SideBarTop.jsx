/** @jsxImportSource @emotion/react */
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import * as S from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MENUS } from "../../constants/menu";

function SideBarTop() {
    const [ isShow, setShow ] = useState(false);

    return (
        <aside css={S.layout(isShow)}>
            <button css={S.toggleButton} onClick={() => setShow(!isShow)}>
                {isShow ? <FaCaretUp /> : <FaCaretDown />}
            </button>
            <ul css={S.menuList}>
                {MENUS.map(menu =>
                    <Link css={S.menuItemBox} to={menu.path} key={menu.id} onClick={() => setShow(false)}>
                        <li css={S.menuItem}>{menu.name}</li>
                    </Link>)}
            </ul>
        </aside>
    );
}

export default SideBarTop;