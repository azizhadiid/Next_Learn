import Link from "next/link";

const RegisterPage = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <p>
                Sudah punya akun klik <Link href={'/auth/login'}>Di sini!</Link>
            </p>
        </div>
    );
};

export default RegisterPage;
