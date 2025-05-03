import Link from "next/link";
import { useRouter } from "next/router";
import stylesLogin from "./Login.module.scss";

const LoginViews = () => {
    const { push } = useRouter();
    const handleLogin = () => {
        push('/product');
    };

    console.log(stylesLogin);

    return (
        <div className={stylesLogin.login}>
            <div className="big">Login Page</div>
            <button onClick={() => handleLogin()}>Login</button>
            <p style={{ color: "red", border: "1px solid red", borderRadius: "5px", padding: "5px" }}>Belum punya akun? Registrasi <Link href={"/auth/register"}>disini</Link></p>
        </div>
    );
};

export default LoginViews;