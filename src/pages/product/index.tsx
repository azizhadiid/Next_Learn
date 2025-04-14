import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const { push } = useRouter();

    useEffect(() => {
        // Cek login (contoh: pakai localStorage, cookie, atau API)
        // Di sini kita hanya pakai isLogin state untuk contoh
        if (!isLogin) {
            push("/auth/login");
        }
    }, [isLogin, push]);

    return (
        <div>
            <h1>Product Page</h1>
        </div>
    );
};

export default ProductPage;
