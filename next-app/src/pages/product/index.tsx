import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductView from "@/views/Product";
import useSWR from "swr";
import { fetcher } from "@/utils/swr/fetcher";

const ProductPage = () => {
    const [isLogin, setLogin] = useState(true);
    // const [products, setProducts] = useState([]);

    const { push } = useRouter();
    useEffect(() => {
        if (!isLogin) {
            push('/auth/login');
        }
    }, []);

    const { data, error, isLoading } = useSWR(
        "/api/product",
        fetcher
    );

    // useEffect(() => {
    //     fetch("/api/product").then((res) => res.json()).then((data) => setProducts(data.data));
    // }, []);

    return (
        <div>
            <ProductView products={isLoading ? [] : data.data} />
        </div>
    );
};

export default ProductPage;