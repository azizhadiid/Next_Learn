import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
    const [isLogin, setLogin] = useState(false);
    const { push } = useRouter();
    useEffect(() => {
        if (!isLogin) {
            push('/auth/login');
        }
    }, []);

    return (
        <div>
            <span>Product Page</span>
        </div>
    );
};

export default ProductPage;