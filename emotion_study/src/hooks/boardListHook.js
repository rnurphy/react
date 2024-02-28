import { useMemo } from "react";

export function useLoadList() {
    const boardList = useMemo(() => {
        const lsBoardList = localStorage.getItem("boardList");

        return !lsBoardList ? [] : JSON.parse(lsBoardList); 
    }, []);

    const lastIndex = boardList.length - 1;
    const firstId = lastIndex < 0 ? 0 : boardList[0].boardId
    const lastId = lastIndex < 0 ? 0 : boardList[lastIndex].boardId;
    const size = boardList.length;

    // 객체를 만들때 key값을 생략하면 변수명이 key값이 된다
    return { boardList, size, firstId, lastId };
}