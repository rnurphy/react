import instance from "../utils/instance"

export const registerBook = async (data) => {
    return await instance.post("/admin/book", data);
}

export const searchBooksRequest = async (params) => {
    return await instance.get("/admin/books", {params});
}

export const getBookCountRequest = async (params) => {
    return await instance.get("/admin/books/count", {params});
}

export const deleteBooksRequest = async (data) => {
    return await instance.delete("/admin/books", {data});
}

export const updateBookRequest = async (data) => {
    return await instance.put(`/admin/book/${data.bookId}`, data);
}

/**
 * [ POST요청 ] PUT도 마찬가지
 * post(주소, 데이터(객체 -> JSON), {headers: {}})\
 * 
 * [ GET요청 ]
 * get(주소, {
 *      headers: {}, 
 *      params: {
 *          key: value
 *      }
 * }) 
 * 
 * [ DELETE 요청 ]
 * delete(주소, {
 *      headers: {
 * 
 *      },
 *      data: {
 *          key: value
 *      }
 * })
 * 
 *  */ 