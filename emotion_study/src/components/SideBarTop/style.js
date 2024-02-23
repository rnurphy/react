import { css } from "@emotion/react";

export const layout = (isShow) => css`
    box-sizing: border-box;
    position: fixed;

    right: 0;
    top: ${isShow ? "0px": "-80px"};

    z-index: 99;

    border-left: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    width: 50%;
    height: 80px;
    transition: top 0.5s ease-in-out;
    background-color: white;
`;

export const toggleButton = css`
    box-sizing: border-box;
    position: absolute;

    top: 100%;
    left: 80%;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 1px solid #dbdbdb;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 50px;
    height: 15px;

    cursor: pointer;
    background-color: white;
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #ccc;
    }
    
`;


export const menuList = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const menuItemBox = css`
    display: flex;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 180px;
    height: 40px;

    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin-left: 20px;

    &:nth-of-type(1) {
        margin-left: 0px;
    }
`;

export const menuItem = css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;

    color: black;
    cursor: pointer;

    font-weight: 600;
`;