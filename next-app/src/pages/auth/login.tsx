import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
    const { push } = useRouter();
    const handleLogin = () => {
        push('/product');
    };

    return (
        <div>
            <div>Login Page</div>
            <button onClick={() => handleLogin()}>Login</button>
            <p>Belum punya akun? Registrasi <Link href={"/auth/register"}>disini</Link></p>
        </div>
    );
};

export default LoginPage;