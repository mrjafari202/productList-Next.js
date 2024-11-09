import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

// const useProducts = (page) => {
//     const queryFn = () => api.get(`/products?page=${page}&limit=10`); 
//     const queryKey = ["products", page];

//     return useQuery({ queryFn, queryKey });
// };
const useProducts = (page, search) => {
    const queryKey = search ? ["products", "all", search] : ["products", page];
    const queryFn = () => {
        // اگر `search` وجود داشت همه داده‌ها را بدون محدودیت صفحه بازگرداند
        const url = search ? `/products?search=${search}` : `/products?page=${page}&limit=10`;
        return api.get(url);
    };

    return useQuery({ queryFn, queryKey });
};

export { useProducts };
