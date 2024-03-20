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

export const accountItems = css`
    display: flex;
    align-items: center;
    height: 100%;

`;

export const account = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0px 8px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    overflow: hidden;
    text-decoration: none;
    color: #222222;

    cursor: pointer;
`;

export const logout = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0px;
    padding: 0;
    border: 1px solid #dbdbdb;
    border-radius: 50%;

    border: none;

    width: 30px;
    height: 30px;
    overflow: hidden;
    background-color: transparent;

    cursor: pointer;
`;