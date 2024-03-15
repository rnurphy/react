import { css } from "@emotion/react";

export const header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin-top: 15px;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 50px;
    padding: 0px 10px;

`;

export const menuButton = css`
    border: none;
    box-sizing: border-box;
    padding: 10px;
    cursor: pointer;

    background-color: transparent;

    % > * { 
        font-size: 16px;
    }
`; 