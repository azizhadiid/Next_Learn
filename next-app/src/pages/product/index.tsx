import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type productType = {
    id: number;
    name: string;
    price: number;
    size: string;
};

const ProductPage = () => {
    const [isLogin, setLogin] = useState(true);
    const [products, setProducts] = useState([]);
    const { push } = useRouter();
    useEffect(() => {
        if (!isLogin) {
            push('/auth/login');
        }
    }, []);

    useEffect(() => {
        fetch("/api/product").then((res) => res.json()).then((data) => setProducts(data.data));
    }, []);

    return (
        <div>
            <span>Product Page</span>
            {products.map((product: productType) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
};

export default ProductPage;